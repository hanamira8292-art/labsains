/* =========================================
   LABSAINS PRO
   SISTEM PENGURUSAN MAKMAL
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
    id: "potassium_hydroxide",
    name: "Kalium Hidroksida",
    formula: "KOH",
    category: "Alkali",
    icon: "🧪",
    warning: "Menghakis"
  },

  {
    id: "calcium_carbonate",
    name: "Kalsium Karbonat",
    formula: "CaCO₃",
    category: "Garam",
    icon: "🧪",
    warning: ""
  },

  {
    id: "ammonia",
    name: "Larutan Ammonia",
    formula: "NH₃",
    category: "Alkali",
    icon: "🧪",
    warning: "Merengsa"
  }

];


/* =========================================
   KATALOG RADAS
========================================= */

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
  },

  {
    id: "bunsen",
    name: "Penunu Bunsen",
    category: "Pemanasan",
    icon: "🔥"
  },

  {
    id: "glass_rod",
    name: "Rod Kaca",
    category: "Pemindahan",
    icon: "📏"
  },

  {
    id: "evaporating_dish",
    name: "Piring Sejat",
    category: "Pemanasan",
    icon: "🥣"
  },

  {
    id: "crucible",
    name: "Mangkuk Pijar",
    category: "Pemanasan",
    icon: "⚪"
  },

  {
    id: "wash_bottle",
    name: "Botol Pencuci",
    category: "Bekas",
    icon: "💧"
  }

];


/* =========================================
   INVENTORI
========================================= */

let inventory = [];

try {

  inventory =
    JSON.parse(
      localStorage.getItem(
        "labsains_inventory"
      )
    ) || [];

} catch (error) {

  inventory = [];

}


/*
   Pastikan data lama masih boleh digunakan.
*/

inventory = inventory.map(item => {

  return {

    id:
      item.id ||
      ("item_" + Date.now() + Math.random()),

    catalogId:
      item.catalogId || "",

    type:
      item.type || "equipment",

    name:
      item.name || "Item",

    formula:
      item.formula || "",

    category:
      item.category || "Lain-lain",

    icon:
      item.icon ||
      (item.type === "chemical" ? "🧪" : "🔬"),

    warning:
      item.warning || "",

    quantity:
      Number.isFinite(Number(item.quantity))
        ? Number(item.quantity)
        : 1,

    unit:
      item.unit ||
      (item.type === "chemical"
        ? "Botol"
        : "Unit"),

    location:
      item.location || "",

    status:
      item.status || "baik"

  };

});


let currentFilter = "all";


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
  updateDashboard();

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

  closeAddMenu();

  closeEquipmentModal();

  closeCustomEquipmentForm();

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


    const div =
      document.createElement("div");

    div.className = "catalog-item";


    div.innerHTML = `

      <strong>
        ${item.icon} ${item.name}
      </strong>

      <p>
        Formula: ${item.formula}<br>
        Kategori: ${item.category}

        ${
          item.warning
            ? `<br>⚠️ ${item.warning}`
            : ""
        }

      </p>

      <button
        class="add-btn"
        ${exists ? "disabled" : ""}
        onclick="addChemical('${item.id}')"
      >

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
      item.warning,

    quantity:
      1,

    unit:
      "Botol",

    location:
      "",

    status:
      "baik"

  });


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicalOptions();

  renderChemicalCatalog();


  alert(
    item.name +
    " telah ditambah ke inventori."
  );

}


/* =========================================
   CUSTOM CHEMICAL FORM
========================================= */

function openCustomChemicalForm() {

  closeChemicalModal();

  document
    .getElementById("customChemicalModal")
    .classList.remove("hidden");

  document
    .getElementById("customChemicalName")
    .focus();

}


function closeCustomChemicalForm() {

  document
    .getElementById("customChemicalModal")
    .classList.add("hidden");

}


/* =========================================
   SAVE CUSTOM CHEMICAL
========================================= */

function saveCustomChemical(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("customChemicalName")
      .value
      .trim();


  if (!name) {

    alert(
      "Sila masukkan nama bahan kimia."
    );

    return;

  }


  const formula =
    document
      .getElementById("customChemicalFormula")
      .value
      .trim();


  const category =
    document
      .getElementById("customChemicalCategory")
      .value;


  const quantity =
    Number(
      document
        .getElementById("customChemicalQuantity")
        .value
    ) || 0;


  const unit =
    document
      .getElementById("customChemicalUnit")
      .value;


  const location =
    document
      .getElementById("customChemicalLocation")
      .value
      .trim();


  const status =
    document
      .getElementById("customChemicalStatus")
      .value;


  const warning =
    document
      .getElementById("customChemicalWarning")
      .value
      .trim();


  inventory.push({

    id:
      "custom_chemical_" +
      Date.now(),

    catalogId:
      "",

    type:
      "chemical",

    name:
      name,

    formula:
      formula,

    category:
      category,

    icon:
      "🧪",

    warning:
      warning,

    quantity:
      quantity,

    unit:
      unit,

    location:
      location,

    status:
      status

  });


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicalCatalog();


  document
    .getElementById("chemicalForm")
    .reset();


  document
    .getElementById("customChemicalQuantity")
    .value = 1;


  closeCustomChemicalForm();


  alert(
    name +
    " telah berjaya ditambah ke inventori."
  );


  openPage("inventoryPage");

}


/* =========================================
   EQUIPMENT MODAL
========================================= */

function openEquipmentModal() {

  closeAddMenu();

  closeChemicalModal();

  closeCustomChemicalForm();

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
        onclick="addEquipment('${item.id}')"
      >

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
      "Radas ini sudah ada dalam inventori."
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
      "",

    quantity:
      1,

    unit:
      "Unit",

    location:
      "",

    status:
      "baik"

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
   CUSTOM EQUIPMENT FORM
========================================= */

function openCustomEquipmentForm() {

  closeEquipmentModal();

  document
    .getElementById("customEquipmentModal")
    .classList.remove("hidden");

  document
    .getElementById("customEquipmentName")
    .focus();

}


function closeCustomEquipmentForm() {

  document
    .getElementById("customEquipmentModal")
    .classList.add("hidden");

}


/* =========================================
   SAVE CUSTOM EQUIPMENT
========================================= */

function saveCustomEquipment(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("customEquipmentName")
      .value
      .trim();


  if (!name) {

    alert(
      "Sila masukkan nama radas."
    );

    return;

  }


  const code =
    document
      .getElementById("customEquipmentCode")
      .value
      .trim();


  const category =
    document
      .getElementById("customEquipmentCategory")
      .value;


  const quantity =
    Number(
      document
        .getElementById("customEquipmentQuantity")
        .value
    ) || 0;


  const unit =
    document
      .getElementById("customEquipmentUnit")
      .value;


  const location =
    document
      .getElementById("customEquipmentLocation")
      .value
      .trim();


  const status =
    document
      .getElementById("customEquipmentStatus")
      .value;


  inventory.push({

    id:
      "custom_equipment_" +
      Date.now(),

    catalogId:
      "",

    type:
      "equipment",

    name:
      name,

    formula:
      code,

    category:
      category,

    icon:
      "🔬",

    warning:
      "",

    quantity:
      quantity,

    unit:
      unit,

    location:
      location,

    status:
      status

  });


  saveInventory();

  updateDashboard();

  renderInventory();


  document
    .getElementById("equipmentForm")
    .reset();


  document
    .getElementById("customEquipmentQuantity")
    .value = 1;


  closeCustomEquipmentForm();


  alert(
    name +
    " telah berjaya ditambah ke inventori."
  );


  openPage("inventoryPage");

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
      document
        .getElementById("searchInput")
        ?.value || ""
    )
    .toLowerCase()
    .trim();


  const filtered =
    inventory.filter(item => {

      const text = (

        item.name +
        " " +
        item.category +
        " " +
        item.formula +
        " " +
        item.location +
        " " +
        item.status

      ).toLowerCase();


      const matchesSearch =
        text.includes(search);


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

        <div style="font-size:45px">
          📦
        </div>

        <h3>
          Inventori kosong
        </h3>

        <p style="margin-top:8px">
          Tekan butang + Tambah untuk
          memasukkan bahan kimia atau radas.
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


    const statusText =
      getStatusText(item.status);


    const statusClass =
      "status-" +
      item.status;


    div.innerHTML = `

      <div class="item-icon">
        ${item.icon}
      </div>


      <div class="item-info">

        <strong>
          ${escapeHTML(item.name)}
        </strong>


        <small>

          ${
            item.formula
              ? escapeHTML(item.formula) + " • "
              : ""
          }

          ${escapeHTML(item.category)}

        </small>


        <div class="item-meta">

          🔢
          ${item.quantity}
          ${escapeHTML(item.unit)}

          ${
            item.location
              ? `
                <br>
                📍 ${escapeHTML(item.location)}
              `
              : ""
          }

        </div>


        <span
          class="status-tag ${statusClass}"
        >
          ${statusText}
        </span>


        ${
          item.warning
            ? `
              <div>
                <span class="warning-tag">
                  ⚠️ ${escapeHTML(item.warning)}
                </span>
              </div>
            `
            : ""
        }

      </div>


      <div class="item-actions">

        <button
          class="edit-btn"
          onclick="openEditModal('${item.id}')"
          title="Edit"
        >
          ✏️
        </button>


        <button
          class="delete-btn"
          onclick="deleteItem('${item.id}')"
          title="Padam"
        >
          🗑️
        </button>

      </div>

    `;


    container.appendChild(div);

  });

}


/* =========================================
   STATUS TEXT
========================================= */

function getStatusText(status) {

  const statuses = {

    "baik":
      "✓ Baik",

    "rosak":
      "⚠ Rosak",

    "hilang":
      "✕ Hilang",

    "stok-rendah":
      "⚠ Stok Rendah"

  };


  return statuses[status] ||
    "✓ Baik";

}


/* =========================================
   EDIT
========================================= */

function openEditModal(id) {

  const item =
    inventory.find(
      x => x.id === id
    );


  if (!item) return;


  document
    .getElementById("editId")
    .value = item.id;


  document
    .getElementById("editName")
    .value = item.name;


  document
    .getElementById("editFormula")
    .value = item.formula || "";


  document
    .getElementById("editCategory")
    .value = item.category || "";


  document
    .getElementById("editQuantity")
    .value = item.quantity;


  document
    .getElementById("editUnit")
    .value = item.unit;


  document
    .getElementById("editLocation")
    .value = item.location;


  document
    .getElementById("editStatus")
    .value = item.status;


  document
    .getElementById("editWarning")
    .value = item.warning || "";


  document
    .getElementById("editModal")
    .classList.remove("hidden");

}


function closeEditModal() {

  document
    .getElementById("editModal")
    .classList.add("hidden");

}


/* =========================================
   SAVE EDIT
========================================= */

function saveEdit(event) {

  event.preventDefault();


  const id =
    document
      .getElementById("editId")
      .value;


  const item =
    inventory.find(
      x => x.id === id
    );


  if (!item) return;


  item.name =
    document
      .getElementById("editName")
      .value
      .trim();


  item.formula =
    document
      .getElementById("editFormula")
      .value
      .trim();


  item.category =
    document
      .getElementById("editCategory")
      .value
      .trim();


  item.quantity =
    Number(
      document
        .getElementById("editQuantity")
        .value
    ) || 0;


  item.unit =
    document
      .getElementById("editUnit")
      .value
      .trim();


  item.location =
    document
      .getElementById("editLocation")
      .value
      .trim();


  item.status =
    document
      .getElementById("editStatus")
      .value;


  item.warning =
    document
      .getElementById("editWarning")
      .value
      .trim();


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicalOptions();

  renderEquipmentOptions();

  renderChemicalCatalog();


  closeEditModal();


  alert(
    "Maklumat inventori telah dikemaskini."
  );

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


  const answer =
    confirm(
      `Padam "${item.name}" daripada inventori?`
    );


  if (!answer) return;


  inventory =
    inventory.filter(
      x => x.id !== id
    );


  saveInventory();

  updateDashboard();

  renderInventory();

  renderChemicalOptions();

  renderEquipmentOptions();

  renderChemicalCatalog();

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
    .forEach(btn => {

      btn.classList.remove("active");

    });


  if (button) {

    button.classList.add("active");

  }


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
            ? `
              <br>
              ⚠️ ${item.warning}
            `
            : ""
        }

      </p>


      <button
        class="add-btn"
        ${exists ? "disabled" : ""}
        onclick="addChemical('${item.id}')"
      >

        ${
          exists
            ? "✓ Dalam Inventori"
            : "+ Tambah ke Inventori"
        }

      </button>

    `;


    container.appendChild(div);

  });


  /* Custom chemical */

  const customChemicals =
    inventory.filter(
      item =>
        item.type === "chemical" &&
        !item.catalogId
    );


  customChemicals.forEach(item => {

    const div =
      document.createElement("div");


    div.className =
      "catalog-item";


    div.innerHTML = `

      <strong>
        🧪 ${escapeHTML(item.name)}
      </strong>

      <p>

        Formula:
        ${escapeHTML(item.formula || "-")}

        <br>

        Kategori:
        ${escapeHTML(item.category)}

        <br>

        🔢 ${item.quantity}
        ${escapeHTML(item.unit)}

      </p>


      <button
        class="add-btn"
        onclick="openEditModal('${item.id}')"
      >
        ✏️ Edit
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
        x.status !== "baik" ||
        Boolean(x.warning)
    ).length;


  const equipmentCount =
    document.getElementById(
      "equipmentCount"
    );


  const chemicalCount =
    document.getElementById(
      "chemicalCount"
    );


  const warningCount =
    document.getElementById(
      "warningCount"
    );


  if (equipmentCount) {

    equipmentCount.textContent =
      equipment;

  }


  if (chemicalCount) {

    chemicalCount.textContent =
      chemicals;

  }


  if (warningCount) {

    warningCount.textContent =
      warnings;

  }

}


/* =========================================
   INSTALL
========================================= */

function showInstallInfo() {

  alert(
    "Gunakan menu browser 'Add to Home screen' atau 'Install app' untuk memasang LABSAINS pada telefon."
  );

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================
   START APP
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    saveInventory();

    updateDashboard();

    renderInventory();

    renderChemicalOptions();

    renderEquipmentOptions();

    renderChemicalCatalog();

  }
);
