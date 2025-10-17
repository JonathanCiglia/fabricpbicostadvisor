(() => {
  const wrap = document.querySelector('.note-wrap');
  if (!wrap) return;

  const toggle = wrap.querySelector('#note-toggle');
  const input  = wrap.querySelector('.note-input');
  const clear  = wrap.querySelector('.note-clear');

  const KEY_NOTE   = 'advisor-note:text';
  const KEY_TOGGLE = 'advisor-note:open';

  // restore state
  try {
    const savedText = localStorage.getItem(KEY_NOTE);
    if (savedText !== null) input.value = savedText;

    const open = localStorage.getItem(KEY_TOGGLE);
    if (open === '1') toggle.checked = true;
  } catch {}

  // persist on input / toggle
  input?.addEventListener('input', () => {
    try { localStorage.setItem(KEY_NOTE, input.value); } catch {}
  });
  toggle?.addEventListener('change', () => {
    try { localStorage.setItem(KEY_TOGGLE, toggle.checked ? '1' : '0'); } catch {}
  });

  // clear button
  clear?.addEventListener('click', () => {
    input.value = '';
    try { localStorage.removeItem(KEY_NOTE); } catch {}
    input.focus();
  });
})();


// --- State ---
const state = {
currencyCode: "EUR",
currencySymbol: "€",
viewers: 800,
builders: 30,
proCost: 14,
capacities: [], // { id, name, monthlyCost }
maxInstances: 3
};

// Currency map (common Azure pricing currencies)
const currencyMap = {
"EUR": "€","USD": "$","GBP": "£","AUD": "A$","CAD": "C$","CHF": "CHF",
"DKK": "kr","SEK": "kr","NOK": "kr","JPY": "¥","INR": "₹","SGD": "S$",
"NZD": "NZ$","BRL": "R$","MXN": "MX$","ZAR": "R","AED": "د.إ","SAR": "﷼",
"TRY": "₺","PLN": "zł","CZK": "Kč","HUF": "Ft","ILS": "₪"
};

// --- Helpers ---
const fmt = (v) => Number.isFinite(v) ? v.toLocaleString(undefined, {maximumFractionDigits: 2}) : "—";
const money = (v) => `${state.currencySymbol}${fmt(v || 0)}`;
const byId = (id) => document.getElementById(id);

// Extract F number from instance name: "F32" -> 32
function getFSkuNumber(name) {
const m = String(name || "").match(/f\s*(\d+)/i);
return m ? parseInt(m[1], 10) : null;
}
// Viewer rule: Pro on F32-; Free on F64+; unknown => Pro
function viewerUnitCost(name) {
const f = getFSkuNumber(name);
if (Number.isInteger(f)) {
    if (f >= 64) return 0;
    if (f > 0 && f <= 32) return state.proCost;
}
return state.proCost;
}

function computePpuOnly() {
const totalUsers = state.viewers + state.builders;
const total = totalUsers * state.proCost;
return { total, detail: `${totalUsers} × Pro @ ${money(state.proCost)}` };
}

function computeCapacityTotals() {
return state.capacities
    .slice(0, state.maxInstances)
    .map(c => {
    const vUnit = viewerUnitCost(c.name);
    const cap = c.monthlyCost || 0;
    const buildersCost = state.builders * state.proCost;
    const viewersCost = state.viewers * vUnit;
    const total = cap + buildersCost + viewersCost;
    return {
        id: c.id,
        name: c.name || "(unnamed)",
        monthlyCost: cap,
        viewerUnitCost: vUnit,
        buildersCost,
        viewersCost,
        total
    };
    });
}

function renderComparisonTable(caps, ppuOnly) {
const wrap = byId("comparisonTableWrap");
wrap.innerHTML = "";

const allRows = [
    ...caps.map(c => ({
    label: c.name,
    policy: c.viewerUnitCost === 0 ? "Free viewers" : "Viewers & builders require Pro ",
    capCost: c.monthlyCost,
    buildersCost: c.buildersCost,
    viewersCost: c.viewersCost,
    total: c.total
    }))
];

const bestRow = allRows.reduce((a, b) => (b.total < a.total ? b : a), allRows[0]);

const tbl = document.createElement("table");
tbl.className = "table";
tbl.innerHTML = `
    <thead>
    <tr>
        <th>Scenario</th>
        <th>Viewer Policy</th>
        <th class="right">Capacity</th>
        <th class="right">Builders</th>
        <th class="right">Viewers</th>
        <th class="right">Total / month</th>
    </tr>
    </thead>
    <tbody></tbody>
`;
const tbody = tbl.querySelector("tbody");

allRows.forEach(row => {
    const tr = document.createElement("tr");
    if (row === bestRow) tr.classList.add("best-row");
    const delta = row.total - ppuOnly.total;
    tr.innerHTML = `
    <td>${row.label} ${row === bestRow ? `<span class="best-badge">Best</span>` : ""}</td>
    <td>${row.policy}</td>
    <td class="right">${money(row.capCost)}</td>
    <td class="right">${money(row.buildersCost)}</td>
    <td class="right">${money(row.viewersCost)}</td>
    <td class="right"><strong>${money(row.total)}</strong></td>
    `;
    tbody.appendChild(tr);
});

wrap.appendChild(tbl);
}

function updateRecommendation(caps, ppuOnly) {
const candidates = [...caps.map(x => ({ label: `${x.name}`, total: x.total }))];
const best = candidates.length > 0 ? candidates.reduce((a, b) => (b.total < a.total ? b : a)) : undefined;
byId("recommendationMain").textContent = best ? `${best.label} — ${money(best.total)}` : 'Add capacities to see a recommendation';
}

function updateKPIs() {
const ppuOnly = computePpuOnly();
// (Hidden by default; still computed for baseline and deltas)
byId("kpippuOnly").textContent = money(ppuOnly.total);
byId("kpippuOnlyDetail").textContent = ppuOnly.detail;

const caps = computeCapacityTotals();
renderComparisonTable(caps, ppuOnly);
updateRecommendation(caps, ppuOnly);

const limitNote = byId("limitNote");
if (state.capacities.length >= state.maxInstances) {
    limitNote.textContent = `Limit reached (${state.maxInstances} instances). Remove one to add another.`;
} else {
    limitNote.textContent = "";
}
}

// --- UI Wiring ---
function readInputs() {
state.currencyCode = byId("currencySelect").value;
state.currencySymbol = currencyMap[state.currencyCode] || "€";
state.viewers = Number(byId("viewerCount").value) || 0;
state.builders = Number(byId("builderCount").value) || 0;
state.proCost = Number(byId("proCost").value) || 0;
updateKPIs();
}
["currencySelect","viewerCount","builderCount","proCost"].forEach(id => byId(id).addEventListener("input", readInputs));

const tbody = byId("capacityTbody");
let capIdCounter = 1;

function updateAddButtonState() {
const addBtn = byId("addCapacityBtn");
addBtn.disabled = state.capacities.length >= state.maxInstances;
}

function addCapacityRow(name = "", monthlyCost = "") {
if (state.capacities.length >= state.maxInstances) {
    updateAddButtonState();
    updateKPIs();
    return;
}

const fabricSKUs = [
    "F2", "F4", "F8", "F16", "F32", "F64", "F128", "F256", "F512", "F1024", "F2048"
];
const selectedSKU = fabricSKUs.includes(name) ? name : fabricSKUs[0];  
const options = fabricSKUs.map(
    sku => `<option value="${sku}"${sku === selectedSKU ? " selected" : ""}>${sku}</option>`
).join("");


const id = capIdCounter++;
const row = document.createElement("tr");
row.dataset.id = id;

state.capacities.push({ id, name: selectedSKU, monthlyCost: Number(monthlyCost) || 0 });

row.innerHTML = `
    <td><select>${options}</select></td>
    <td><input type="integer" min="0" placeholder="0.0" value="${monthlyCost}" /></td>
    <td class="right"><button class="del">Remove</button></td>
`;

const [skuSelect, costInput, delBtn] = row.querySelectorAll("select, input, button");
skuSelect.addEventListener("change", () => {
    const cap = state.capacities.find(c => c.id === id);
    if (cap) cap.name = skuSelect.value;
    updateKPIs();
});
costInput.addEventListener("input", () => {
    const cap = state.capacities.find(c => c.id === id);
    if (cap) cap.monthlyCost = parseInt(costInput.value) || 0;
    updateKPIs();
});
delBtn.addEventListener("click", () => {
    tbody.removeChild(row);
    const idx = state.capacities.findIndex(c => c.id === id);
    if (idx >= 0) state.capacities.splice(idx, 1);
    updateAddButtonState();
    updateKPIs();
});

tbody.appendChild(row);
updateAddButtonState();
updateKPIs();
}

byId("addCapacityBtn").addEventListener("click", () => addCapacityRow());

// Footer actions
byId("resetBtn").addEventListener("click", () => {
byId("currencySelect").value = "EUR";
byId("viewerCount").value = 0;
byId("builderCount").value = 0;
byId("proCost").value = 0;
byId("fabricRegion").value = "";
byId("recommendationMain").textContent = "";
state.currencyCode = "EUR";
state.currencySymbol = currencyMap["EUR"];

state.capacities = [];
tbody.innerHTML = "";
updateKPIs();

// Ensure baseline hidden again
const box = byId("baselineBox");
if (!box.classList.contains("hide")) box.classList.add("hide");
});

byId("sampleBtn").addEventListener("click", () => {
byId("currencySelect").value = "EUR";
byId("viewerCount").value = 1200;
byId("builderCount").value = 25;
byId("proCost").value = 14;
byId("fabricRegion").value = "North Europe";

state.currencyCode = "EUR";
state.currencySymbol = currencyMap["EUR"];

state.capacities = [];
tbody.innerHTML = "";
addCapacityRow("F32", "2640");
addCapacityRow("F64", "5280");
updateKPIs();

const box = byId("baselineBox");
if (!box.classList.contains("hide")) box.classList.add("hide");
});

byId("printBtn").addEventListener("click", () => window.print());

// --- Init defaults ---
document.getElementById("currencySelect").value = state.currencyCode;
addCapacityRow("F32", "2640");
addCapacityRow("F64", "5280");
updateKPIs();


// Get today's date and format it as YYYY-MM-DD
const today = new Date();
// Example format: October 16, 2025
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('dateDiv').textContent = "Generated the: " + today.toLocaleDateString(undefined, options);
