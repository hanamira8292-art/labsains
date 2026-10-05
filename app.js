/* =====================================================
   LABSAINS PRO
   Sistem Pengurusan Makmal
===================================================== */


/* =====================================================
   KATALOG BAHAN KIMIA
===================================================== */

const chemicalCatalog = [

  {
    name: "Asid Hidroklorik",
    formula: "HCl",
    category: "Asid",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Natrium Hidroksida",
    formula: "NaOH",
    category: "Alkali",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Asid Sulfurik",
    formula: "H₂SO₄",
    category: "Asid",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Asid Asetik",
    formula: "CH₃COOH",
    category: "Asid Lemah",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Etanol",
    formula: "C₂H₅OH",
    category: "Pelarut",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Kuprum(II) Sulfat",
    formula: "CuSO₄",
    category: "Garam",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Natrium Klorida",
    formula: "NaCl",
    category: "Garam",
    icon: "🧂",
    status: "Selamat"
  },

  {
    name: "Larutan Iodin",
    formula: "I₂",
    category: "Reagen",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Fenolftalein",
    formula: "C₂₀H₁₄O₄",
    category: "Penunjuk",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Bromotimol Biru",
    formula: "BTB",
    category: "Penunjuk",
    icon: "🧪",
    status: "Selamat"
  },

  {
    name: "Hidrogen Peroksida",
    formula: "H₂O₂",
    category: "Reagen",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Natrium Bikarbonat",
    formula: "NaHCO₃",
    category: "Garam",
    icon: "🧪",
    status: "Selamat"
  },

  {
    name: "Kalium Hidroksida",
    formula: "KOH",
    category: "Alkali",
    icon: "🧪",
    status: "Perhatian"
  },

  {
    name: "Kalsium Karbonat",
    formula: "CaCO₃",
    category: "Garam",
    icon: "🧪",
    status: "Selamat"
  },

  {
    name: "Magnesium Sulfat",
    formula: "MgSO₄",
    category: "Garam",
    icon: "🧪",
    status: "Selamat"
  }

];


/* =====================================================
   KATALOG PERALATAN
===================================================== */

const equipmentCatalog = [

  {
    name: "Mikroskop",
    category: "Optik",
    icon: "🔬"
  },

  {
    name: "Bikar 100 mL",
    category: "Bekas",
    icon: "🥛"
  },

  {
    name: "Bikar 250 mL",
    category: "Bekas",
    icon: "🥛"
  },

  {
    name: "Bikar 500 mL",
    category: "Bekas",
    icon: "🥛"
  },

  {
    name: "Tabung Uji",
    category: "Bekas",
    icon: "🧪"
  },

  {
    name: "Rak Tabung Uji",
    category: "Sokongan",
    icon: "🗄️"
  },

  {
    name: "Silinder Penyukat",
    category: "Pengukuran",
    icon: "🧪"
  },

  {
    name: "Kelalang Kon",
    category: "Bekas",
    icon: "⚗️"
  },

  {
    name: "Kelalang Volumetrik",
    category: "Pengukuran",
    icon: "⚗️"
  },

  {
    name: "Pipet",
    category: "Pemindahan",
    icon: "💧"
  },

  {
    name: "Buret",
    category: "Titrasi",
    icon: "🧪"
  },

  {
    name: "Penunu Bunsen",
    category: "Pemanasan",
    icon: "🔥"
  },

  {
    name: "Kaki Tiga",
    category: "Sokongan",
    icon: "🔺"
  },

  {
    name: "Kasa Dawai",
    category: "Pemanasan",
    icon: "▦"
  },

  {
    name: "Termometer",
    category: "Pengukuran",
    icon: "🌡️"
  },

  {
    name: "Neraca Digital",
    category: "Pengukuran",
    icon: "⚖️"
  },

  {
    name: "Spatula",
    category: "Pengendalian",
    icon: "🥄"
  },

  {
    name: "Penitis",
    category: "Pemindahan",
    icon: "💧"
  },

  {
    name: "Corong",
    category: "Pemindahan",
    icon: "🔻"
  }

];


/* =====================================================
   DATA INVENTORI
===================================================== */

let inventory = loadInventory();


function loadInventory() {

  const saved =
    localStorage.getItem(
      "labsains_pro_inventory"
    );

  if (saved) {

    try {

      return JSON.parse(saved);

    } catch (error) {

      console.log(error);

    }

  }


  return [

    {
      id: createId(),
      type: "equipment",
      name: "Mikroskop",
      formula: "",
      category: "Optik",
      icon: "🔬",
      quantity: 12,
      location: "Kabinet A2",
      status: "Baik",
      expiry: ""
    },

    {
      id: createId(),
      type: "equipment",
      name: "Bikar 100 mL",
      formula: "",
      category: "Bekas",
      icon: "🥛",
      quantity: 35,
      location: "Kabinet B1",
      status: "Baik",
      expiry: ""
    },

    {
      id: createId(),
      type: "equipment",
      name: "Tabung Uji",
      formula: "",
      category: "Bekas",
      icon: "🧪",
      quantity: 52,
      location: "Kabinet B1",
      status: "Rosak",
      expiry: ""
    },

    {
      id: createId(),
      type: "equipment",
      name: "Penunu Bunsen",
      formula: "",
      category: "Pemanasan",
      icon: "🔥",
      quantity: 8,
      location: "Kabinet C2",
      status: "Baik",
      expiry: ""
    },

    {
      id: createId(),
      type: "equipment",
      name: "Pipet",
      formula: "",
      category: "Pemindahan",
      icon: "💧",
      quantity: 24,
      location: "Kabinet C1",
      status: "Baik",
      expiry: ""
    },

    {
      id: createId(),
      type: "chemical",
      name: "Asid Hidroklorik",
      formula: "HCl",
      category: "Asid",
      icon: "🧪",
      quantity: 2,
      location: "Kabinet Kimia A",
      status: "Perhatian",
      expiry: "2027-12-01"
    },

    {
      id: createId(),
      type: "chemical",
      name: "Natrium Hidroksida",
      formula: "NaOH",
      category: "Alkali",
      icon: "🧪",
      quantity: 1,
      location: "Kabinet Kimia B",
      status: "Selamat",
      expiry: "2028-06-01"
    },

    {
      id: createId(),
      type: "chemical",
      name: "Etanol",
      formula: "C₂H₅OH",
      category: "Pelarut",
      icon: "🧪",
      quantity: 1,
      location: "Kabinet C",
      status: "Selamat",
      expiry: "2027-08-01"
    }

  ];

}


/* =====================================================
   STORAGE
===================================================== */

function saveInventory() {

  localStorage.setItem(
    "labsains_pro_inventory",
    JSON.stringify(inventory)
  );

}


/* =====================================================
   ID
===================================================== */

function createId() {

  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, 8)
  );

}


/* =====================================================
   NAVIGATION
===================================================== */

function openPage(
  pageId,
  button = null
) {

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


  document
    .querySelectorAll(".nav-btn")
    .forEach(btn => {

      btn.classList.remove("active");

    });


  if (button) {

    button.classList.add("active");

  }


  if (pageId === "homePage") {

    document
      .querySelector(".nav-btn")
      ?.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  renderAll();

}


/* =====================================================
   RENDER SEMUA
===================================================== */

function renderAll() {

  updateDashboard();

  renderEquipment();

  renderChemicals();

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

  const equipment =
    inventory.filter(
      item =>
        item.type === "equipment"
    ).length;


  const chemicals =
    inventory.filter(
      item =>
        item.type === "chemical"
    ).length;


  const warnings =
    inventory.filter(
      item =>
        (
          item.status === "Perhatian" ||
          item.status === "Rosak" ||
          item.status === "Hilang"
        )
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

}


/* =====================================================
   CHEMICAL MODAL
===================================================== */

function openChemicalModal() {

  closeAddMenu();

  document
    .getElementById("chemicalModal")
    .classList.remove("hidden");

  hideChemicalForm();

  renderChemicalOptions();

}


function closeChemicalModal() {

  document
    .getElementById("chemicalModal")
    .classList.add("hidden");

}


function showChemicalForm() {

  document
    .getElementById("chemicalForm")
    .classList.remove("hidden");

}


function hideChemicalForm() {

  document
    .getElementById("chemicalForm")
    .classList.add("hidden");

}


function renderChemicalOptions() {

  const container =
    document.getElementById(
      "chemicalOptions"
    );


  if (!container) return;


  container.innerHTML = "";


  chemicalCatalog.forEach(
    (item, index) => {

      const exists =
        inventory.some(
          x =>
            x.type === "chemical" &&
            x.catalogName === item.name
        );


      const div =
        document.createElement("div");


      div.className =
        "catalog-item";


      div.innerHTML = `

        <strong>
          ${item.icon} ${item.name}
        </strong>

        <small>
          ${item.formula}
          •
          ${item.category}
        </small>

        <button
          class="catalog-add"
          ${exists ? "disabled" : ""}
          onclick="addCatalogChemical(${index})"
        >
          ${
            exists
              ? "✓ Sudah Ada"
              : "+ Tambah"
          }
        </button>

      `;


      container.appendChild(div);

    }
  );

}


/* =====================================================
   ADD CATALOG CHEMICAL
===================================================== */

function addCatalogChemical(index) {

  const item =
    chemicalCatalog[index];


  if (!item) return;


  const exists =
    inventory.some(
      x =>
        x.type === "chemical" &&
        x.catalogName === item.name
    );


  if (exists) {

    alert(
      "Bahan ini sudah ada dalam inventori."
    );

    return;

  }


  inventory.push({

    id: createId(),

    type: "chemical",

    catalogName:
      item.name,

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

    location:
      "Belum ditetapkan",

    status:
      item.status,

    expiry:
      ""

  });


  saveInventory();

  renderAll();

  renderChemicalOptions();

  alert(
    item.name +
    " telah ditambah ke inventori."
  );

}


/* =====================================================
   CUSTOM CHEMICAL
===================================================== */

function saveCustomChemical() {

  const name =
    document
      .getElementById(
        "customChemicalName"
      )
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
      .getElementById(
        "customChemicalFormula"
      )
      .value
      .trim();


  const category =
    document
      .getElementById(
        "customChemicalCategory"
      )
      .value
      .trim() ||
    "Lain-lain";


  const quantity =
    Number(
      document
        .getElementById(
          "customChemicalQuantity"
        )
        .value
    ) || 0;


  const location =
    document
      .getElementById(
        "customChemicalLocation"
      )
      .value
      .trim() ||
    "Belum ditetapkan";


  const status =
    document
      .getElementById(
        "customChemicalStatus"
      )
      .value;


  inventory.push({

    id: createId(),

    type: "chemical",

    catalogName:
      name,

    name:
      name,

    formula:
      formula,

    category:
      category,

    icon:
      "🧪",

    quantity:
      quantity,

    location:
      location,

    status:
      status,

    expiry:
      ""

  });


  saveInventory();

  clearChemicalForm();

  hideChemicalForm();

  renderAll();

  alert(
    "Bahan kimia berjaya ditambah."
  );

}


function clearChemicalForm() {

  document.getElementById(
    "customChemicalName"
  ).value = "";

  document.getElementById(
    "customChemicalFormula"
  ).value = "";

  document.getElementById(
    "customChemicalCategory"
  ).value = "";

  document.getElementById(
    "customChemicalQuantity"
  ).value = "";

  document.getElementById(
    "customChemicalLocation"
  ).value = "";

}


/* =====================================================
   EQUIPMENT MODAL
===================================================== */

function openEquipmentModal() {

  closeAddMenu();

  document
    .getElementById("equipmentModal")
    .classList.remove("hidden");

  hideEquipmentForm();

  renderEquipmentOptions();

}


function closeEquipmentModal() {

  document
    .getElementById("equipmentModal")
    .classList.add("hidden");

}


function showEquipmentForm() {

  document
    .getElementById("equipmentForm")
    .classList.remove("hidden");

}


function hideEquipmentForm() {

  document
    .getElementById("equipmentForm")
    .classList.add("hidden");

}


/* =====================================================
   EQUIPMENT OPTIONS
===================================================== */

function renderEquipmentOptions() {

  const container =
    document.getElementById(
      "equipmentOptions"
    );


  if (!container) return;


  container.innerHTML = "";


  equipmentCatalog.forEach(
    (item, index) => {

      const exists =
        inventory.some(
          x =>
            x.type === "equipment" &&
            x.catalogName === item.name
        );


      const div =
        document.createElement("div");


      div.className =
        "catalog-item";


      div.innerHTML = `

        <strong>
          ${item.icon} ${item.name}
        </strong>

        <small>
          ${item.category}
        </small>

        <button
          class="catalog-add"
          ${exists ? "disabled" : ""}
          onclick="addCatalogEquipment(${index})"
        >
          ${
            exists
              ? "✓ Sudah Ada"
              : "+ Tambah"
          }
        </button>

      `;


      container.appendChild(div);

    }
  );

}


/* =====================================================
   ADD CATALOG EQUIPMENT
===================================================== */

function addCatalogEquipment(index) {

  const item =
    equipmentCatalog[index];


  if (!item) return;


  const exists =
    inventory.some(
      x =>
        x.type === "equipment" &&
        x.catalogName === item.name
    );


  if (exists) {

    alert(
      "Peralatan ini sudah ada dalam inventori."
    );

    return;

  }


  inventory.push({

    id: createId(),

    type:
      "equipment",

    catalogName:
      item.name,

    name:
      item.name,

    formula:
      "",

    category:
      item.category,

    icon:
      item.icon,

    quantity:
      1,

    location:
      "Belum ditetapkan",

    status:
      "Baik",

    expiry:
      ""

  });


  saveInventory();

  renderAll();

  renderEquipmentOptions();

  alert(
    item.name +
    " telah ditambah ke inventori."
  );

}


/* =====================================================
   CUSTOM EQUIPMENT
===================================================== */

function saveCustomEquipment() {

  const name =
    document
      .getElementById(
        "customEquipmentName"
      )
      .value
      .trim();


  if (!name) {

    alert(
      "Sila masukkan nama alat / radas."
    );

    return;

  }


  const category =
    document
      .getElementById(
        "customEquipmentCategory"
      )
      .value
      .trim() ||
    "Lain-lain";


  const quantity =
    Number(
      document
        .getElementById(
          "customEquipmentQuantity"
        )
        .value
    ) || 0;


  const location =
    document
      .getElementById(
        "customEquipmentLocation"
      )
      .value
      .trim() ||
    "Belum ditetapkan";


  const status =
    document
      .getElementById(
        "customEquipmentStatus"
      )
      .value;


  inventory.push({

    id:
      createId(),

    type:
      "equipment",

    catalogName:
      name,

    name:
      name,

    formula:
      "",

    category:
      category,

    icon:
      "🔬",

    quantity:
      quantity,

    location:
      location,

    status:
      status,

    expiry:
      ""

  });


  saveInventory();

  clearEquipmentForm();

  hideEquipmentForm();

  renderAll();

  alert(
    "Peralatan berjaya ditambah."
  );

}


function clearEquipmentForm() {

  document.getElementById(
    "customEquipmentName"
  ).value = "";

  document.getElementById(
    "customEquipmentCategory"
  ).value = "";

  document.getElementById(
    "customEquipmentQuantity"
  ).value = "";

  document.getElementById(
    "customEquipmentLocation"
  ).value = "";

}


/* =====================================================
   EQUIPMENT DISPLAY
===================================================== */

let equipmentFilter = "all";


function renderEquipment() {

  const container =
    document.getElementById(
      "equipmentList"
    );


  if (!container) return;


  const search =
    (
      document.getElementById(
        "equipmentSearch"
      )?.value || ""
    )
      .toLowerCase();


  const filtered =
    inventory.filter(item => {

      if (
        item.type !==
        "equipment"
      ) {

        return false;

      }


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
        equipmentFilter === "all" ||
        item.status ===
        equipmentFilter;


      return (
        searchMatch &&
        filterMatch
      );

    });


  if (
    filtered.length === 0
  ) {

    container.innerHTML = `

      <div class="empty">

        🔬

        <br><br>

        Tiada peralatan ditemui.

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const div =
      document.createElement(
        "div"
      );


    div.className =
      "record";


    div.innerHTML = `

      <div class="record-icon">
        ${item.icon}
      </div>

      <div class="record-info">

        <strong>
          ${escapeHtml(item.name)}
        </strong>

        <small>
          ${escapeHtml(item.category)}
          •
          ${item.quantity} unit
        </small>

        <small>
          📍 ${escapeHtml(item.location)}
        </small>

        <span class="${statusClass(item.status)}">
          ${item.status}
        </span>

      </div>

      <div class="record-actions">

        <button
          class="edit-btn"
          onclick="editItem('${item.id}')"
        >
          ✏️
        </button>

        <button
          class="delete-btn"
          onclick="deleteItem('${item.id}')"
        >
          🗑️
        </button>

      </div>

    `;


    container.appendChild(div);

  });

}


/* =====================================================
   CHEMICAL DISPLAY
===================================================== */

let chemicalFilter = "all";


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
      .toLowerCase();


  const filtered =
    inventory.filter(item => {

      if (
        item.type !==
        "chemical"
      ) {

        return false;

      }


      const text =
        (
          item.name +
          " " +
          item.formula +
          " " +
          item.category +
          " " +
          item.location
        )
          .toLowerCase();


      const searchMatch =
        text.includes(search);


      let filterMatch =
        true;


      if (
        chemicalFilter ===
        "Selamat"
      ) {

        filterMatch =
          item.status ===
          "Selamat";

      }


      if (
        chemicalFilter ===
        "Perhatian"
      ) {

        filterMatch =
          item.status ===
          "Perhatian";

      }


      if (
        chemicalFilter ===
        "Hampir Luput"
      ) {

        filterMatch =
          isExpiringSoon(
            item.expiry
          );

      }


      return (
        searchMatch &&
        filterMatch
      );

    });


  if (
    filtered.length === 0
  ) {

    container.innerHTML = `

      <div class="empty">

        🧪

        <br><br>

        Tiada bahan kimia ditemui.

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  filtered.forEach(item => {

    const div =
      document.createElement(
        "div"
      );


    div.className =
      "record";


    const expiryText =
      item.expiry
        ? " • Luput: " +
          item.expiry
        : "";


    div.innerHTML = `

      <div class="record-icon">
        ${item.icon}
      </div>

      <div class="record-info">

        <strong>
          ${escapeHtml(item.name)}
        </strong>

        <small>
          ${escapeHtml(item.formula || "-")}
          •
          ${escapeHtml(item.category)}
        </small>

        <small>
          ${item.quantity} unit
          •
          📍 ${escapeHtml(item.location)}
        </small>

        <small>
          ${expiryText}
        </small>

        <span class="${statusClass(item.status)}">
          ${item.status}
        </span>

      </div>

      <div class="record-actions">

        <button
          class="edit-btn"
          onclick="editItem('${item.id}')"
        >
          ✏️
        </button>

        <button
          class="delete-btn"
          onclick="deleteItem('${item.id}')"
        >
          🗑️
        </button>

      </div>

    `;


    container.appendChild(div);

  });

}


/* =====================================================
   FILTER
===================================================== */

function setEquipmentFilter(
  value,
  button
) {

  equipmentFilter =
    value;


  document
    .querySelectorAll(
      "#equipmentPage .filter"
    )
    .forEach(
      btn =>
        btn.classList.remove(
          "active"
        )
    );


  button.classList.add(
    "active"
  );


  renderEquipment();

}


function setChemicalFilter(
  value,
  button
) {

  chemicalFilter =
    value;


  document
    .querySelectorAll(
      "#chemicalPage .filter"
    )
    .forEach(
      btn =>
        btn.classList.remove(
          "active"
        )
    );


  button.classList.add(
    "active"
  );


  renderChemicals();

}


/* =====================================================
   EDIT
===================================================== */

let editingId = null;


function editItem(id) {

  const item =
    inventory.find(
      x => x.id === id
    );


  if (!item) return;


  editingId =
    id;


  document.getElementById(
    "editName"
  ).value =
    item.name || "";


  document.getElementById(
    "editFormula"
  ).value =
    item.formula || "";


  document.getElementById(
    "editCategory"
  ).value =
    item.category || "";


  document.getElementById(
    "editQuantity"
  ).value =
    item.quantity || 0;


  document.getElementById(
    "editLocation"
  ).value =
    item.location || "";


  document.getElementById(
    "editStatus"
  ).value =
    item.status || "Baik";


  document.getElementById(
    "editExpiry"
  ).value =
    item.expiry || "";


  document
    .getElementById(
      "editModal"
    )
    .classList.remove(
      "hidden"
    );

}


function closeEditModal() {

  editingId =
    null;

  document
    .getElementById(
      "editModal"
    )
    .classList.add(
      "hidden"
    );

}


function saveEdit() {

  if (!editingId) return;


  const item =
    inventory.find(
      x =>
        x.id ===
        editingId
    );


  if (!item) return;


  const name =
    document
      .getElementById(
        "editName"
      )
      .value
      .trim();


  if (!name) {

    alert(
      "Nama tidak boleh kosong."
    );

    return;

  }


  item.name =
    name;


  item.formula =
    document
      .getElementById(
        "editFormula"
      )
      .value
      .trim();


  item.category =
    document
      .getElementById(
        "editCategory"
      )
      .value
      .trim() ||
    "Lain-lain";


  item.quantity =
    Number(
      document
        .getElementById(
          "editQuantity"
        )
        .value
    ) || 0;


  item.location =
    document
      .getElementById(
        "editLocation"
      )
      .value
      .trim() ||
    "Belum ditetapkan";


  item.status =
    document
      .getElementById(
        "editStatus"
      )
      .value;


  item.expiry =
    document
      .getElementById(
        "editExpiry"
      )
      .value;


  saveInventory();

  closeEditModal();

  renderAll();

  alert(
    "Rekod berjaya dikemaskini."
  );

}


/* =====================================================
   DELETE
===================================================== */

function deleteItem(id) {

  const item =
    inventory.find(
      x => x.id === id
    );


  if (!item) return;


  const answer =
    confirm(
      "Padam \"" +
      item.name +
      "\" daripada inventori?"
    );


  if (!answer) return;


  inventory =
    inventory.filter(
      x => x.id !== id
    );


  saveInventory();

  renderAll();

}


/* =====================================================
   ADD MENU
===================================================== */

function openAddMenu() {

  document
    .getElementById(
      "addMenu"
    )
    .classList.remove(
      "hidden"
    );

}


function closeAddMenu() {

  document
    .getElementById(
      "addMenu"
    )
    .classList.add(
      "hidden"
    );

}


/* =====================================================
   STATUS
===================================================== */

function statusClass(
  status
) {

  if (
    status === "Baik" ||
    status === "Selamat"
  ) {

    return "status success";

  }


  if (
    status === "Rosak" ||
    status === "Perhatian"
  ) {

    return "status warning";

  }


  if (
    status === "Hilang"
  ) {

    return "status danger";

  }


  return "status neutral";

}


/* =====================================================
   EXPIRY
===================================================== */

function isExpiringSoon(
  dateString
) {

  if (!dateString) {

    return false;

  }


  const expiry =
    new Date(dateString);


  const now =
    new Date();


  const difference =
    expiry - now;


  const days =
    difference /
    (
      1000 *
      60 *
      60 *
      24
    );


  return (
    days >= 0 &&
    days <= 90
  );

}


/* =====================================================
   SECURITY / HTML
===================================================== */

function escapeHtml(
  text
) {

  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(
  message =
    "LABSAINS PRO sedang berjalan."
) {

  alert(message);

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAll();

  }
);
