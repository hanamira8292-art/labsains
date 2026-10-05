/* =========================================
   LABSAINS PRO
========================================= */


/* =========================================
   KATALOG BAHAN KIMIA
========================================= */

const chemicalCatalog = [

  {
    id: "hcl",
    name: "Asid Hidroklorik",
    formula: "HCl",
    category: "Asid",
    icon: "🧪",
    warning: "Menghakis"
  },

  {
    id: "naoh",
    name: "Natrium Hidroksida",
    formula: "NaOH",
    category: "Alkali",
    icon: "🧪",
    warning: "Menghakis"
  },

  {
    id: "h2so4",
    name: "Asid Sulfurik",
    formula: "H₂SO₄",
    category: "Asid",
    icon: "🧪",
    warning: "Sangat menghakis"
  },

  {
    id: "acetic",
    name: "Asid Asetik",
    formula: "CH₃COOH",
    category: "Asid lemah",
    icon: "🧪",
    warning: "Boleh merengsa"
  },

  {
    id: "ethanol",
    name: "Etanol",
    formula: "C₂H₅OH",
    category: "Pelarut",
    icon: "🧪",
    warning: "Mudah terbakar"
  },

  {
    id: "cuso4",
    name: "Kuprum(II) Sulfat",
    formula: "CuSO₄",
    category: "Garam",
    icon: "🧪",
    warning: "Berbahaya jika tertelan"
  },

  {
    id: "nacl",
    name: "Natrium Klorida",
    formula: "NaCl",
    category: "Garam",
    icon: "🧂",
    warning: ""
  },

  {
    id: "iodine",
    name: "Larutan Iodin",
    formula: "I₂",
    category: "Reagen",
    icon: "🧪",
    warning: "Merengsa"
  },

  {
    id: "phenolphthalein",
    name: "Fenolftalein",
    formula: "C₂₀H₁₄O₄",
    category: "Penunjuk",
    icon: "🧪",
    warning: "Gunakan mengikut SDS"
  },

  {
    id: "bromothymol",
    name: "Bromotimol Biru",
    formula: "BTB",
    category: "Penunjuk",
    icon: "🧪",
    warning: ""
  },

  {
    id: "hydrogen_peroxide",
    name: "Hidrogen Peroksida",
    formula: "H₂O₂",
    category: "Reagen",
    icon: "🧪",
    warning: "Pengoksida"
  },

  {
    id: "sodium_bicarbonate",
    name: "Natrium Bikarbonat",
    formula: "NaHCO₃",
    category: "Garam",
    icon: "🧪",
    warning: ""
  },

  {
    id: "potassium_iodide",
    name: "Kalium Iodida",
    formula: "KI",
    category: "Garam",
    icon: "🧪",
    warning: ""
  },

  {
    id: "calcium_carbonate",
    name: "Kalsium Karbonat",
    formula: "CaCO₃",
    category: "Garam",
    icon: "🧪",
    warning: ""
  }

];


/* =========================================
   KATALOG RADAS
========================================= */

const equipmentCatalog = [

  {
    id: "microscope",
    name: "Mikroskop",
    category: "Optik",
    icon: "🔬"
  },

  {
    id: "beaker",
    name: "Bikar 100 ml",
    category: "Bekas",
    icon: "🥛"
  },

  {
    id: "testtube",
    name: "Tabung Uji",
    category: "Bekas",
    icon: "🧪"
  },

  {
    id: "testtube_rack",
    name: "Rak Tabung Uji",
    category: "Sokongan",
    icon: "🗄️"
  },

  {
    id: "measuring_cylinder",
    name: "Silinder Penyukat",
    category: "Pengukuran",
    icon: "🥛"
  },

  {
    id: "conical_flask",
    name: "Kelalang Kon",
    category: "Bekas",
    icon: "⚗️"
  },

  {
    id: "volumetric_flask",
    name: "Kelalang Volumetrik",
    category: "Pengukuran",
    icon: "⚗️"
  },

  {
    id: "burette",
    name: "Buret",
    category: "Titrasi",
    icon: "🧪"
  },

  {
    id: "pipette",
    name: "Pipet",
    category: "Pemindahan",
    icon: "💧"
  },

  {
    id: "dropper",
    name: "Penitis",
    category: "Pemindahan",
    icon: "💧"
  },

  {
    id: "thermometer",
    name: "Termometer",
    category: "Pengukuran",
    icon: "🌡️"
  },

  {
    id: "balance",
    name: "Neraca Digital",
    category: "Pengukuran",
    icon: "⚖️"
  },

  {
    id: "spatula",
    name: "Spatula",
    category: "Pengendalian bahan",
    icon: "🥄"
  },

  {
    id: "tripod",
    name: "Kaki Tiga",
    category: "Sokongan",
    icon: "🔺"
  },

  {
    id: "wire_gauze",
    name: "Kasa Dawai",
    category: "Pemanasan",
    icon: "▦"
  },

  {
    id: "bunsen",
    name: "Penunu Bunsen",
    category: "Pemanasan",
    icon: "🔥"
  },

  {
    id: "funnel",
    name: "Corong",
    category: "Pemindahan",
    icon: "🔻"
  }

];


/* =========================================
   DATA EKSPERIMEN
========================================= */

const defaultExperiments = [

  {
    id: "exp1",
    name: "Ujian Kanji Dalam Makanan",
    className: "Tingkatan 4 • Biologi",
    group: "Kumpulan 1",
    status: "Selesai",
    date: "2026-10-04",
    icon: "🧪"
  },

  {
    id: "exp2",
    name: "Fotosintesis",
    className: "Tingkatan 4 • Biologi",
    group: "Kumpulan 2",
    status: "Dalam proses",
    date: "2026-10-04",
    icon: "🌱"
  },

  {
    id: "exp3",
    name: "Tindak Balas Asid & Alkali",
    className: "Tingkatan 3 • Sains",
    group: "Kumpulan 3",
    status: "Dalam proses",
    date: "2026-10-03",
    icon: "🧪"
  },

  {
    id: "exp4",
    name: "Kesan Suhu Terhadap Kadar Tindak Balas",
    className: "Tingkatan 5 • Kimia",
    group: "Kumpulan 1",
    status: "Dalam proses",
    date: "2026-10-02",
    icon: "🔥"
  },

  {
    id: "exp5",
    name: "Pengekstrakan DNA",
    className: "Tingkatan 5 • Biologi",
    group: "Kumpulan 2",
    status: "Dalam proses",
    date: "2026-10-01",
    icon: "🧬"
  }

];


/* =========================================
   STORAGE
========================================= */

function loadData(key, fallback) {

  try {

    const saved =
      localStorage.getItem(key);

    if (saved) {

      return JSON.parse(saved);

    }

  } catch (error) {

    console.error(error);

  }

  return fallback;

}


let inventory =
  loadData(
    "labsains_pro_inventory",
    []
  );


let experiments =
  loadData(
    "labsains_pro_experiments",
    defaultExperiments
  );


let inventoryFilter = "all";

let chemicalFilter = "all";

let experimentFilter = "all";


/* =========================================
   SAVE
========================================= */

function saveInventory() {

  localStorage.setItem(
    "labsains_pro_inventory",
    JSON.stringify(inventory)
  );

}


function saveExperiments() {

  localStorage.setItem(
    "labsains_pro_experiments",
    JSON.stringify(experiments)
  );

}


/* =========================================
   PAGE NAVIGATION
========================================= */

function openPage(pageId, navButton) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });


  const page =
    document.getElementById(pageId);


  if (!page) return;


  page.classList.add("active");


  document
    .querySelectorAll(".nav-item")
    .forEach(btn => {

      btn.classList.remove("active");

    });


  if (navButton) {

    navButton.classList.add("active");

  } else {

    const matching =
      document.querySelector(
        `.nav-item[onclick*="${pageId}"]`
      );

    if (matching) {

      matching.classList.add("active");

    }

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  updateDashboard();

  renderInventory();

  renderChemicals();

  renderExperiments();

}


/* =========================================
   SIDE MENU
========================================= */

function toggleSideMenu() {

  const menu =
    document.getElementById("sideMenu");

  if (!menu) return;

  menu.classList.toggle("open");

}


/* =========================================
   ADD MENU
========================================= */

function openAddMenu() {

  document
    .getElementById("addMenu")
    .classList.remove("hidden");

}


function closeAddMenu() {

  document
    .getElementById("addMenu")
    .classList.add("hidden");

}


/* =========================================
   CHEMICAL MODAL
========================================= */

function openChemicalModal() {

  closeAllModals();

  document
    .getElementById("chemicalModal")
    .classList.remove("hidden");

  renderChemicalOptions();

}


function closeChemicalModal() {

  document
    .getElementById("chemicalModal")
    .classList.add("hidden");

}


/* =========================================
   CHEMICAL OPTIONS
========================================= */

function renderChemicalOptions() {

  const container =
    document.getElementById(
      "chemicalOptions"
    );

  if (!container) return;

  container.innerHTML = "";


  chemicalCatalog.forEach(item => {

    const exists =
      inventory.some(
        x =>
          x.type === "chemical" &&
          x.catalogId === item.id
      );


    const card =
      document.createElement("div");

    card.className =
      "catalog-card";


    card.innerHTML = `

      <div class="catalog-top">

        <div class="catalog-icon">
          ${item.icon}
        </div>

        <div>

          <strong>
            ${item.name}
          </strong>

          <small>
            ${item.formula}
            •
            ${item.category}
          </small>

        </div>

      </div>


      <div class="catalog-info">

        ${
          item.warning
            ? "⚠️ " + item.warning
            : "✓ Pengendalian mengikut SDS/SOP"
        }

      </div>


      <button
        class="catalog-btn"
        ${
          exists
            ? "disabled"
            : ""
        }
        onclick="addChemical('${item.id}')"
      >

        ${
          exists
            ? "✓ Sudah dalam inventori"
            : "+ Tambah ke Inventori"
        }

      </button>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   ADD CHEMICAL
========================================= */

function addChemical(id) {

  const item =
    chemicalCatalog.find(
      x => x.id === id
    );


  if (!item) return;


  const exists =
    inventory.some(
      x =>
        x.type === "chemical" &&
        x.catalogId === id
    );


  if (exists) {

    alert(
      "Bahan ini sudah ada dalam inventori."
    );

    return;

  }


  inventory.push({

    id:
      "chem_" + Date.now(),

    catalogId:
      item.id,

    type:
      "chemical",

    name:
      item.name,

    formula:
      item.formula,

    category:
      item.category,

    icon:
      item.icon,

    quantity:
      1,

    unit:
      "botol",

    location:
      "Belum ditetapkan",

    expiry:
      "",

    status:
      item.warning
        ? "Perhatian"
        : "Selamat",

    warning:
      item.warning

  });


  saveInventory();

  updateDashboard();

  renderChemicals();

  renderChemicalOptions();

  alert(
    item.name +
    " telah ditambah ke inventori."
  );

}


/* =========================================
   EQUIPMENT MODAL
========================================= */

function openEquipmentModal() {

  closeAllModals();

  document
    .getElementById("equipmentModal")
    .classList.remove("hidden");

  renderEquipmentOptions();

}


function closeEquipmentModal() {

  document
    .getElementById("equipmentModal")
    .classList.add("hidden");

}


/* =========================================
   EQUIPMENT OPTIONS
========================================= */

function renderEquipmentOptions() {

  const container =
    document.getElementById(
      "equipmentOptions"
    );

  if (!container) return;

  container.innerHTML = "";


  equipmentCatalog.forEach(item => {

    const exists =
      inventory.some(
        x =>
          x.type === "equipment" &&
          x.catalogId === item.id
      );


    const card =
      document.createElement("div");

    card.className =
      "catalog-card";


    card.innerHTML = `

      <div class="catalog-top">

        <div class="catalog-icon">
          ${item.icon}
        </div>

        <div>

          <strong>
            ${item.name}
          </strong>

          <small>
            ${item.category}
          </small>

        </div>

      </div>


      <div class="catalog-info">
        Peralatan makmal
      </div>


      <button
        class="catalog-btn"
        ${
          exists
            ? "disabled"
            : ""
        }
        onclick="addEquipment('${item.id}')"
      >

        ${
          exists
            ? "✓ Sudah dalam inventori"
            : "+ Tambah ke Inventori"
        }

      </button>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   ADD EQUIPMENT
========================================= */

function addEquipment(id) {

  const item =
    equipmentCatalog.find(
      x => x.id === id
    );


  if (!item) return;


  const exists =
    inventory.some(
      x =>
        x.type === "equipment" &&
        x.catalogId === id
    );


  if (exists) {

    alert(
      "Peralatan ini sudah ada."
    );

    return;

  }


  inventory.push({

    id:
      "equip_" + Date.now(),

    catalogId:
      item.id,

    type:
      "equipment",

    name:
      item.name,

    category:
      item.category,

    icon:
      item.icon,

    quantity:
      1,

    unit:
      "unit",

    location:
      "Belum ditetapkan",

    status:
      "Baik"

  });


  saveInventory();

  updateDashboard();

  renderInventory();

  renderEquipmentOptions();

  alert(
    item.name +
    " telah ditambah ke inventori."
  );

}


/* =========================================
   INVENTORY RENDER
========================================= */

function renderInventory() {

  const container =
    document.getElementById(
      "inventoryList"
    );

  if (!container) return;


  const search =
    (
      document.getElementById(
        "inventorySearch"
      )?.value || ""
    )
    .toLowerCase()
    .trim();


  const filtered =
    inventory.filter(item => {

      const text =
        (
          item.name +
          " " +
          item.category +
          " " +
          item.location
        )
        .toLowerCase();


      const searchMatch =
        text.includes(search);


      const filterMatch =
        inventoryFilter === "all" ||
        item.status === inventoryFilter;


      return (
        searchMatch &&
        filterMatch
      );

    });


  if (!filtered.length) {

    container.innerHTML = `

      <div class="empty">

        <div class="empty-icon">
          📦
        </div>

        <strong>
          Tiada peralatan ditemui
        </strong>

        <p>
          Tekan + Tambah untuk memasukkan radas.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const statusClass =
      item.status === "Baik"
        ? "good"
        : item.status === "Stok rendah"
          ? "warning"
          : "danger";


    const card =
      document.createElement("div");

    card.className =
      "list-card";


    card.innerHTML = `

      <div class="list-icon">
        ${item.icon || "🔬"}
      </div>


      <div class="list-content">

        <strong>
          ${item.name}
        </strong>

        <small>
          ${item.category || "Peralatan"}
          •
          ${item.quantity || 0}
          ${item.unit || "unit"}
        </small>

        <small>
          📍 ${item.location || "Belum ditetapkan"}
        </small>

        <span class="status ${statusClass}">
          ${item.status || "Baik"}
        </span>

      </div>


      <button
        class="list-action"
        onclick="deleteInventory('${item.id}')"
      >
        🗑️
      </button>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   INVENTORY FILTER
========================================= */

function setInventoryFilter(
  filter,
  button
) {

  inventoryFilter = filter;

  activateFilter(
    button
  );

  renderInventory();

}


/* =========================================
   CHEMICAL RENDER
========================================= */

function renderChemicals() {

  const container =
    document.getElementById(
      "chemicalList"
    );

  if (!container) return;


  const search =
    (
      document.getElementById(
        "chemicalSearch"
      )?.value || ""
    )
    .toLowerCase()
    .trim();


  const chemicals =
    inventory.filter(
      x => x.type === "chemical"
    );


  const filtered =
    chemicals.filter(item => {

      const text =
        (
          item.name +
          " " +
          item.formula +
          " " +
          item.category
        )
        .toLowerCase();


      const searchMatch =
        text.includes(search);


      const filterMatch =
        chemicalFilter === "all" ||
        item.status === chemicalFilter;


      return (
        searchMatch &&
        filterMatch
      );

    });


  if (!filtered.length) {

    container.innerHTML = `

      <div class="empty">

        <div class="empty-icon">
          🧪
        </div>

        <strong>
          Tiada bahan kimia ditemui
        </strong>

        <p>
          Tekan + Tambah untuk memilih bahan.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const attention =
      item.warning
        ? "danger"
        : "good";


    const card =
      document.createElement("div");

    card.className =
      "list-card";


    card.innerHTML = `

      <div class="list-icon">
        ${item.icon || "🧪"}
      </div>


      <div class="list-content">

        <strong>
          ${item.name}
        </strong>

        <small>
          ${item.formula}
          •
          ${item.quantity || 0}
          ${item.unit || "botol"}
        </small>

        <small>
          📍 ${item.location || "Belum ditetapkan"}
        </small>

        ${
          item.expiry
            ? `
              <small>
                📅 Luput: ${item.expiry}
              </small>
            `
            : ""
        }


        <span class="status ${attention}">
          ${
            item.warning
              ? "⚠️ Perhatian"
              : "✓ Selamat"
          }
        </span>

      </div>


      <button
        class="list-action"
        onclick="deleteInventory('${item.id}')"
      >
        🗑️
      </button>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   CHEMICAL FILTER
========================================= */

function setChemicalFilter(
  filter,
  button
) {

  chemicalFilter = filter;

  activateFilter(
    button
  );

  renderChemicals();

}


/* =========================================
   EXPERIMENTS
========================================= */

function renderExperiments() {

  const container =
    document.getElementById(
      "experimentList"
    );

  if (!container) return;


  const search =
    (
      document.getElementById(
        "experimentSearch"
      )?.value || ""
    )
    .toLowerCase()
    .trim();


  const filtered =
    experiments.filter(item => {

      const text =
        (
          item.name +
          " " +
          item.className +
          " " +
          item.group
        )
        .toLowerCase();


      const searchMatch =
        text.includes(search);


      const filterMatch =
        experimentFilter === "all" ||
        item.status === experimentFilter;


      return (
        searchMatch &&
        filterMatch
      );

    });


  if (!filtered.length) {

    container.innerHTML = `

      <div class="empty">

        <div class="empty-icon">
          🧫
        </div>

        <strong>
          Tiada eksperimen
        </strong>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const statusClass =
      item.status === "Selesai"
        ? "good"
        : "warning";


    const card =
      document.createElement("div");

    card.className =
      "list-card";


    card.innerHTML = `

      <div class="list-icon">
        ${item.icon || "🧫"}
      </div>


      <div class="list-content">

        <strong>
          ${item.name}
        </strong>

        <small>
          ${item.className || ""}
        </small>

        <small>
          👥 ${item.group || "Kumpulan"}
          •
          📅 ${item.date || "-"}
        </small>

        <span class="status ${statusClass}">
          ${item.status}
        </span>

      </div>


      <button
        class="list-action"
        onclick="deleteExperiment('${item.id}')"
      >
        🗑️
      </button>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   EXPERIMENT FILTER
========================================= */

function setExperimentFilter(
  filter,
  button
) {

  experimentFilter = filter;

  activateFilter(
    button
  );

  renderExperiments();

}


/* =========================================
   FILTER BUTTON
========================================= */

function activateFilter(button) {

  if (!button) return;


  button
    .parentElement
    .querySelectorAll(".filter")
    .forEach(btn => {

      btn.classList.remove("active");

    });


  button.classList.add("active");

}


/* =========================================
   EXPERIMENT MODAL
========================================= */

function openExperimentModal() {

  closeAllModals();


  document
    .getElementById("experimentModal")
    .classList.remove("hidden");


  const date =
    document.getElementById(
      "expDate"
    );


  if (date && !date.value) {

    date.value =
      new Date()
        .toISOString()
        .split("T")[0];

  }

}


function closeExperimentModal() {

  document
    .getElementById("experimentModal")
    .classList.add("hidden");

}


/* =========================================
   SAVE EXPERIMENT
========================================= */

function saveExperiment() {

  const name =
    document.getElementById(
      "expName"
    ).value.trim();


  if (!name) {

    alert(
      "Sila masukkan nama eksperimen."
    );

    return;

  }


  const experiment = {

    id:
      "exp_" + Date.now(),

    name:
      name,

    className:
      document.getElementById(
        "expClass"
      ).value.trim(),

    group:
      document.getElementById(
        "expGroup"
      ).value.trim(),

    observation:
      document.getElementById(
        "expObservation"
      ).value.trim(),

    result:
      document.getElementById(
        "expResult"
      ).value.trim(),

    status:
      document.getElementById(
        "expStatus"
      ).value,

    date:
      document.getElementById(
        "expDate"
      ).value,

    icon:
      "🧫"

  };


  experiments.unshift(
    experiment
  );


  saveExperiments();

  closeExperimentModal();

  clearExperimentForm();

  renderExperiments();

  updateDashboard();

  alert(
    "Rekod eksperimen berjaya disimpan."
  );

}


/* =========================================
   CLEAR FORM
========================================= */

function clearExperimentForm() {

  [
    "expClass",
    "expName",
    "expGroup",
    "expObservation",
    "expResult"
  ]
  .forEach(id => {

    const el =
      document.getElementById(id);

    if (el) el.value = "";

  });

}


/* =========================================
   DELETE
========================================= */

function deleteInventory(id) {

  const item =
    inventory.find(
      x => x.id === id
    );


  if (!item) return;


  if (
    !confirm(
      `Padam "${item.name}" daripada inventori?`
    )
  ) return;


  inventory =
    inventory.filter(
      x => x.id !== id
    );


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicals();

  renderChemicalOptions();

  renderEquipmentOptions();

}


function deleteExperiment(id) {

  const item =
    experiments.find(
      x => x.id === id
    );


  if (!item) return;


  if (
    !confirm(
      `Padam rekod "${item.name}"?`
    )
  ) return;


  experiments =
    experiments.filter(
      x => x.id !== id
    );


  saveExperiments();

  renderExperiments();

  updateDashboard();

}


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

  const equipment =
    inventory.filter(
      x => x.type === "equipment"
    ).length;


  const chemicals =
    inventory.filter(
      x => x.type === "chemical"
    ).length;


  const experimentCount =
    experiments.length;


  const warnings =
    inventory.filter(
      x =>
        (
          x.warning ||
          x.status === "Rosak" ||
          x.status === "Stok rendah"
        )
    ).length;


  const equipmentEl =
    document.getElementById(
      "equipmentCount"
    );


  const chemicalEl =
    document.getElementById(
      "chemicalCount"
    );


  const experimentEl =
    document.getElementById(
      "experimentCount"
    );


  const warningEl =
    document.getElementById(
      "warningCount"
    );


  if (equipmentEl)
    equipmentEl.textContent =
      equipment;


  if (chemicalEl)
    chemicalEl.textContent =
      chemicals;


  if (experimentEl)
    experimentEl.textContent =
      experimentCount;


  if (warningEl)
    warningEl.textContent =
      warnings;


  renderRecent();

}


/* =========================================
   RECENT ACTIVITY
========================================= */

function renderRecent() {

  const container =
    document.getElementById(
      "recentList"
    );

  if (!container) return;


  const recent =
    experiments.slice(0,3);


  if (!recent.length) {

    container.innerHTML = "";

    return;

  }


  container.innerHTML = "";


  recent.forEach(item => {

    const card =
      document.createElement("div");

    card.className =
      "list-card";


    card.innerHTML = `

      <div class="list-icon">
        ${item.icon}
      </div>

      <div class="list-content">

        <strong>
          ${item.name}
        </strong>

        <small>
          ${item.className || ""}
        </small>

        <span class="status ${
          item.status === "Selesai"
            ? "good"
            : "warning"
        }">
          ${item.status}
        </span>

      </div>

    `;


    container.appendChild(card);

  });

}


/* =========================================
   MODAL UTILITIES
========================================= */

function closeAllModals() {

  [
    "addMenu",
    "chemicalModal",
    "equipmentModal",
    "experimentModal"
  ]
  .forEach(id => {

    const modal =
      document.getElementById(id);

    if (modal) {

      modal.classList.add(
        "hidden"
      );

    }

  });

}


function closeIfOutside(
  event,
  id
) {

  if (
    event.target.id === id
  ) {

    document
      .getElementById(id)
      .classList.add("hidden");

  }

}


/* =========================================
   NOTIFICATION
========================================= */

function showNotification() {

  const warnings =
    inventory.filter(
      x =>
        x.warning ||
        x.status === "Rosak" ||
        x.status === "Stok rendah"
    ).length;


  if (warnings > 0) {

    alert(
      `LABSAINS mempunyai ${warnings} item yang memerlukan perhatian.`
    );

  } else {

    alert(
      "Tiada amaran inventori buat masa ini."
    );

  }

}


/* =========================================
   START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    setTimeout(
      function () {

        const splash =
          document.getElementById(
            "splashScreen"
          );


        const app =
          document.getElementById(
            "app"
          );


        if (splash)
          splash.classList.add(
            "hidden"
          );


        if (app)
          app.classList.remove(
            "hidden"
          );


        updateDashboard();

        renderInventory();

        renderChemicals();

        renderExperiments();

        renderChemicalOptions();

        renderEquipmentOptions();

      },
      1200
    );

  }
);
