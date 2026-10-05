/* =====================================================
   LABSAINS PRO
   Sistem Pengurusan Makmal & Rekod Eksperimen
===================================================== */


/* =====================================================
   KATALOG BAHAN KIMIA
===================================================== */

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
    category: "Asid Lemah",
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
    warning: "Rujuk SDS"
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
    id: "h2o2",
    name: "Hidrogen Peroksida",
    formula: "H₂O₂",
    category: "Reagen",
    icon: "🧪",
    warning: "Pengoksida"
  },

  {
    id: "nahco3",
    name: "Natrium Bikarbonat",
    formula: "NaHCO₃",
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
  },

  {
    id: "copper",
    name: "Kuprum",
    formula: "Cu",
    category: "Unsur",
    icon: "🧪",
    warning: ""
  }

];


/* =====================================================
   KATALOG RADAS
===================================================== */

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
    category: "Pengendalian Bahan",
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
    id: "watchglass",
    name: "Kaca Jam",
    category: "Bekas",
    icon: "⭕"
  },

  {
    id: "glass_rod",
    name: "Rod Kaca",
    category: "Pengadunan",
    icon: "📏"
  },

  {
    id: "forceps",
    name: "Forsep",
    category: "Pengendalian",
    icon: "✂️"
  }

];


/* =====================================================
   INVENTORI
===================================================== */

let inventory = loadData(
  "labsains_inventory",
  []
);


/* =====================================================
   EKSPERIMEN
===================================================== */

let experiments = loadData(
  "labsains_experiments",
  []
);


/* =====================================================
   FILTER
===================================================== */

let inventoryFilter = "all";

let experimentFilter = "all";


/* =====================================================
   HELPER STORAGE
===================================================== */

function loadData(key, fallback) {

  try {

    const data =
      localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : fallback;

  } catch (error) {

    console.error(error);

    return fallback;

  }

}


function saveData(key, data) {

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );

}


/* =====================================================
   NAVIGATION
===================================================== */

function openPage(pageId) {

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
    .querySelectorAll(".bottom-nav button")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.dataset.page === pageId
      ) {

        button.classList.add("active");

      }

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  renderAll();

}


/* =====================================================
   MODAL
===================================================== */

function closeAllModals() {

  document
    .querySelectorAll(".modal-overlay")
    .forEach(modal => {

      modal.classList.add("hidden");

    });

}


function openAddMenu() {

  closeAllModals();

  document
    .getElementById("addMenu")
    .classList.remove("hidden");

}


function openInventoryMenu() {

  closeAllModals();

  document
    .getElementById("inventoryMenu")
    .classList.remove("hidden");

}


/* =====================================================
   EXPERIMENT MODAL
===================================================== */

function openExperimentModal(id = null) {

  closeAllModals();


  const modal =
    document.getElementById(
      "experimentModal"
    );

  modal.classList.remove("hidden");


  document.getElementById(
    "experimentForm"
  ).reset();


  document.getElementById(
    "experimentId"
  ).value = "";


  document.getElementById(
    "experimentModalTitle"
  ).textContent =
    "Rekod Eksperimen";


  const today =
    new Date()
      .toISOString()
      .split("T")[0];


  document.getElementById(
    "experimentDate"
  ).value = today;


  if (id) {

    const item =
      experiments.find(
        x => x.id === id
      );


    if (!item) return;


    document.getElementById(
      "experimentModalTitle"
    ).textContent =
      "Edit Eksperimen";


    document.getElementById(
      "experimentId"
    ).value =
      item.id;


    document.getElementById(
      "experimentName"
    ).value =
      item.name || "";


    document.getElementById(
      "experimentDate"
    ).value =
      item.date || today;


    document.getElementById(
      "experimentStatus"
    ).value =
      item.status || "Belum bermula";


    document.getElementById(
      "experimentLevel"
    ).value =
      item.level || "Tingkatan 4";


    document.getElementById(
      "experimentSubject"
    ).value =
      item.subject || "Sains";


    document.getElementById(
      "experimentGroup"
    ).value =
      item.group || "";


    document.getElementById(
      "experimentObjective"
    ).value =
      item.objective || "";


    document.getElementById(
      "experimentHypothesis"
    ).value =
      item.hypothesis || "";


    document.getElementById(
      "experimentMaterials"
    ).value =
      item.materials || "";


    document.getElementById(
      "experimentEquipment"
    ).value =
      item.equipment || "";


    document.getElementById(
      "experimentProcedure"
    ).value =
      item.procedure || "";


    document.getElementById(
      "experimentObservation"
    ).value =
      item.observation || "";


    document.getElementById(
      "experimentResult"
    ).value =
      item.result || "";


    document.getElementById(
      "experimentConclusion"
    ).value =
      item.conclusion || "";

  }

}


/* =====================================================
   SAVE EXPERIMENT
===================================================== */

function saveExperiment(event) {

  event.preventDefault();


  const id =
    document.getElementById(
      "experimentId"
    ).value;


  const record = {

    id:
      id ||
      "exp_" + Date.now(),

    name:
      document.getElementById(
        "experimentName"
      ).value.trim(),

    date:
      document.getElementById(
        "experimentDate"
      ).value,

    status:
      document.getElementById(
        "experimentStatus"
      ).value,

    level:
      document.getElementById(
        "experimentLevel"
      ).value,

    subject:
      document.getElementById(
        "experimentSubject"
      ).value,

    group:
      document.getElementById(
        "experimentGroup"
      ).value.trim(),

    objective:
      document.getElementById(
        "experimentObjective"
      ).value.trim(),

    hypothesis:
      document.getElementById(
        "experimentHypothesis"
      ).value.trim(),

    materials:
      document.getElementById(
        "experimentMaterials"
      ).value.trim(),

    equipment:
      document.getElementById(
        "experimentEquipment"
      ).value.trim(),

    procedure:
      document.getElementById(
        "experimentProcedure"
      ).value.trim(),

    observation:
      document.getElementById(
        "experimentObservation"
      ).value.trim(),

    result:
      document.getElementById(
        "experimentResult"
      ).value.trim(),

    conclusion:
      document.getElementById(
        "experimentConclusion"
      ).value.trim(),

    updatedAt:
      new Date().toISOString()

  };


  if (!record.name) {

    alert(
      "Sila masukkan nama eksperimen."
    );

    return;

  }


  const index =
    experiments.findIndex(
      x => x.id === record.id
    );


  if (index >= 0) {

    experiments[index] =
      record;

  } else {

    experiments.unshift(
      record
    );

  }


  saveData(
    "labsains_experiments",
    experiments
  );


  closeAllModals();

  renderAll();


  alert(
    "Rekod eksperimen berjaya disimpan."
  );

}


/* =====================================================
   EXPERIMENT FILTER
===================================================== */

function setExperimentFilter(
  filter,
  button
) {

  experimentFilter =
    filter;


  document
    .querySelectorAll(
      ".status-filter-btn"
    )
    .forEach(btn => {

      btn.classList.remove(
        "active"
      );

    });


  button.classList.add(
    "active"
  );


  renderExperiments();

}


/* =====================================================
   EXPERIMENT RENDER
===================================================== */

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


  let list =
    experiments.filter(
      item => {

        const text = (

          (item.name || "") +
          " " +
          (item.level || "") +
          " " +
          (item.subject || "") +
          " " +
          (item.group || "")

        ).toLowerCase();


        const matchSearch =
          text.includes(search);


        const matchFilter =
          experimentFilter === "all" ||
          item.status === experimentFilter;


        return (
          matchSearch &&
          matchFilter
        );

      }
    );


  if (
    list.length === 0
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          🧫
        </div>

        <strong>
          Tiada eksperimen
        </strong>

        <p>
          Tekan "+ Rekod" untuk memasukkan
          eksperimen yang telah atau akan dijalankan.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  list.forEach(item => {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "experiment-card";


    let statusClass =
      "status-pending";


    if (
      item.status === "Selesai"
    ) {

      statusClass =
        "status-done";

    }


    if (
      item.status === "Dalam proses"
    ) {

      statusClass =
        "status-process";

    }


    const description =
      item.objective ||
      "Tiada objektif direkodkan.";


    card.innerHTML = `

      <div class="experiment-icon">
        🧪
      </div>

      <div class="experiment-content">

        <span class="status-badge ${statusClass}">
          ${statusIcon(item.status)}
          ${escapeHTML(item.status)}
        </span>

        <h3>
          ${escapeHTML(item.name)}
        </h3>

        <div class="experiment-meta">
          ${escapeHTML(item.level || "")}
          •
          ${escapeHTML(item.subject || "")}
          ${
            item.date
              ? " • " + formatDate(item.date)
              : ""
          }
        </div>

        <div class="experiment-description">
          ${escapeHTML(description)}
        </div>

        ${
          item.group
            ? `
              <div class="experiment-meta">
                👥 ${escapeHTML(item.group)}
              </div>
            `
            : ""
        }

        <div class="card-actions">

          <button
            class="card-action edit-action"
            onclick="openExperimentModal('${item.id}')"
          >
            ✏️ Edit
          </button>

          <button
            class="card-action delete-action"
            onclick="deleteExperiment('${item.id}')"
          >
            🗑️ Padam
          </button>

        </div>

      </div>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   DELETE EXPERIMENT
===================================================== */

function deleteExperiment(id) {

  const item =
    experiments.find(
      x => x.id === id
    );


  if (!item) return;


  const answer =
    confirm(
      `Padam eksperimen "${item.name}"?`
    );


  if (!answer) return;


  experiments =
    experiments.filter(
      x => x.id !== id
    );


  saveData(
    "labsains_experiments",
    experiments
  );


  renderAll();

}


/* =====================================================
   RECENT EXPERIMENT
===================================================== */

function renderRecentExperiments() {

  const container =
    document.getElementById(
      "recentExperiments"
    );


  if (!container) return;


  const list =
    experiments.slice(0, 3);


  if (
    list.length === 0
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          🧫
        </div>

        <strong>
          Belum ada rekod eksperimen
        </strong>

        <p>
          Tekan "Rekod Eksperimen"
          untuk mula.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  list.forEach(item => {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "experiment-card";


    let statusClass =
      "status-pending";


    if (
      item.status === "Selesai"
    ) {

      statusClass =
        "status-done";

    }


    if (
      item.status === "Dalam proses"
    ) {

      statusClass =
        "status-process";

    }


    card.innerHTML = `

      <div class="experiment-icon">
        🧪
      </div>

      <div class="experiment-content">

        <span class="status-badge ${statusClass}">
          ${statusIcon(item.status)}
          ${escapeHTML(item.status)}
        </span>

        <h3>
          ${escapeHTML(item.name)}
        </h3>

        <div class="experiment-meta">
          ${escapeHTML(item.level || "")}
          •
          ${escapeHTML(item.subject || "")}
        </div>

      </div>

    `;


    container.appendChild(card);

  });

}


/* =====================================================
   STATUS ICON
===================================================== */

function statusIcon(status) {

  if (
    status === "Selesai"
  ) return "✓";


  if (
    status === "Dalam proses"
  ) return "•";


  return "";

}


/* =====================================================
   CHEMICAL MODAL
===================================================== */

function openChemicalModal() {

  closeAllModals();


  document
    .getElementById(
      "chemicalModal"
    )
    .classList.remove(
      "hidden"
    );


  renderChemicalOptions();

}


function openCustomChemicalForm() {

  document
    .getElementById(
      "customChemicalForm"
    )
    .classList.toggle(
      "hidden"
    );

}


/* =====================================================
   ADD CHEMICAL
===================================================== */

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
      item.warning || "",

    custom:
      false

  });


  saveData(
    "labsains_inventory",
    inventory
  );


  renderAll();

  renderChemicalOptions();

}


/* =====================================================
   CUSTOM CHEMICAL
===================================================== */

function addCustomChemical() {

  const name =
    document.getElementById(
      "customChemicalName"
    ).value.trim();


  const formula =
    document.getElementById(
      "customChemicalFormula"
    ).value.trim();


  const category =
    document.getElementById(
      "customChemicalCategory"
    ).value.trim() ||
    "Bahan Kimia";


  const warning =
    document.getElementById(
      "customChemicalWarning"
    ).value.trim();


  if (!name) {

    alert(
      "Sila masukkan nama bahan kimia."
    );

    return;

  }


  inventory.push({

    id:
      "custom_chemical_" +
      Date.now(),

    catalogId: null,

    type: "chemical",

    name: name,

    formula: formula,

    category: category,

    icon: "🧪",

    warning: warning,

    custom: true

  });


  saveData(
    "labsains_inventory",
    inventory
  );


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
    "customChemicalWarning"
  ).value = "";


  renderAll();

  renderChemicalOptions();


  alert(
    "Bahan kimia berjaya ditambah."
  );

}


/* =====================================================
   CHEMICAL OPTIONS
===================================================== */

function renderChemicalOptions() {

  const container =
    document.getElementById(
      "chemicalOptions"
    );


  if (!container) return;


  container.innerHTML = "";


  chemicalCatalog.forEach(
    item => {

      const exists =
        inventory.some(
          x =>
            x.type === "chemical" &&
            x.catalogId === item.id
        );


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "catalog-card";


      card.innerHTML = `

        <div class="catalog-top">

          <strong>
            ${item.icon}
            ${escapeHTML(item.name)}
          </strong>

        </div>

        <p>
          Formula:
          ${escapeHTML(item.formula)}
          <br>

          Kategori:
          ${escapeHTML(item.category)}

          ${
            item.warning
              ? `<br>⚠️ ${escapeHTML(item.warning)}`
              : ""
          }

        </p>

        <button
          class="catalog-add"
          ${
            exists
              ? "disabled"
              : ""
          }
          onclick="addChemical('${item.id}')"
        >

          ${
            exists
              ? "✓ Sudah Ditambah"
              : "+ Tambah"
          }

        </button>

      `;


      container.appendChild(
        card
      );

    }
  );

}


/* =====================================================
   CHEMICAL PAGE
===================================================== */

function renderChemicalPage() {

  const container =
    document.getElementById(
      "chemicalCatalog"
    );


  if (!container) return;


  const search =
    (
      document.getElementById(
        "chemicalSearch"
      )?.value || ""
    )
    .toLowerCase();


  const list =
    inventory.filter(
      item =>
        item.type === "chemical" &&
        (
          item.name
            .toLowerCase()
            .includes(search) ||

          item.category
            .toLowerCase()
            .includes(search) ||

          (item.formula || "")
            .toLowerCase()
            .includes(search)
        )
    );


  if (!list.length) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          🧪
        </div>

        <strong>
          Belum ada bahan kimia
        </strong>

        <p>
          Tekan "+ Tambah" untuk memasukkan
          bahan kimia.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML =
    '<div class="catalog-list"></div>';


  const listContainer =
    container.firstElementChild;


  list.forEach(item => {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "catalog-card";


    card.innerHTML = `

      <div class="catalog-top">

        <strong>
          🧪 ${escapeHTML(item.name)}
        </strong>

      </div>

      <p>

        Formula:
        ${escapeHTML(item.formula || "-")}

        <br>

        Kategori:
        ${escapeHTML(item.category || "-")}

        ${
          item.warning
            ? `<br>⚠️ ${escapeHTML(item.warning)}`
            : ""
        }

      </p>

      <button
        class="card-action delete-action"
        onclick="deleteInventory('${item.id}')"
      >
        🗑️ Padam
      </button>

    `;


    listContainer.appendChild(
      card
    );

  });

}


/* =====================================================
   EQUIPMENT MODAL
===================================================== */

function openEquipmentModal() {

  closeAllModals();


  document
    .getElementById(
      "equipmentModal"
    )
    .classList.remove(
      "hidden"
    );


  renderEquipmentOptions();

}


function openCustomEquipmentForm() {

  document
    .getElementById(
      "customEquipmentForm"
    )
    .classList.toggle(
      "hidden"
    );

}


/* =====================================================
   ADD EQUIPMENT
===================================================== */

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

    formula: "",

    category:
      item.category,

    icon:
      item.icon,

    warning: "",

    custom: false

  });


  saveData(
    "labsains_inventory",
    inventory
  );


  renderAll();

  renderEquipmentOptions();

}


/* =====================================================
   CUSTOM EQUIPMENT
===================================================== */

function addCustomEquipment() {

  const name =
    document.getElementById(
      "customEquipmentName"
    ).value.trim();


  const category =
    document.getElementById(
      "customEquipmentCategory"
    ).value.trim() ||
    "Peralatan";


  if (!name) {

    alert(
      "Sila masukkan nama alat / radas."
    );

    return;

  }


  inventory.push({

    id:
      "custom_equipment_" +
      Date.now(),

    catalogId: null,

    type: "equipment",

    name: name,

    formula: "",

    category: category,

    icon: "🔬",

    warning: "",

    custom: true

  });


  saveData(
    "labsains_inventory",
    inventory
  );


  document.getElementById(
    "customEquipmentName"
  ).value = "";


  document.getElementById(
    "customEquipmentCategory"
  ).value = "";


  renderAll();

  renderEquipmentOptions();


  alert(
    "Alat / radas berjaya ditambah."
  );

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
    item => {

      const exists =
        inventory.some(
          x =>
            x.type === "equipment" &&
            x.catalogId === item.id
        );


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "catalog-card";


      card.innerHTML = `

        <div class="catalog-top">

          <strong>
            ${item.icon}
            ${escapeHTML(item.name)}
          </strong>

        </div>

        <p>
          Kategori:
          ${escapeHTML(item.category)}
        </p>

        <button
          class="catalog-add"
          ${
            exists
              ? "disabled"
              : ""
          }
          onclick="addEquipment('${item.id}')"
        >

          ${
            exists
              ? "✓ Sudah Ditambah"
              : "+ Tambah"
          }

        </button>

      `;


      container.appendChild(
        card
      );

    }
  );

}


/* =====================================================
   INVENTORY FILTER
===================================================== */

function setInventoryFilter(
  filter,
  button
) {

  inventoryFilter =
    filter;


  document
    .querySelectorAll(
      "#inventoryPage .status-filter-btn"
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


  renderInventory();

}


/* =====================================================
   INVENTORY RENDER
===================================================== */

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


  const list =
    inventory.filter(
      item => {

        const text = (

          item.name +
          " " +
          item.category +
          " " +
          (item.formula || "")

        ).toLowerCase();


        return (

          text.includes(search) &&

          (
            inventoryFilter === "all" ||
            item.type === inventoryFilter
          )

        );

      }
    );


  if (!list.length) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          📦
        </div>

        <strong>
          Inventori kosong
        </strong>

        <p>
          Tekan "+ Tambah" untuk menambah
          bahan atau peralatan.
        </p>

      </div>

    `;

    return;

  }


  container.innerHTML = "";


  list.forEach(item => {

    const card =
      document.createElement(
        "div"
      );


    card.className =
      "inventory-card";


    card.innerHTML = `

      <div class="inventory-icon">
        ${item.icon || "📦"}
      </div>

      <div class="inventory-info">

        <strong>
          ${escapeHTML(item.name)}
        </strong>

        <small>

          ${escapeHTML(item.category || "")}

          ${
            item.formula
              ? " • " +
                escapeHTML(item.formula)
              : ""
          }

        </small>

        ${
          item.warning
            ? `
              <div class="warning-text">
                ⚠️ ${escapeHTML(item.warning)}
              </div>
            `
            : ""
        }

      </div>


      <div class="inventory-actions">

        <button
          class="small-action small-delete"
          onclick="deleteInventory('${item.id}')"
        >
          🗑️
        </button>

      </div>

    `;


    container.appendChild(
      card
    );

  });

}


/* =====================================================
   DELETE INVENTORY
===================================================== */

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


  saveData(
    "labsains_inventory",
    inventory
  );


  renderAll();

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

  const equipment =
    inventory.filter(
      x =>
        x.type === "equipment"
    ).length;


  const chemicals =
    inventory.filter(
      x =>
        x.type === "chemical"
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
    "experimentCount"
  ).textContent =
    experiments.length;


  document.getElementById(
    "warningCount"
  ).textContent =
    warnings;

}


/* =====================================================
   DATE
===================================================== */

function formatDate(date) {

  if (!date) return "";


  try {

    return new Date(
      date + "T00:00:00"
    ).toLocaleDateString(
      "ms-MY",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }
    );

  } catch {

    return date;

  }

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification() {

  alert(
    "🔔 LABSAINS Pro\n\nTiada notifikasi baharu."
  );

}


/* =====================================================
   RENDER ALL
===================================================== */

function renderAll() {

  updateDashboard();

  renderExperiments();

  renderRecentExperiments();

  renderInventory();

  renderChemicalPage();

  renderChemicalOptions();

  renderEquipmentOptions();

}


/* =====================================================
   START APP
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAll();


    const homeButton =
      document.querySelector(
        '.bottom-nav button[data-page="homePage"]'
      );


    if (homeButton) {

      homeButton.classList.add(
        "active"
      );

    }

  }
);
