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


  // --- Pricing Data (Embedded) ---
  const fabricPricingData = {
    "metadata": {
      "source": "Azure Retail Prices API + Microsoft Fabric Pricing Page",
      "source_url": "https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/",
      "currency": "USD",
      "captured_date": "2026-07-21"
    },
    "regions": [
      {"arm_region_name": "austriaeast", "location_display": "AT East", "payg_per_cu_hour_usd": 0.234, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 341.64}, {"sku": "F4", "payg_monthly_usd": 683.28}, {"sku": "F8", "payg_monthly_usd": 1366.56}, {"sku": "F16", "payg_monthly_usd": 2733.12}, {"sku": "F32", "payg_monthly_usd": 5466.24}, {"sku": "F64", "payg_monthly_usd": 10932.48}, {"sku": "F128", "payg_monthly_usd": 21864.96}, {"sku": "F256", "payg_monthly_usd": 43729.92}, {"sku": "F512", "payg_monthly_usd": 87459.84}, {"sku": "F1024", "payg_monthly_usd": 174919.68}, {"sku": "F2048", "payg_monthly_usd": 349839.36}]},
      {"arm_region_name": "belgiumcentral", "location_display": "BE Central", "payg_per_cu_hour_usd": 0.234, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 341.64}, {"sku": "F4", "payg_monthly_usd": 683.28}, {"sku": "F8", "payg_monthly_usd": 1366.56}, {"sku": "F16", "payg_monthly_usd": 2733.12}, {"sku": "F32", "payg_monthly_usd": 5466.24}, {"sku": "F64", "payg_monthly_usd": 10932.48}, {"sku": "F128", "payg_monthly_usd": 21864.96}, {"sku": "F256", "payg_monthly_usd": 43729.92}, {"sku": "F512", "payg_monthly_usd": 87459.84}, {"sku": "F1024", "payg_monthly_usd": 174919.68}, {"sku": "F2048", "payg_monthly_usd": 349839.36}]},
      {"arm_region_name": "brazilsouth", "location_display": "BR South", "payg_per_cu_hour_usd": 0.28, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 408.8}, {"sku": "F4", "payg_monthly_usd": 817.6}, {"sku": "F8", "payg_monthly_usd": 1635.2}, {"sku": "F16", "payg_monthly_usd": 3270.4}, {"sku": "F32", "payg_monthly_usd": 6540.8}, {"sku": "F64", "payg_monthly_usd": 13081.6}, {"sku": "F128", "payg_monthly_usd": 26163.2}, {"sku": "F256", "payg_monthly_usd": 52326.4}, {"sku": "F512", "payg_monthly_usd": 104652.8}, {"sku": "F1024", "payg_monthly_usd": 209305.6}, {"sku": "F2048", "payg_monthly_usd": 418611.2}]},
      {"arm_region_name": "canadacentral", "location_display": "CA Central", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "canadaeast", "location_display": "CA East", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "centralindia", "location_display": "IN Central", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "centralus", "location_display": "US Central", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "chilecentral", "location_display": "CL Central", "payg_per_cu_hour_usd": 0.25, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 365.0}, {"sku": "F4", "payg_monthly_usd": 730.0}, {"sku": "F8", "payg_monthly_usd": 1460.0}, {"sku": "F16", "payg_monthly_usd": 2920.0}, {"sku": "F32", "payg_monthly_usd": 5840.0}, {"sku": "F64", "payg_monthly_usd": 11680.0}, {"sku": "F128", "payg_monthly_usd": 23360.0}, {"sku": "F256", "payg_monthly_usd": 46720.0}, {"sku": "F512", "payg_monthly_usd": 93440.0}, {"sku": "F1024", "payg_monthly_usd": 186880.0}, {"sku": "F2048", "payg_monthly_usd": 373760.0}]},
      {"arm_region_name": "denmarkeast", "location_display": "DK East", "payg_per_cu_hour_usd": 0.234, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 341.64}, {"sku": "F4", "payg_monthly_usd": 683.28}, {"sku": "F8", "payg_monthly_usd": 1366.56}, {"sku": "F16", "payg_monthly_usd": 2733.12}, {"sku": "F32", "payg_monthly_usd": 5466.24}, {"sku": "F64", "payg_monthly_usd": 10932.48}, {"sku": "F128", "payg_monthly_usd": 21864.96}, {"sku": "F256", "payg_monthly_usd": 43729.92}, {"sku": "F512", "payg_monthly_usd": 87459.84}, {"sku": "F1024", "payg_monthly_usd": 174919.68}, {"sku": "F2048", "payg_monthly_usd": 349839.36}]},
      {"arm_region_name": "eastus", "location_display": "US East", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "eastus2", "location_display": "US East 2", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "francecentral", "location_display": "FR Central", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "francesouth", "location_display": "FR South", "payg_per_cu_hour_usd": 0.26, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 379.6}, {"sku": "F4", "payg_monthly_usd": 759.2}, {"sku": "F8", "payg_monthly_usd": 1518.4}, {"sku": "F16", "payg_monthly_usd": 3036.8}, {"sku": "F32", "payg_monthly_usd": 6073.6}, {"sku": "F64", "payg_monthly_usd": 12147.2}, {"sku": "F128", "payg_monthly_usd": 24294.4}, {"sku": "F256", "payg_monthly_usd": 48588.8}, {"sku": "F512", "payg_monthly_usd": 97177.6}, {"sku": "F1024", "payg_monthly_usd": 194355.2}, {"sku": "F2048", "payg_monthly_usd": 388710.4}]},
      {"arm_region_name": "germanynorth", "location_display": "DE North", "payg_per_cu_hour_usd": 0.28, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 408.8}, {"sku": "F4", "payg_monthly_usd": 817.6}, {"sku": "F8", "payg_monthly_usd": 1635.2}, {"sku": "F16", "payg_monthly_usd": 3270.4}, {"sku": "F32", "payg_monthly_usd": 6540.8}, {"sku": "F64", "payg_monthly_usd": 13081.6}, {"sku": "F128", "payg_monthly_usd": 26163.2}, {"sku": "F256", "payg_monthly_usd": 52326.4}, {"sku": "F512", "payg_monthly_usd": 104652.8}, {"sku": "F1024", "payg_monthly_usd": 209305.6}, {"sku": "F2048", "payg_monthly_usd": 418611.2}]},
      {"arm_region_name": "germanywestcentral", "location_display": "DE West Central", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "israelcentral", "location_display": "IL Central", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "israelnorthwest", "location_display": "IL Northwest", "payg_per_cu_hour_usd": 0.2574, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 375.804}, {"sku": "F4", "payg_monthly_usd": 751.608}, {"sku": "F8", "payg_monthly_usd": 1503.216}, {"sku": "F16", "payg_monthly_usd": 3006.432}, {"sku": "F32", "payg_monthly_usd": 6012.864}, {"sku": "F64", "payg_monthly_usd": 12025.728}, {"sku": "F128", "payg_monthly_usd": 24051.456}, {"sku": "F256", "payg_monthly_usd": 48102.912}, {"sku": "F512", "payg_monthly_usd": 96205.824}, {"sku": "F1024", "payg_monthly_usd": 192411.648}, {"sku": "F2048", "payg_monthly_usd": 384823.296}]},
      {"arm_region_name": "italynorth", "location_display": "IT North", "payg_per_cu_hour_usd": 0.21, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 306.6}, {"sku": "F4", "payg_monthly_usd": 613.2}, {"sku": "F8", "payg_monthly_usd": 1226.4}, {"sku": "F16", "payg_monthly_usd": 2452.8}, {"sku": "F32", "payg_monthly_usd": 4905.6}, {"sku": "F64", "payg_monthly_usd": 9811.2}, {"sku": "F128", "payg_monthly_usd": 19622.4}, {"sku": "F256", "payg_monthly_usd": 39244.8}, {"sku": "F512", "payg_monthly_usd": 78489.6}, {"sku": "F1024", "payg_monthly_usd": 156979.2}, {"sku": "F2048", "payg_monthly_usd": 313958.4}]},
      {"arm_region_name": "mexicocentral", "location_display": "MX Central", "payg_per_cu_hour_usd": 0.19, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 277.4}, {"sku": "F4", "payg_monthly_usd": 554.8}, {"sku": "F8", "payg_monthly_usd": 1109.6}, {"sku": "F16", "payg_monthly_usd": 2219.2}, {"sku": "F32", "payg_monthly_usd": 4438.4}, {"sku": "F64", "payg_monthly_usd": 8876.8}, {"sku": "F128", "payg_monthly_usd": 17753.6}, {"sku": "F256", "payg_monthly_usd": 35507.2}, {"sku": "F512", "payg_monthly_usd": 71014.4}, {"sku": "F1024", "payg_monthly_usd": 142028.8}, {"sku": "F2048", "payg_monthly_usd": 284057.6}]},
      {"arm_region_name": "newzealandnorth", "location_display": "NZ North", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "northcentralus", "location_display": "US North Central", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "northeurope", "location_display": "EU North", "payg_per_cu_hour_usd": 0.19, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 277.4}, {"sku": "F4", "payg_monthly_usd": 554.8}, {"sku": "F8", "payg_monthly_usd": 1109.6}, {"sku": "F16", "payg_monthly_usd": 2219.2}, {"sku": "F32", "payg_monthly_usd": 4438.4}, {"sku": "F64", "payg_monthly_usd": 8876.8}, {"sku": "F128", "payg_monthly_usd": 17753.6}, {"sku": "F256", "payg_monthly_usd": 35507.2}, {"sku": "F512", "payg_monthly_usd": 71014.4}, {"sku": "F1024", "payg_monthly_usd": 142028.8}, {"sku": "F2048", "payg_monthly_usd": 284057.6}]},
      {"arm_region_name": "norwayeast", "location_display": "NO East", "payg_per_cu_hour_usd": 0.24, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 350.4}, {"sku": "F4", "payg_monthly_usd": 700.8}, {"sku": "F8", "payg_monthly_usd": 1401.6}, {"sku": "F16", "payg_monthly_usd": 2803.2}, {"sku": "F32", "payg_monthly_usd": 5606.4}, {"sku": "F64", "payg_monthly_usd": 11212.8}, {"sku": "F128", "payg_monthly_usd": 22425.6}, {"sku": "F256", "payg_monthly_usd": 44851.2}, {"sku": "F512", "payg_monthly_usd": 89702.4}, {"sku": "F1024", "payg_monthly_usd": 179404.8}, {"sku": "F2048", "payg_monthly_usd": 358809.6}]},
      {"arm_region_name": "norwaywest", "location_display": "NO West", "payg_per_cu_hour_usd": 0.31, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 452.6}, {"sku": "F4", "payg_monthly_usd": 905.2}, {"sku": "F8", "payg_monthly_usd": 1810.4}, {"sku": "F16", "payg_monthly_usd": 3620.8}, {"sku": "F32", "payg_monthly_usd": 7241.6}, {"sku": "F64", "payg_monthly_usd": 14483.2}, {"sku": "F128", "payg_monthly_usd": 28966.4}, {"sku": "F256", "payg_monthly_usd": 57932.8}, {"sku": "F512", "payg_monthly_usd": 115865.6}, {"sku": "F1024", "payg_monthly_usd": 231731.2}, {"sku": "F2048", "payg_monthly_usd": 463462.4}]},
      {"arm_region_name": "polandcentral", "location_display": "PL Central", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "qatarcentral", "location_display": "QA Central", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "southafricanorth", "location_display": "ZA North", "payg_per_cu_hour_usd": 0.24, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 350.4}, {"sku": "F4", "payg_monthly_usd": 700.8}, {"sku": "F8", "payg_monthly_usd": 1401.6}, {"sku": "F16", "payg_monthly_usd": 2803.2}, {"sku": "F32", "payg_monthly_usd": 5606.4}, {"sku": "F64", "payg_monthly_usd": 11212.8}, {"sku": "F128", "payg_monthly_usd": 22425.6}, {"sku": "F256", "payg_monthly_usd": 44851.2}, {"sku": "F512", "payg_monthly_usd": 89702.4}, {"sku": "F1024", "payg_monthly_usd": 179404.8}, {"sku": "F2048", "payg_monthly_usd": 358809.6}]},
      {"arm_region_name": "southafricawest", "location_display": "ZA West", "payg_per_cu_hour_usd": 0.31, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 452.6}, {"sku": "F4", "payg_monthly_usd": 905.2}, {"sku": "F8", "payg_monthly_usd": 1810.4}, {"sku": "F16", "payg_monthly_usd": 3620.8}, {"sku": "F32", "payg_monthly_usd": 7241.6}, {"sku": "F64", "payg_monthly_usd": 14483.2}, {"sku": "F128", "payg_monthly_usd": 28966.4}, {"sku": "F256", "payg_monthly_usd": 57932.8}, {"sku": "F512", "payg_monthly_usd": 115865.6}, {"sku": "F1024", "payg_monthly_usd": 231731.2}, {"sku": "F2048", "payg_monthly_usd": 463462.4}]},
      {"arm_region_name": "southcentralus", "location_display": "US South Central", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "southindia", "location_display": "IN South", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "spaincentral", "location_display": "ES Central", "payg_per_cu_hour_usd": 0.19, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 277.4}, {"sku": "F4", "payg_monthly_usd": 554.8}, {"sku": "F8", "payg_monthly_usd": 1109.6}, {"sku": "F16", "payg_monthly_usd": 2219.2}, {"sku": "F32", "payg_monthly_usd": 4438.4}, {"sku": "F64", "payg_monthly_usd": 8876.8}, {"sku": "F128", "payg_monthly_usd": 17753.6}, {"sku": "F256", "payg_monthly_usd": 35507.2}, {"sku": "F512", "payg_monthly_usd": 71014.4}, {"sku": "F1024", "payg_monthly_usd": 142028.8}, {"sku": "F2048", "payg_monthly_usd": 284057.6}]},
      {"arm_region_name": "swedencentral", "location_display": "SE Central", "payg_per_cu_hour_usd": 0.19, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 277.4}, {"sku": "F4", "payg_monthly_usd": 554.8}, {"sku": "F8", "payg_monthly_usd": 1109.6}, {"sku": "F16", "payg_monthly_usd": 2219.2}, {"sku": "F32", "payg_monthly_usd": 4438.4}, {"sku": "F64", "payg_monthly_usd": 8876.8}, {"sku": "F128", "payg_monthly_usd": 17753.6}, {"sku": "F256", "payg_monthly_usd": 35507.2}, {"sku": "F512", "payg_monthly_usd": 71014.4}, {"sku": "F1024", "payg_monthly_usd": 142028.8}, {"sku": "F2048", "payg_monthly_usd": 284057.6}]},
      {"arm_region_name": "switzerlandnorth", "location_display": "CH North", "payg_per_cu_hour_usd": 0.23, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 335.8}, {"sku": "F4", "payg_monthly_usd": 671.6}, {"sku": "F8", "payg_monthly_usd": 1343.2}, {"sku": "F16", "payg_monthly_usd": 2686.4}, {"sku": "F32", "payg_monthly_usd": 5372.8}, {"sku": "F64", "payg_monthly_usd": 10745.6}, {"sku": "F128", "payg_monthly_usd": 21491.2}, {"sku": "F256", "payg_monthly_usd": 42982.4}, {"sku": "F512", "payg_monthly_usd": 85964.8}, {"sku": "F1024", "payg_monthly_usd": 171929.6}, {"sku": "F2048", "payg_monthly_usd": 343859.2}]},
      {"arm_region_name": "switzerlandwest", "location_display": "CH West", "payg_per_cu_hour_usd": 0.29, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 423.4}, {"sku": "F4", "payg_monthly_usd": 846.8}, {"sku": "F8", "payg_monthly_usd": 1693.6}, {"sku": "F16", "payg_monthly_usd": 3387.2}, {"sku": "F32", "payg_monthly_usd": 6774.4}, {"sku": "F64", "payg_monthly_usd": 13548.8}, {"sku": "F128", "payg_monthly_usd": 27097.6}, {"sku": "F256", "payg_monthly_usd": 54195.2}, {"sku": "F512", "payg_monthly_usd": 108390.4}, {"sku": "F1024", "payg_monthly_usd": 216780.8}, {"sku": "F2048", "payg_monthly_usd": 433561.6}]},
      {"arm_region_name": "uaecentral", "location_display": "AE Central", "payg_per_cu_hour_usd": 0.28, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 408.8}, {"sku": "F4", "payg_monthly_usd": 817.6}, {"sku": "F8", "payg_monthly_usd": 1635.2}, {"sku": "F16", "payg_monthly_usd": 3270.4}, {"sku": "F32", "payg_monthly_usd": 6540.8}, {"sku": "F64", "payg_monthly_usd": 13081.6}, {"sku": "F128", "payg_monthly_usd": 26163.2}, {"sku": "F256", "payg_monthly_usd": 52326.4}, {"sku": "F512", "payg_monthly_usd": 104652.8}, {"sku": "F1024", "payg_monthly_usd": 209305.6}, {"sku": "F2048", "payg_monthly_usd": 418611.2}]},
      {"arm_region_name": "uaenorth", "location_display": "AE North", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "uksouth", "location_display": "UK South", "payg_per_cu_hour_usd": 0.21, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 306.6}, {"sku": "F4", "payg_monthly_usd": 613.2}, {"sku": "F8", "payg_monthly_usd": 1226.4}, {"sku": "F16", "payg_monthly_usd": 2452.8}, {"sku": "F32", "payg_monthly_usd": 4905.6}, {"sku": "F64", "payg_monthly_usd": 9811.2}, {"sku": "F128", "payg_monthly_usd": 19622.4}, {"sku": "F256", "payg_monthly_usd": 39244.8}, {"sku": "F512", "payg_monthly_usd": 78489.6}, {"sku": "F1024", "payg_monthly_usd": 156979.2}, {"sku": "F2048", "payg_monthly_usd": 313958.4}]},
      {"arm_region_name": "ukwest", "location_display": "UK West", "payg_per_cu_hour_usd": 0.21, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 306.6}, {"sku": "F4", "payg_monthly_usd": 613.2}, {"sku": "F8", "payg_monthly_usd": 1226.4}, {"sku": "F16", "payg_monthly_usd": 2452.8}, {"sku": "F32", "payg_monthly_usd": 4905.6}, {"sku": "F64", "payg_monthly_usd": 9811.2}, {"sku": "F128", "payg_monthly_usd": 19622.4}, {"sku": "F256", "payg_monthly_usd": 39244.8}, {"sku": "F512", "payg_monthly_usd": 78489.6}, {"sku": "F1024", "payg_monthly_usd": 156979.2}, {"sku": "F2048", "payg_monthly_usd": 313958.4}]},
      {"arm_region_name": "westcentralus", "location_display": "US West Central", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "westeurope", "location_display": "EU West", "payg_per_cu_hour_usd": 0.22, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 321.2}, {"sku": "F4", "payg_monthly_usd": 642.4}, {"sku": "F8", "payg_monthly_usd": 1284.8}, {"sku": "F16", "payg_monthly_usd": 2569.6}, {"sku": "F32", "payg_monthly_usd": 5139.2}, {"sku": "F64", "payg_monthly_usd": 10278.4}, {"sku": "F128", "payg_monthly_usd": 20556.8}, {"sku": "F256", "payg_monthly_usd": 41113.6}, {"sku": "F512", "payg_monthly_usd": 82227.2}, {"sku": "F1024", "payg_monthly_usd": 164454.4}, {"sku": "F2048", "payg_monthly_usd": 328908.8}]},
      {"arm_region_name": "westindia", "location_display": "IN West", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "westus", "location_display": "US West", "payg_per_cu_hour_usd": 0.2, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 292.0}, {"sku": "F4", "payg_monthly_usd": 584.0}, {"sku": "F8", "payg_monthly_usd": 1168.0}, {"sku": "F16", "payg_monthly_usd": 2336.0}, {"sku": "F32", "payg_monthly_usd": 4672.0}, {"sku": "F64", "payg_monthly_usd": 9344.0}, {"sku": "F128", "payg_monthly_usd": 18688.0}, {"sku": "F256", "payg_monthly_usd": 37376.0}, {"sku": "F512", "payg_monthly_usd": 74752.0}, {"sku": "F1024", "payg_monthly_usd": 149504.0}, {"sku": "F2048", "payg_monthly_usd": 299008.0}]},
      {"arm_region_name": "westus2", "location_display": "US West 2", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]},
      {"arm_region_name": "westus3", "location_display": "US West 3", "payg_per_cu_hour_usd": 0.18, "capacity_skus": [{"sku": "F2", "payg_monthly_usd": 262.8}, {"sku": "F4", "payg_monthly_usd": 525.6}, {"sku": "F8", "payg_monthly_usd": 1051.2}, {"sku": "F16", "payg_monthly_usd": 2102.4}, {"sku": "F32", "payg_monthly_usd": 4204.8}, {"sku": "F64", "payg_monthly_usd": 8409.6}, {"sku": "F128", "payg_monthly_usd": 16819.2}, {"sku": "F256", "payg_monthly_usd": 33638.4}, {"sku": "F512", "payg_monthly_usd": 67276.8}, {"sku": "F1024", "payg_monthly_usd": 134553.6}, {"sku": "F2048", "payg_monthly_usd": 269107.2}]}
    ]
  };

  function getPricingForCapacityAndRegion(skuName, armRegionName) {
    if (!fabricPricingData || !fabricPricingData.regions) return null;
    
    const regionData = fabricPricingData.regions.find(r => r.arm_region_name === armRegionName);
    if (!regionData) return null;

    // Extract SKU number from name (F2 → 2, F4 → 4, F8 → 8, F2048 → 2048, etc.)
    const skuMatch = skuName.match(/^F(\d+)$/);
    if (!skuMatch) return null;
    const skuNumber = parseInt(skuMatch[1], 10);

    // Get F2 base prices for this region
    const f2Data = regionData.capacity_skus?.find(s => s.sku === 'F2');
    if (!f2Data) return null;
    const f2PaygPrice = f2Data.payg_monthly_usd;
    
    // Get ACTUAL F2 reservation price from the pricing mapping (from Azure Pricing Page)
    let f2ReservationPrice = f2ReservationPricesByRegion[armRegionName];
    
    // If region not in mapping or N/A, calculate from PAYG as fallback
    if (f2ReservationPrice === null || f2ReservationPrice === undefined) {
      const RESERVATION_1YR_MULTIPLIER = 0.5949;
      f2ReservationPrice = f2PaygPrice * RESERVATION_1YR_MULTIPLIER;
    }

    // Calculate prices by scaling from F2 base
    // F4 = F2×2, F8 = F2×4, F16 = F2×8, etc.
    const scalingFactor = skuNumber / 2;
    const paygPrice = f2PaygPrice * scalingFactor;
    const reservationPrice = f2ReservationPrice * scalingFactor;

    return {
      skuName: skuName,
      region: regionData.location_display,
      payg_monthly_usd: paygPrice,
      reservation_1yr_monthly_usd: reservationPrice,
      reservation_3yr_monthly_usd: null
    };
  }

  // --- F2 Reservation Prices by Region (from Azure Pricing Page) ---
  // Captured from: https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/
  const f2ReservationPricesByRegion = {
    "centralus": 156.334,
    "eastus": 156.334,
    "eastus2": 156.334,
    "northcentralus": 156.334,
    "southcentralus": 156.334,
    "westcentralus": 173.667,
    "westus": 173.667,
    "westus2": 156.334,
    "westus3": 156.334,
    "uksouth": 182.334,
    "ukwest": 182.334,
    "uaecentral": null, // N/A
    "uaenorth": 191,
    "switzerlandnorth": 199.667,
    "switzerlandwest": 251.667,
    "swedencentral": 165,
    "spaincentral": 165,
    "qatarcentral": 223.667,
    "polandcentral": 191,
    "norwayeast": 208.334,
    "norwaywest": null, // N/A
    "newzealandnorth": 191,
    "mexicocentral": 165,
    "malaysiawest": 165,
    "koreacentral": 182.334,
    "koreasouth": null, // N/A
    "japaneast": 182.334,
    "japanwest": 182.334,
    "italynorth": 182.334,
    "israelcentral": 173.667,
    "indonesiacentral": 165,
    "centralindia": 173.667,
    "southindia": 191,
    "westindia": null, // N/A
    "germanynorth": null, // N/A
    "germanywestcentral": 191,
    "francecentral": 173.667,
    "francesouth": null, // N/A
    "northeurope": 165,
    "westeurope": 191,
    "denmarkeast": 203.334,
    "chilecentral": 217.167,
    "canadacentral": 173.667,
    "canadaeast": 173.667,
    "brazilsouth": 243,
    "belgiumcentral": 203.334,
    "austriaeast": 203.334,
    "australiaeast": 182.334,
    "australiasoutheast": 182.334,
    "eastasia": 156.334,
    "southeastasia": 191,
    "southafricanorth": 208.334,
    "southafricawest": null, // N/A
  };

  // --- State ---
  const state = {
    currencyCode: "USD",
    currencySymbol: "$",
    viewers: 300,
    builders: 30,
    proCost: 14,
    capacities: [], // { id, name, region, monthlyCost }
    maxInstances: 4
  };

  // Currency map (common Azure pricing currencies)
  const currencyMap = {
    "EUR": "€","USD": "$","GBP": "£","AUD": "A$","CAD": "C$","CHF": "CHF",
    "DKK": "kr","SEK": "kr","NOK": "kr","JPY": "¥","INR": "₹","SGD": "S$",
    "NZD": "NZ$","BRL": "R$","MXN": "MX$","ZAR": "R","AED": "د.إ","SAR": "﷼",
    "TRY": "₺","PLN": "zł","CZK": "Kč","HUF": "Ft","ILS": "₪"
  };

  const regionMeta = {
    "austriaeast":        { display: "Austria East",          continent: "Europe" },
    "belgiumcentral":     { display: "Belgium Central",       continent: "Europe" },
    "brazilsouth":        { display: "Brazil South",          continent: "South America" },
    "canadacentral":      { display: "Canada Central",        continent: "North America" },
    "canadaeast":         { display: "Canada East",           continent: "North America" },
    "centralindia":       { display: "India Central",         continent: "Asia Pacific" },
    "centralus":          { display: "Central US",            continent: "North America" },
    "chilecentral":       { display: "Chile Central",         continent: "South America" },
    "denmarkeast":        { display: "Denmark East",          continent: "Europe" },
    "eastus":             { display: "East US",               continent: "North America" },
    "eastus2":            { display: "East US 2",             continent: "North America" },
    "francecentral":      { display: "France Central",        continent: "Europe" },
    "francesouth":        { display: "France South",          continent: "Europe" },
    "germanynorth":       { display: "Germany North",         continent: "Europe" },
    "germanywestcentral": { display: "Germany West Central",  continent: "Europe" },
    "israelcentral":      { display: "Israel Central",        continent: "Middle East" },
    "israelnorthwest":    { display: "Israel Northwest",      continent: "Middle East" },
    "italynorth":         { display: "Italy North",           continent: "Europe" },
    "mexicocentral":      { display: "Mexico Central",        continent: "North America" },
    "newzealandnorth":    { display: "New Zealand North",     continent: "Asia Pacific" },
    "northcentralus":     { display: "North Central US",      continent: "North America" },
    "northeurope":        { display: "North Europe",          continent: "Europe" },
    "norwayeast":         { display: "Norway East",           continent: "Europe" },
    "norwaywest":         { display: "Norway West",           continent: "Europe" },
    "polandcentral":      { display: "Poland Central",        continent: "Europe" },
    "qatarcentral":       { display: "Qatar Central",         continent: "Middle East" },
    "southafricanorth":   { display: "South Africa North",    continent: "Africa" },
    "southafricawest":    { display: "South Africa West",     continent: "Africa" },
    "southcentralus":     { display: "South Central US",      continent: "North America" },
    "southindia":         { display: "South India",           continent: "Asia Pacific" },
    "spaincentral":       { display: "Spain Central",         continent: "Europe" },
    "swedencentral":      { display: "Sweden Central",        continent: "Europe" },
    "switzerlandnorth":   { display: "Switzerland North",     continent: "Europe" },
    "switzerlandwest":    { display: "Switzerland West",      continent: "Europe" },
    "uaecentral":         { display: "UAE Central",           continent: "Middle East" },
    "uaenorth":           { display: "UAE North",             continent: "Middle East" },
    "uksouth":            { display: "UK South",              continent: "Europe" },
    "ukwest":             { display: "UK West",               continent: "Europe" },
    "westcentralus":      { display: "West Central US",       continent: "North America" },
    "westeurope":         { display: "West Europe",           continent: "Europe" },
    "westindia":          { display: "West India",            continent: "Asia Pacific" },
    "westus":             { display: "West US",               continent: "North America" },
    "westus2":            { display: "West US 2",             continent: "North America" },
    "westus3":            { display: "West US 3",             continent: "North America" },
  };

  function getRegionDisplay(armName) {
    return (regionMeta[armName] && regionMeta[armName].display) || armName;
  }

  function buildGroupedRegionOptions(selectedArm) {
    const continentOrder = ["Africa", "Asia Pacific", "Europe", "Middle East", "North America", "South America"];
    const groups = {};
    continentOrder.forEach(c => { groups[c] = []; });
    fabricPricingData.regions.forEach(r => {
      const meta = regionMeta[r.arm_region_name];
      if (!meta) return;
      groups[meta.continent].push({ arm: r.arm_region_name, display: meta.display });
    });
    Object.values(groups).forEach(arr => arr.sort((a, b) => a.display.localeCompare(b.display)));
    let html = '<option value="">— Select region —</option>';
    continentOrder.forEach(continent => {
      if (groups[continent].length === 0) return;
      html += `<optgroup label="${continent}">`;
      groups[continent].forEach(r => {
        html += `<option value="${r.arm}"${r.arm === selectedArm ? ' selected' : ''}>${r.display}</option>`;
      });
      html += '</optgroup>';
    });
    return html;
  }

  function getAvailableRegions() {
    if (!fabricPricingData || !fabricPricingData.regions) return [];
    return fabricPricingData.regions.map(r => ({
      arm_region_name: r.arm_region_name,
      location_display: getRegionDisplay(r.arm_region_name)
    })).sort((a, b) => a.location_display.localeCompare(b.location_display));
  }

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
      .filter(c => Boolean(c.region))
      .map(c => {
        const vUnit = viewerUnitCost(c.name);
        // Use reservation price if enabled, otherwise PAYG price
        let cap = c.monthlyCost || 0;
        const buildersCost = state.builders * state.proCost;
        const viewersCost = state.viewers * vUnit;
        const total = cap + buildersCost + viewersCost;
        return {
          id: c.id,
          name: c.name || "(unnamed)",
          region: c.region || "",
          monthlyCost: cap,
          originalMonthlyCost: c.monthlyCost || 0,
          hasReservation: c.hasReservation,
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
        label: c.region ? `${c.name} — ${c.region}` : c.name,
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
    const candidates = [...caps.map(x => ({
      label: x.region ? `${x.name} — ${x.region}` : `${x.name}`,
      total: x.total
    }))];
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
    // Currency locked to USD
    state.currencyCode = "USD";
    state.currencySymbol = "$";
    state.viewers = Number(byId("viewerCount").value) || 0;
    state.builders = Number(byId("builderCount").value) || 0;
    state.proCost = Number(byId("proCost").value) || 0;
    updateKPIs();
  }
  ["viewerCount","builderCount","proCost"]
    .forEach(id => byId(id).addEventListener("input", readInputs));

  const tbody = byId("capacityTbody");
  let capIdCounter = 1;

  function updateAddButtonState() {
    const addBtn = byId("addCapacityBtn");
    addBtn.disabled = state.capacities.length >= state.maxInstances;
  }

  function addCapacityRow(name = "", monthlyCost = "", region = "") {
    if (state.capacities.length >= state.maxInstances) {
      updateAddButtonState();
      updateKPIs();
      return;
    }

    const fabricSKUs = [
      "F2", "F4", "F8", "F16", "F32", "F64", "F128", "F256", "F512", "F1024", "F2048"
    ];
    const selectedSKU = fabricSKUs.includes(name) ? name : fabricSKUs[0];
    const skuOptions = fabricSKUs.map(
      sku => `<option value="${sku}"${sku === selectedSKU ? " selected" : ""}>${sku}</option>`
    ).join("");

    const initialRegion = (typeof region === "string" ? region : "").trim();

    const id = capIdCounter++;
    const row = document.createElement("tr");
    row.dataset.id = id;

    // Calculate initial cost and reservation price
    let initialCost = monthlyCost;
    let reservationPrice = 0;
    if (!initialCost && initialRegion && selectedSKU && fabricPricingData) {
      const pricing = getPricingForCapacityAndRegion(selectedSKU, initialRegion);
      if (pricing) {
        initialCost = pricing.payg_monthly_usd;
        reservationPrice = pricing.reservation_1yr_monthly_usd;
      }
    }

    state.capacities.push({ 
      id, 
      name: selectedSKU, 
      region: initialRegion, 
      monthlyCost: Number(initialCost) || 0,
      paygMonthly: Number(initialCost) || 0,
      reservationMonthly: reservationPrice || 0,
      hasReservation: false
    });

    row.innerHTML = `
      <td>
        <select>${skuOptions}</select>
      </td>
      <td>
        <select data-role="region">${buildGroupedRegionOptions(initialRegion)}</select>
      </td>
      <td><input type="text" readonly tabindex="-1" value="${Math.round(Number(initialCost) || 0).toLocaleString()}" data-role="cost" style="text-align:right; background: #0d1727; color: #94a3b8; cursor: default; border-color: #1f2937; pointer-events: none;" /></td>
      <td style="text-align:center;"><input type="checkbox" data-role="reservation" style="width: 18px; height: 18px; cursor: pointer; accent-color: #10b981;" /></td>
      <td class="right"><button class="del" style="padding: 4px 8px; font-size: 16px; min-width: 24px;">−</button></td>
    `;

    const skuSelect = row.querySelector("select");
    const regionSelect = row.querySelector('select[data-role="region"]');
    const costInput = row.querySelector('input[data-role="cost"]');
    const reservationCheckbox = row.querySelector('input[data-role="reservation"]');
    const delBtn = row.querySelector("button.del");



    const updateCostFromPricing = () => {
      const currentSKU = skuSelect.value;
      const currentRegion = regionSelect.value;
      const cap = state.capacities.find(c => c.id === id);

      if (!currentRegion) {
        costInput.value = "0";
        if (cap) {
          cap.monthlyCost = 0;
          cap.paygMonthly = 0;
          cap.reservationMonthly = 0;
        }
        updateKPIs();
        return;
      }

      // Check if region supports reservation (null = N/A on Azure pricing page)
      const reservationSupported = f2ReservationPricesByRegion[currentRegion] !== null &&
                                   f2ReservationPricesByRegion[currentRegion] !== undefined;
      reservationCheckbox.disabled = !reservationSupported;
      reservationCheckbox.title = reservationSupported ? '' : 'Fabric reservations are not available in this region';
      reservationCheckbox.style.cursor = reservationSupported ? 'pointer' : 'not-allowed';
      reservationCheckbox.style.opacity = reservationSupported ? '1' : '0.35';
      if (!reservationSupported && reservationCheckbox.checked) {
        reservationCheckbox.checked = false;
        if (cap) { cap.hasReservation = false; }
      }

      if (currentSKU && currentRegion && fabricPricingData) {
        const pricing = getPricingForCapacityAndRegion(currentSKU, currentRegion);
        if (pricing) {
          // Store both PAYG and reservation prices
          if (cap) {
            cap.paygMonthly = pricing.payg_monthly_usd;
            cap.reservationMonthly = pricing.reservation_1yr_monthly_usd;
            // Display the appropriate cost based on reservation checkbox
            cap.monthlyCost = reservationCheckbox.checked ? pricing.reservation_1yr_monthly_usd : pricing.payg_monthly_usd;
          }
          costInput.value = Math.round(cap.monthlyCost).toLocaleString();
          updateKPIs();
          return;
        }
      }
    };

    skuSelect.addEventListener("change", () => {
      const cap = state.capacities.find(c => c.id === id);
      if (cap) cap.name = skuSelect.value;
      updateCostFromPricing();
    });

    regionSelect.addEventListener("change", () => {
      const cap = state.capacities.find(c => c.id === id);
      if (cap) cap.region = regionSelect.value;
      updateCostFromPricing();
    });

    reservationCheckbox.addEventListener("change", () => {
      const cap = state.capacities.find(c => c.id === id);
      // Update monthlyCost to use reservation or PAYG price based on checkbox
      if (cap) {
        if (reservationCheckbox.checked) {
          cap.monthlyCost = (cap.reservationMonthly && cap.reservationMonthly > 0) ? cap.reservationMonthly : cap.paygMonthly;
          cap.hasReservation = true;
        } else {
          cap.monthlyCost = cap.paygMonthly;
          cap.hasReservation = false;
        }
        costInput.value = Math.round(cap.monthlyCost).toLocaleString();
      }
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
    // Currency locked to USD
    state.currencyCode = "USD";
    state.currencySymbol = "$";
    byId("viewerCount").value = 0;
    byId("builderCount").value = 0;
    byId("proCost").value = 0;
    if (viewerSlider) {
      viewerSlider.value = 0;
      updateRangeFill(viewerSlider);
    }
    if (builderSlider) {
      builderSlider.value = 0;
      updateRangeFill(builderSlider);
    }
    byId("recommendationMain").textContent = "";

    state.capacities = [];
    tbody.innerHTML = "";
    updateKPIs();

    // Ensure baseline hidden again
    const box = byId("baselineBox");
    if (!box.classList.contains("hide")) box.classList.add("hide");
  });

  byId("sampleBtn").addEventListener("click", () => {
    // Currency locked to USD
    state.currencyCode = "USD";
    state.currencySymbol = "$";
    byId("viewerCount").value = 1200;
    byId("builderCount").value = 25;
    byId("proCost").value = 14;
    if (viewerSlider) {
      viewerSlider.value = 1200;
      updateRangeFill(viewerSlider);
    }
    if (builderSlider) {
      builderSlider.value = 25;
      updateRangeFill(builderSlider);
    }

    // Clear existing capacities
    state.capacities = [];
    tbody.innerHTML = "";
    
    // Add sample capacities using arm_region_name (e.g., "centralus")
    addCapacityRow("F32", "", "centralus");
    addCapacityRow("F64", "", "centralus");
    
    // Read form inputs to update state, then update KPIs
    readInputs();

    const box = byId("baselineBox");
    if (!box.classList.contains("hide")) box.classList.add("hide");
  });

  byId("printBtn").addEventListener("click", () => window.print());

  // --- Cost Estimator Sliders Sync ---
  function updateRangeFill(slider) {
    const min = Number(slider.min) || 0;
    const max = Number(slider.max) || 100;
    const progress = ((Number(slider.value) - min) / (max - min)) * 100;
    slider.style.setProperty("--range-progress", `${progress}%`);
  }

  const viewerSlider = byId("viewerSliderEstimator") || null;
  const builderSlider = byId("builderSliderEstimator") || null;

  // Sync slider to inputs and trigger calculation
  if (viewerSlider) {
    viewerSlider.addEventListener("input", () => {
      byId("viewerCount").value = viewerSlider.value;
      updateRangeFill(viewerSlider);
      readInputs();
    });
  }

  if (builderSlider) {
    builderSlider.addEventListener("input", () => {
      byId("builderCount").value = builderSlider.value;
      updateRangeFill(builderSlider);
      readInputs();
    });
  }

  // Sync number inputs to sliders and trigger calculation
  byId("viewerCount").addEventListener("input", () => {
    const val = Math.min(Math.max(Number(byId("viewerCount").value) || 0, 0), 2000);
    byId("viewerCount").value = val;
    if (viewerSlider) {
      viewerSlider.value = val;
      updateRangeFill(viewerSlider);
    }
    readInputs();
  });

  byId("builderCount").addEventListener("input", () => {
    const val = Math.min(Math.max(Number(byId("builderCount").value) || 0, 0), 200);
    byId("builderCount").value = val;
    if (builderSlider) {
      builderSlider.value = val;
      updateRangeFill(builderSlider);
    }
    readInputs();
  });

  // --- Init defaults ---
  // Set form values to match initial state
  // Currency locked to USD
  byId("viewerCount").value = state.viewers;
  byId("builderCount").value = state.builders;
  byId("proCost").value = state.proCost;
  
  // Initialize sliders
  if (viewerSlider) {
    viewerSlider.value = state.viewers;
    updateRangeFill(viewerSlider);
  }
  if (builderSlider) {
    builderSlider.value = state.builders;
    updateRangeFill(builderSlider);
  }
  
  // Add initial capacities with pricing lookup using arm_region_name
  addCapacityRow("F32", "", "centralus");
  addCapacityRow("F64", "", "centralus");
  updateKPIs();
  console.log("Fabric PBI Cost Advisor initialized successfully with embedded pricing data");


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
     const proCostValue = parseFloat(document.getElementById('licenseTableProCost').value);
     const proCost = Number.isNaN(proCostValue) ? 14 : proCostValue;
     const ppuCostValue = parseFloat(document.getElementById('licenseTablePpuCost').value);
     const ppuCost = Number.isNaN(ppuCostValue) ? 24 : ppuCostValue;

     // Disable reservation checkbox if selected region doesn't support reservations
     const licenseRegion = document.getElementById('licenseTableRegion').value;
     const licenseResCheckbox = document.getElementById('reservationDiscount');
     const licenseResSupported = !licenseRegion ||
       (f2ReservationPricesByRegion[licenseRegion] !== null && f2ReservationPricesByRegion[licenseRegion] !== undefined);
     licenseResCheckbox.disabled = !licenseResSupported;
     licenseResCheckbox.style.cursor = licenseResSupported ? 'pointer' : 'not-allowed';
     licenseResCheckbox.style.opacity = licenseResSupported ? '1' : '0.35';
     licenseResCheckbox.title = licenseResSupported ? '' : 'Fabric reservations are not available in this region';
     if (!licenseResSupported && licenseResCheckbox.checked) {
       licenseResCheckbox.checked = false;
     }

     const reservationDiscount = licenseResSupported && licenseResCheckbox.checked;
     const hideProOnly = document.getElementById('hideProOnly').checked;
     const hidePpuOnly = document.getElementById('hidePpuOnly').checked;
     const symbol = '$'; // Fixed to USD
     const selectedRegionArm = document.getElementById('licenseTableRegion').value;

    // Get pricing for selected region using the same function as the Regional Cost Estimator
    const fabricSKUs = [
      { name: 'F8', viewerPolicy: 'Pro required', computeUnits: 8 },
      { name: 'F16', viewerPolicy: 'Pro required', computeUnits: 16 },
      { name: 'F32', viewerPolicy: 'Pro required', computeUnits: 32 },
      { name: 'F64', viewerPolicy: 'Free viewers', computeUnits: 64 },
      { name: 'F128', viewerPolicy: 'Free viewers', computeUnits: 128 },
      { name: 'F256', viewerPolicy: 'Free viewers', computeUnits: 256 }
    ].map(sku => {
      if (!selectedRegionArm) {
        return { ...sku, monthlyCost: 0, originalCost: 0 };
      }
      const pricing = getPricingForCapacityAndRegion(sku.name, selectedRegionArm);
      const paygCost = pricing?.payg_monthly_usd || 0;
      const reservationCost = pricing?.reservation_1yr_monthly_usd || 0;
      return {
        ...sku,
        monthlyCost: reservationDiscount ? reservationCost : paygCost,
        originalCost: paygCost
      };
    });

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
  // Initialize license table region dropdown
  function initLicenseTableRegionDropdown() {
    const regionSelect = document.getElementById('licenseTableRegion');
    regionSelect.innerHTML = buildGroupedRegionOptions('westeurope');
  }
  
  initTabs();
  initLicenseTableRegionDropdown();
  
  // Add event listeners for license table inputs
  document.getElementById('licenseTableRegion').addEventListener('change', generateLicenseImpactTable);
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
    updateRangeFill(this);
    generateLicenseImpactTable();
  });
  
  buildersSlider.addEventListener('input', function() {
    buildersCount.textContent = this.value;
    updateRangeFill(this);
    generateLicenseImpactTable();
  });

  updateRangeFill(viewersSlider);
  updateRangeFill(buildersSlider);
