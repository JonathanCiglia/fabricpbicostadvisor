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
    viewers: 300,
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
    return { total, detail: `${totalUsers} × PPU @ ${money(state.proCost)}` };
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
    const worst = candidates.length > 0 ? candidates.reduce((a, b) => (b.total > a.total ? b : a)) : undefined;
    byId("recommendationMain").textContent = best ? `${best.label} — ${money(best.total * 12)} / year` : 'Add capacities to see a recommendation';
  }

  function updateKPIs() {
    const ppuOnly = computePpuOnly();
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
  ["currencySelect","viewerCount","builderCount","proCost"]
    .forEach(id => byId(id).addEventListener("input", readInputs));

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

    // Clear existing capacities
    state.capacities = [];
    tbody.innerHTML = "";
    
    // Add sample capacities
    addCapacityRow("F32", "2640");
    addCapacityRow("F64", "5280");
    
    // Read form inputs to update state, then update KPIs
    readInputs();

    const box = byId("baselineBox");
    if (!box.classList.contains("hide")) box.classList.add("hide");
  });

  byId("printBtn").addEventListener("click", () => window.print());

  // --- Init defaults ---
  // Set form values to match initial state
  byId("currencySelect").value = state.currencyCode;
  byId("viewerCount").value = state.viewers;
  byId("builderCount").value = state.builders;
  byId("proCost").value = state.proCost;
  
  addCapacityRow("F32", "2640");
  addCapacityRow("F64", "5280");
  updateKPIs();


  // Get today's date and format it as YYYY-MM-DD
  const today = new Date();
  // Example format: October 16, 2025
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('dateDiv').textContent = "Generated the: " + today.toLocaleDateString(undefined, options);

  // === TAB FUNCTIONALITY ===
  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;
        
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
        
        // Generate license impact table when switching to licensing tab
        if (targetTab === 'licensing') {
          generateLicenseImpactTable();
        }
      });
    });
  }

  // === LICENSE IMPACT TABLE ===
  function generateLicenseImpactTable() {
     const tableContainer = document.getElementById('licenseImpactTable');
     const proCost = parseFloat(document.getElementById('licenseTableProCost').value) || 14;
     const ppuCost = parseFloat(document.getElementById('licenseTablePpuCost').value) || 24;
     const reservationDiscount = document.getElementById('reservationDiscount').checked;
     const hideProOnly = document.getElementById('hideProOnly').checked;
     const hidePpuOnly = document.getElementById('hidePpuOnly').checked;
     const symbol = '$'; // Fixed to USD

    // Updated Fabric SKU pricing based on official USD pricing
    const fabricSKUs = [
      { name: 'F8', monthlyCost: 1285, reservationCost: 764, viewerPolicy: 'Pro required', computeUnits: 8 },
      { name: 'F16', monthlyCost: 2570, reservationCost: 1528, viewerPolicy: 'Pro required', computeUnits: 16 },
      { name: 'F32', monthlyCost: 5139, reservationCost: 3056, viewerPolicy: 'Pro required', computeUnits: 32 },
      { name: 'F64', monthlyCost: 10278, reservationCost: 6112, viewerPolicy: 'Free viewers', computeUnits: 64 },
      { name: 'F128', monthlyCost: 20557, reservationCost: 12224, viewerPolicy: 'Free viewers', computeUnits: 128 },
      { name: 'F256', monthlyCost: 41114, reservationCost: 24448, viewerPolicy: 'Free viewers', computeUnits: 256 }
    ].map(sku => ({
      ...sku,
      // Use reservation cost if enabled, otherwise use pay-as-you-go cost
      monthlyCost: reservationDiscount ? sku.reservationCost : sku.monthlyCost,
      originalCost: sku.monthlyCost
    }));

    // Get custom scenario from sliders
    const viewersCount = parseInt(document.getElementById('viewersSlider').value);
    const buildersCount = parseInt(document.getElementById('buildersSlider').value);
    const scenario = { viewers: viewersCount, builders: buildersCount, name: 'Custom Scenario' };

    let html = '<div style="overflow-x: auto;">';
    
    // Single table for custom scenario
    const proOnlyTotal = (scenario.viewers + scenario.builders) * proCost;
    const ppuOnlyTotal = (scenario.viewers + scenario.builders) * ppuCost;
    
    html += `
      <h3>${scenario.viewers} viewers + ${scenario.builders} builders</h3>
      <table class="table" style="margin-bottom: 30px;">
        <thead>
          <tr>
            <th>Option</th>
            <th>Viewer Policy</th>
            <th class="right">Capacity Cost</th>
            <th class="right">Builder Licenses</th>
            <th class="right">Viewer Licenses</th>
            <th class="right">Total Monthly</th>
            ${!hideProOnly ? '<th class="right">vs Pro Only</th>' : ''}
            ${!hidePpuOnly ? '<th class="right">vs PPU Only</th>' : ''}
          </tr>
        </thead>
        <tbody>
    `;
    
    // Pro Only baseline row (conditional)
    if (!hideProOnly) {
      html += `
        <tr style="background: rgba(59, 130, 246, 0.1); border: 1px solid #3b82f6;">
          <td><strong>Pro Only</strong></td>
          <td>All users have Pro</td>
          <td class="right">—</td>
          <td class="right">${symbol}${Math.round(scenario.builders * proCost).toLocaleString()}</td>
          <td class="right">${symbol}${Math.round(scenario.viewers * proCost).toLocaleString()}</td>
          <td class="right"><strong>${symbol}${Math.round(proOnlyTotal).toLocaleString()}</strong></td>
          <td class="right">—</td>
          ${!hidePpuOnly ? `<td class="right">${symbol}${Math.round(Math.abs(proOnlyTotal - ppuOnlyTotal)).toLocaleString()} ${proOnlyTotal < ppuOnlyTotal ? '✅' : '❌'}</td>` : ''}
        </tr>
      `;
    }
    
    // PPU Only baseline row (conditional)
    if (!hidePpuOnly) {
      html += `
        <tr style="background: rgba(168, 85, 247, 0.1); border: 1px solid #a855f7;">
          <td><strong>PPU Only</strong></td>
          <td>All users need PPU</td>
          <td class="right">—</td>
          <td class="right">${symbol}${Math.round(scenario.builders * ppuCost).toLocaleString()}</td>
          <td class="right">${symbol}${Math.round(scenario.viewers * ppuCost).toLocaleString()}</td>
          <td class="right"><strong>${symbol}${Math.round(ppuOnlyTotal).toLocaleString()}</strong></td>
          ${!hideProOnly ? `<td class="right">${symbol}${Math.round(Math.abs(ppuOnlyTotal - proOnlyTotal)).toLocaleString()} ${ppuOnlyTotal < proOnlyTotal ? '✅' : '❌'}</td>` : ''}
          <td class="right">—</td>
        </tr>
      `;
    }
    
    fabricSKUs.forEach(sku => {
      const builderCost = scenario.builders * proCost;
      const viewerCost = sku.viewerPolicy === 'Free viewers' ? 0 : scenario.viewers * proCost;
      const totalCost = sku.monthlyCost + builderCost + viewerCost;
      const vsProSavings = proOnlyTotal - totalCost;
      const vsPpuSavings = ppuOnlyTotal - totalCost;
      const vsProPercent = Math.round((vsProSavings / proOnlyTotal) * 100);
      const vsPpuPercent = Math.round((vsPpuSavings / ppuOnlyTotal) * 100);
      
      const isF64 = sku.name === 'F64';
      const showComparison = scenario.viewers > 0 || scenario.builders > 0;
      
      html += `
        <tr${isF64 ? ' style="background-color: rgba(34, 197, 94, 0.1);"' : ''}>
          <td>Fabric ${sku.name}</td>
          <td>${sku.viewerPolicy}</td>
          <td class="right">${symbol}${Math.round(sku.monthlyCost).toLocaleString()}${reservationDiscount ? ' <span style="color: #22c55e; font-size: 10px;">(~41% off)</span>' : ''}</td>
          <td class="right">${symbol}${Math.round(builderCost).toLocaleString()}</td>
          <td class="right">${symbol}${Math.round(viewerCost).toLocaleString()}</td>
          <td class="right"><strong>${symbol}${Math.round(totalCost).toLocaleString()}</strong></td>
          ${!hideProOnly ? `<td class="right">${showComparison ? (vsProSavings > 0 ? '-' : '+') + symbol + Math.round(Math.abs(vsProSavings)).toLocaleString() + ' ' + (vsProSavings > 0 ? '✅' : '') + ' (' + vsProPercent + '%)' : '—'}</td>` : ''}
          ${!hidePpuOnly ? `<td class="right">${showComparison ? (vsPpuSavings > 0 ? '-' : '+') + symbol + Math.round(Math.abs(vsPpuSavings)).toLocaleString() + ' ' + (vsPpuSavings > 0 ? '✅' : '') + ' (' + vsPpuPercent + '%)' : '—'}</td>` : ''}
        </tr>
      `;
    });
    
    html += '</tbody></table></div>';
    tableContainer.innerHTML = html;
  }

  // === TOOLTIP FUNCTIONS ===
  function showProTooltip() {
    document.getElementById('proTooltip').style.display = 'block';
  }
  
  function hideProTooltip() {
    document.getElementById('proTooltip').style.display = 'none';
  }

  function showPpuTooltip() {
    document.getElementById('ppuTooltip').style.display = 'block';
  }
  
  function hidePpuTooltip() {
    document.getElementById('ppuTooltip').style.display = 'none';
  }

  // Initialize tabs
  initTabs();
  
  // Add event listeners for license table inputs
  document.getElementById('licenseTableProCost').addEventListener('input', generateLicenseImpactTable);
  document.getElementById('licenseTablePpuCost').addEventListener('input', generateLicenseImpactTable);
  document.getElementById('reservationDiscount').addEventListener('change', generateLicenseImpactTable);
  document.getElementById('hideProOnly').addEventListener('change', generateLicenseImpactTable);
  document.getElementById('hidePpuOnly').addEventListener('change', generateLicenseImpactTable);
  
  // Add slider event listeners
  const viewersSlider = document.getElementById('viewersSlider');
  const buildersSlider = document.getElementById('buildersSlider');
  const viewersCount = document.getElementById('viewersCount');
  const buildersCount = document.getElementById('buildersCount');
  
  // Function to snap viewers to correct increment (25 by 25 until 200, then 50 by 50)
  function snapViewersValue(value) {
    const numValue = parseInt(value);
    if (numValue <= 200) {
      // Snap to nearest 25
      return Math.round(numValue / 25) * 25;
    } else {
      // Snap to nearest 50
      return Math.round(numValue / 50) * 50;
    }
  }
  
  viewersSlider.addEventListener('input', function() {
    const snappedValue = snapViewersValue(this.value);
    this.value = snappedValue;
    viewersCount.textContent = snappedValue;
    generateLicenseImpactTable();
  });
  
  buildersSlider.addEventListener('input', function() {
    buildersCount.textContent = this.value;
    generateLicenseImpactTable();
  });
