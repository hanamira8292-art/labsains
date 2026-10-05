/* =========================================
   LABSAINS APP
========================================= */


/* -----------------------------
   DATA BAHAN KIMIA
----------------------------- */

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
  }

];


/* -----------------------------
   DATA ALAT / RADAS
----------------------------- */

const equipmentCatalog = [

  {
    id: "beaker",
    name: "Bikar",
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
    id: "pipette",
    name: "Pipet",
    category: "Pemindahan",
    icon: "💧"
  },

  {
    id: "burette",
    name: "Buret",
    category: "Titrasi",
    icon: "🧪"
  },

  {
    id: "funnel",
    name: "Corong",
    category: "Pemindahan",
    icon: "🔻"
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
    id: "microscope",
    name: "Mikroskop",
    category: "Optik",
    icon: "🔬"
  },

  {
    id: "spatula",
    name: "Spatula",
    category: "Pengendalian bahan",
    icon: "🥄"
  },

  {
    id: "dropper",
    name: "Penitis",
    category: "Pemindahan",
    icon: "💧"
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
  }

];


/* -----------------------------
   DATA INVENTORI
----------------------------- */

let inventory =
  JSON.parse(
    localStorage.getItem("labsains_inventory")
  ) || [

  {
    id: "default_beaker",
    type: "equipment",
    name: "Bikar",
    formula: "",
    category: "Bekas",
    icon: "🥛",
    warning: ""
  },

  {
    id: "default_testtube",
    type: "equipment",
    name: "Tabung Uji",
    formula: "",
    category: "Bekas",
    icon: "🧪",
    warning: ""
  }

];


let currentFilter = "all";


/* =========================================
   NAVIGATION
========================================= */

function openPage(pageId) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });

  const page =
    document.getElementById(pageId);

  if (page) {

    page.classList.add("active");

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  renderInventory();
  renderChemicalCatalog();

}


/* =========================================
   STORAGE
========================================= */

function saveInventory() {

  localStorage.setItem(
    "labsains_inventory",
    JSON.stringify(inventory)
  );

}


/* =========================================
   ADD CHEMICAL
========================================= */

function openChemicalModal() {

  closeAddMenu();

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


function renderChemicalOptions() {

  const container =
    document.getElementById("chemicalOptions");

  container.innerHTML = "";

  chemicalCatalog.forEach(item => {

    const exists =
      inventory.some(
        x =>
          x.type === "chemical" &&
          x.catalogId === item.id
      );

    const div =
      document.createElement("div");

    div.className =
      "catalog-item";

    div.innerHTML = `

      <strong>
        ${item.icon} ${item.name}
      </strong>

      <p>
        Formula: ${item.formula}<br>
        Kategori: ${item.category}
      </p>

      ${
        item.warning
          ? `<span class="warning-tag">
              ⚠️ ${item.warning}
             </span>`
          : ""
      }

      <br><br>

      <button
        class="add-btn"
        ${exists ? "disabled" : ""}
        onclick="addChemical('${item.id}')">

        ${
          exists
            ? "✓ Sudah dalam inventori"
            : "+ Tambah"

        }

      </button>
    `;

    container.appendChild(div);

  });

}


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
      "chemical_" +
      Date.now(),

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

    warning:
      item.warning

  });


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicalOptions();

}


/* =========================================
   ADD EQUIPMENT
========================================= */

function openEquipmentModal() {

  closeAddMenu();

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


function renderEquipmentOptions() {

  const container =
    document.getElementById("equipmentOptions");

  container.innerHTML = "";

  equipmentCatalog.forEach(item => {

    const exists =
      inventory.some(
        x =>
          x.type === "equipment" &&
          x.catalogId === item.id
      );


    const div =
      document.createElement("div");

    div.className =
      "catalog-item";

    div.innerHTML = `

      <strong>
        ${item.icon} ${item.name}
      </strong>

      <p>
        Kategori: ${item.category}
      </p>

      <button
        class="add-btn"
        ${exists ? "disabled" : ""}
        onclick="addEquipment('${item.id}')">

        ${
          exists
            ? "✓ Sudah dalam inventori"
            : "+ Tambah"
        }

      </button>

    `;

    container.appendChild(div);

  });

}


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
      "Alat ini sudah ada dalam inventori."
    );

    return;

  }


  inventory.push({

    id:
      "equipment_" +
      Date.now(),

    catalogId:
      item.id,

    type:
      "equipment",

    name:
      item.name,

    formula:
      "",

    category:
      item.category,

    icon:
      item.icon,

    warning:
      ""

  });


  saveInventory();

  updateDashboard();

  renderInventory();

  renderEquipmentOptions();

}


/* =========================================
   INVENTORY DISPLAY
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
        "searchInput"
      )?.value || ""
    ).toLowerCase();


  let filtered =
    inventory.filter(item => {

      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(search) ||

        item.category
          .toLowerCase()
          .includes(search) ||

        (item.formula || "")
          .toLowerCase()
          .includes(search);


      const matchesFilter =
        currentFilter === "all" ||
        item.type === currentFilter;


      return (
        matchesSearch &&
        matchesFilter
      );

    });


  if (filtered.length === 0) {

    container.innerHTML = `

      <div class="empty">

        <div style="font-size:40px">
          📦
        </div>

        <p>
          Tiada item ditemui.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const div =
      document.createElement("div");

    div.className =
      "inventory-item";


    div.innerHTML = `

      <div class="item-icon">
        ${item.icon}
      </div>

      <div class="item-info">

        <strong>
          ${item.name}
        </strong>

        <small>
          ${item.category}

          ${
            item.formula
              ? " • " + item.formula
              : ""
          }
        </small>

        ${
          item.warning
            ? `<div>
                <span class="warning-tag">
                  ⚠️ ${item.warning}
                </span>
              </div>`
            : ""
        }

      </div>

      <button
        class="delete-btn"
        onclick="deleteItem('${item.id}')">

        🗑️

      </button>

    `;


    container.appendChild(div);

  });

}


/* =========================================
   DELETE
========================================= */

function deleteItem(id) {

  const item =
    inventory.find(
      x => x.id === id
    );

  if (!item) return;


  const confirmDelete =
    confirm(
      `Padam "${item.name}" daripada inventori?`
    );


  if (!confirmDelete) return;


  inventory =
    inventory.filter(
      x => x.id !== id
    );


  saveInventory();

  updateDashboard();

  renderInventory();

}


/* =========================================
   FILTER
========================================= */

function setFilter(
  filter,
  button
) {

  currentFilter =
    filter;


  document
    .querySelectorAll(".filter")
    .forEach(btn =>
      btn.classList.remove("active")
    );


  button.classList.add("active");


  renderInventory();

}


/* =========================================
   CHEMICAL CATALOG PAGE
========================================= */

function renderChemicalCatalog() {

  const container =
    document.getElementById(
      "chemicalCatalog"
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


    const div =
      document.createElement("div");

    div.className =
      "catalog-item";


    div.innerHTML = `

      <strong>
        ${item.icon}
        ${item.name}
      </strong>

      <p>

        Formula:
        ${item.formula}

        <br>

        Kategori:
        ${item.category}

        ${
          item.warning
            ? `<br>
               ⚠️ ${item.warning}`
            : ""
        }

      </p>

      <button
        class="add-btn"
        ${exists ? "disabled" : ""}
        onclick="addChemical('${item.id}')">

        ${
          exists
            ? "✓ Dalam Inventori"
            : "+ Tambah ke Inventori"
        }

      </button>

    `;


    container.appendChild(div);

  });

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


  const warnings =
    inventory.filter(
      x =>
        x.type === "chemical" &&
        x.warning
    ).length;


  document.getElementById(
    "equipmentCount"
  ).textContent =
    equipment;


  document.getElementById(
    "chemicalCount"
  ).textContent =
    chemicals;


  document.getElementById(
    "warningCount"
  ).textContent =
    warnings;


  /* Contoh data eksperimen */
  document.getElementById(
    "experimentCount"
  ).textContent =
    "7";

}


/* =========================================
   FLOATING ADD MENU
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
   INSTALL
========================================= */

function showInstallInfo() {

  alert(
    "Untuk memasang LABSAINS sebagai aplikasi, gunakan menu browser 'Add to Home screen' atau 'Install app' jika tersedia."
  );

}


/* =========================================
   START APP
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateDashboard();

    renderInventory();

    renderChemicalCatalog();

  }
);
