/* =====================================================
   LABSAINS 2.0
   APPLICATION
===================================================== */


/* =====================================================
   DATA
===================================================== */

let equipment = JSON.parse(
  localStorage.getItem("labsains_equipment")
) || [

  {
    id: 1,
    name: "Mikroskop",
    quantity: 3,
    status: "Baik",
    location: "Makmal A"
  },

  {
    id: 2,
    name: "Bikar",
    quantity: 10,
    status: "Baik",
    location: "Kabinet A"
  },

  {
    id: 3,
    name: "Termometer",
    quantity: 2,
    status: "Perlu pemeriksaan",
    location: "Makmal A"
  }

];


let chemicals = JSON.parse(
  localStorage.getItem("labsains_chemicals")
) || [

  {
    id: 1,
    name: "Natrium Klorida",
    formula: "NaCl",
    quantity: "500 g",
    expiry: "2027-12-31",
    hazard: "Rendah",
    location: "Kabinet Kimia A"
  },

  {
    id: 2,
    name: "Asid Hidroklorik",
    formula: "HCl",
    quantity: "250 ml",
    expiry: "2027-06-30",
    hazard: "Tinggi",
    location: "Kabinet Asid"
  }

];


let experiments = JSON.parse(
  localStorage.getItem("labsains_experiments")
) || [

  {
    id: 1,
    name: "Pemerhatian Sel Tumbuhan",
    objective: "Memerhati struktur sel tumbuhan menggunakan mikroskop.",
    materials: "Daun, slaid kaca, air dan mikroskop.",
    steps: "Sediakan slaid, letakkan sampel dan perhatikan melalui mikroskop.",
    safety: "Kendalikan slaid dan mikroskop dengan berhati-hati."
  },

  {
    id: 2,
    name: "Ujian Kanji",
    objective: "Menguji kehadiran kanji dalam makanan.",
    materials: "Sampel makanan dan larutan iodin.",
    steps: "Letakkan sampel dan titiskan larutan iodin.",
    safety: "Elakkan sentuhan terus dengan bahan kimia."
  },

  {
    id: 3,
    name: "Ketumpatan Cecair",
    objective: "Membandingkan ketumpatan beberapa cecair.",
    materials: "Silinder penyukat dan beberapa cecair.",
    steps: "Ukur isipadu dan jisim setiap sampel.",
    safety: "Bersihkan tumpahan dengan segera."
  }

];


/* =====================================================
   SAVE DATA
===================================================== */

function saveData() {

  localStorage.setItem(
    "labsains_equipment",
    JSON.stringify(equipment)
  );

  localStorage.setItem(
    "labsains_chemicals",
    JSON.stringify(chemicals)
  );

  localStorage.setItem(
    "labsains_experiments",
    JSON.stringify(experiments)
  );

}


/* =====================================================
   NAVIGATION
===================================================== */

function showSection(section) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });


  const target =
    document.getElementById(section);


  if (target) {

    target.classList.add("active");

  }


  document
    .querySelectorAll(".bottom-nav button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.section === section
      );

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (section === "home") {

    renderHome();

  }


  if (section === "inventory") {

    renderEquipment();

  }


  if (section === "chemicals") {

    renderChemicals();

  }


  if (section === "experiments") {

    renderExperiments();

  }


  if (section === "alerts") {

    renderAlerts();

  }

}


/* =====================================================
   HOME
===================================================== */

function renderHome() {

  document.getElementById(
    "equipmentCount"
  ).textContent = equipment.length;


  document.getElementById(
    "chemicalCount"
  ).textContent = chemicals.length;


  document.getElementById(
    "experimentCount"
  ).textContent = experiments.length;


  document.getElementById(
    "alertCount"
  ).textContent = getAlerts().length;


  const summary =
    document.getElementById("homeSummary");


  summary.innerHTML = `

    <div class="summary-row">
      <span>🔬 Jumlah peralatan</span>
      <strong>${equipment.length}</strong>
    </div>

    <div class="summary-row">
      <span>⚗️ Bahan kimia</span>
      <strong>${chemicals.length}</strong>
    </div>

    <div class="summary-row">
      <span>🧪 Eksperimen</span>
      <strong>${experiments.length}</strong>
    </div>

    <div class="summary-row">
      <span>⚠️ Perlu perhatian</span>
      <strong>${getAlerts().length}</strong>
    </div>

  `;

}


/* =====================================================
   EQUIPMENT
===================================================== */

function renderEquipment() {

  const container =
    document.getElementById("equipmentList");


  const search =
    (
      document.getElementById(
        "equipmentSearch"
      )?.value || ""
    ).toLowerCase();


  const filtered =
    equipment.filter(item =>

      item.name
        .toLowerCase()
        .includes(search)

      ||

      item.location
        .toLowerCase()
        .includes(search)

    );


  if (!filtered.length) {

    container.innerHTML = emptyState(
      "🔬",
      "Tiada peralatan dijumpai"
    );

    return;

  }


  container.innerHTML =
    filtered.map(item => `

      <article class="item-card">

        <div class="item-top">

          <div>

            <h3>🔬 ${escapeHTML(item.name)}</h3>

            <span class="badge
              ${statusClass(item.status)}">

              ${escapeHTML(item.status)}

            </span>

          </div>

          <strong>
            ${item.quantity}
          </strong>

        </div>

        <p>
          📍 ${escapeHTML(item.location)}
        </p>

        <p>
          Kuantiti: <strong>${item.quantity}</strong>
        </p>

        <div class="card-actions">

          <button
            class="edit-btn"
            onclick="editEquipment(${item.id})">

            ✏️ Edit

          </button>

          <button
            class="delete-btn"
            onclick="deleteEquipment(${item.id})">

            🗑️ Padam

          </button>

        </div>

      </article>

    `).join("");

}


/* =====================================================
   EQUIPMENT FORM
===================================================== */

function openEquipmentForm(id = null) {

  const item =
    equipment.find(x => x.id === id);


  document.getElementById(
    "modalTitle"
  ).textContent =
    id ? "Edit Peralatan" : "Tambah Peralatan";


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <form onsubmit="
      saveEquipment(event, ${id || "null"})
    ">

      <div class="form-group">

        <label>Nama peralatan</label>

        <input
          id="equipmentName"
          required
          value="${item ? escapeAttr(item.name) : ""}"
          placeholder="Contoh: Mikroskop"
        >

      </div>


      <div class="form-group">

        <label>Kuantiti</label>

        <input
          id="equipmentQuantity"
          type="number"
          min="0"
          required
          value="${item ? item.quantity : 1}"
        >

      </div>


      <div class="form-group">

        <label>Status</label>

        <select id="equipmentStatus">

          <option ${item?.status === "Baik" ? "selected" : ""}>
            Baik
          </option>

          <option ${item?.status === "Perlu pemeriksaan" ? "selected" : ""}>
            Perlu pemeriksaan
          </option>

          <option ${item?.status === "Rosak" ? "selected" : ""}>
            Rosak
          </option>

        </select>

      </div>


      <div class="form-group">

        <label>Lokasi</label>

        <input
          id="equipmentLocation"
          required
          value="${item ? escapeAttr(item.location) : ""}"
          placeholder="Contoh: Makmal A"
        >

      </div>


      <button class="form-submit">
        Simpan Peralatan
      </button>

    </form>

  `;


  openModal();

}


function saveEquipment(event, id) {

  event.preventDefault();


  const data = {

    name:
      document.getElementById(
        "equipmentName"
      ).value.trim(),

    quantity:
      Number(
        document.getElementById(
          "equipmentQuantity"
        ).value
      ),

    status:
      document.getElementById(
        "equipmentStatus"
      ).value,

    location:
      document.getElementById(
        "equipmentLocation"
      ).value.trim()

  };


  if (id) {

    const index =
      equipment.findIndex(
        x => x.id === id
      );

    equipment[index] = {
      ...equipment[index],
      ...data
    };

  } else {

    equipment.push({

      id: Date.now(),

      ...data

    });

  }


  saveData();

  closeModal();

  renderEquipment();

  renderHome();

}


function editEquipment(id) {

  openEquipmentForm(id);

}


function deleteEquipment(id) {

  if (!confirm(
    "Padam peralatan ini?"
  )) return;


  equipment =
    equipment.filter(
      x => x.id !== id
    );


  saveData();

  renderEquipment();

  renderHome();

}


/* =====================================================
   CHEMICALS
===================================================== */

function renderChemicals() {

  const container =
    document.getElementById("chemicalList");


  const search =
    (
      document.getElementById(
        "chemicalSearch"
      )?.value || ""
    ).toLowerCase();


  const filtered =
    chemicals.filter(item =>

      item.name
        .toLowerCase()
        .includes(search)

      ||

      item.formula
        .toLowerCase()
        .includes(search)

    );


  if (!filtered.length) {

    container.innerHTML =
      emptyState(
        "⚗️",
        "Tiada bahan kimia dijumpai"
      );

    return;

  }


  container.innerHTML =
    filtered.map(item => `

      <article class="item-card">

        <div class="item-top">

          <div>

            <h3>
              ⚗️ ${escapeHTML(item.name)}
            </h3>

            <span class="badge
              ${hazardClass(item.hazard)}">

              Bahaya: ${escapeHTML(item.hazard)}

            </span>

          </div>

          <strong>
            ${escapeHTML(item.formula)}
          </strong>

        </div>

        <p>
          📦 Kuantiti:
          <strong>${escapeHTML(item.quantity)}</strong>
        </p>

        <p>
          📍 ${escapeHTML(item.location)}
        </p>

        <p>
          📅 Luput:
          <strong>${escapeHTML(item.expiry)}</strong>
        </p>

        <div class="card-actions">

          <button
            class="edit-btn"
            onclick="editChemical(${item.id})">

            ✏️ Edit

          </button>

          <button
            class="delete-btn"
            onclick="deleteChemical(${item.id})">

            🗑️ Padam

          </button>

        </div>

      </article>

    `).join("");

}


function openChemicalForm(id = null) {

  const item =
    chemicals.find(x => x.id === id);


  document.getElementById(
    "modalTitle"
  ).textContent =
    id ? "Edit Bahan Kimia" : "Tambah Bahan Kimia";


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <form onsubmit="
      saveChemical(event, ${id || "null"})
    ">

      <div class="form-group">

        <label>Nama bahan</label>

        <input
          id="chemicalName"
          required
          value="${item ? escapeAttr(item.name) : ""}"
          placeholder="Contoh: Natrium Klorida"
        >

      </div>


      <div class="form-group">

        <label>Formula</label>

        <input
          id="chemicalFormula"
          required
          value="${item ? escapeAttr(item.formula) : ""}"
          placeholder="Contoh: NaCl"
        >

      </div>


      <div class="form-group">

        <label>Kuantiti</label>

        <input
          id="chemicalQuantity"
          required
          value="${item ? escapeAttr(item.quantity) : ""}"
          placeholder="Contoh: 500 g"
        >

      </div>


      <div class="form-group">

        <label>Tarikh luput</label>

        <input
          id="chemicalExpiry"
          type="date"
          required
          value="${item ? item.expiry : ""}"
        >

      </div>


      <div class="form-group">

        <label>Tahap bahaya</label>

        <select id="chemicalHazard">

          <option ${item?.hazard === "Rendah" ? "selected" : ""}>
            Rendah
          </option>

          <option ${item?.hazard === "Sederhana" ? "selected" : ""}>
            Sederhana
          </option>

          <option ${item?.hazard === "Tinggi" ? "selected" : ""}>
            Tinggi
          </option>

        </select>

      </div>


      <div class="form-group">

        <label>Lokasi simpanan</label>

        <input
          id="chemicalLocation"
          required
          value="${item ? escapeAttr(item.location) : ""}"
          placeholder="Contoh: Kabinet Kimia A"
        >

      </div>


      <button class="form-submit">
        Simpan Bahan Kimia
      </button>

    </form>

  `;


  openModal();

}


function saveChemical(event, id) {

  event.preventDefault();


  const data = {

    name:
      document.getElementById(
        "chemicalName"
      ).value.trim(),

    formula:
      document.getElementById(
        "chemicalFormula"
      ).value.trim(),

    quantity:
      document.getElementById(
        "chemicalQuantity"
      ).value.trim(),

    expiry:
      document.getElementById(
        "chemicalExpiry"
      ).value,

    hazard:
      document.getElementById(
        "chemicalHazard"
      ).value,

    location:
      document.getElementById(
        "chemicalLocation"
      ).value.trim()

  };


  if (id) {

    const index =
      chemicals.findIndex(
        x => x.id === id
      );

    chemicals[index] = {

      ...chemicals[index],

      ...data

    };

  } else {

    chemicals.push({

      id: Date.now(),

      ...data

    });

  }


  saveData();

  closeModal();

  renderChemicals();

  renderHome();

}


function editChemical(id) {

  openChemicalForm(id);

}


function deleteChemical(id) {

  if (!confirm(
    "Padam bahan kimia ini?"
  )) return;


  chemicals =
    chemicals.filter(
      x => x.id !== id
    );


  saveData();

  renderChemicals();

  renderHome();

}


/* =====================================================
   EXPERIMENTS
===================================================== */

function renderExperiments() {

  const container =
    document.getElementById(
      "experimentList"
    );


  const search =
    (
      document.getElementById(
        "experimentSearch"
      )?.value || ""
    ).toLowerCase();


  const filtered =
    experiments.filter(item =>

      item.name
        .toLowerCase()
        .includes(search)

      ||

      item.objective
        .toLowerCase()
        .includes(search)

    );


  if (!filtered.length) {

    container.innerHTML =
      emptyState(
        "🧪",
        "Tiada eksperimen dijumpai"
      );

    return;

  }


  container.innerHTML =
    filtered.map(item => `

      <article class="item-card">

        <h3>
          🧪 ${escapeHTML(item.name)}
        </h3>

        <p>
          <strong>Objektif:</strong><br>
          ${escapeHTML(item.objective)}
        </p>

        <p>
          <strong>Bahan:</strong><br>
          ${escapeHTML(item.materials)}
        </p>

        <p>
          <strong>Langkah:</strong><br>
          ${escapeHTML(item.steps)}
        </p>

        <p>
          <strong>⚠️ Keselamatan:</strong><br>
          ${escapeHTML(item.safety)}
        </p>

        <div class="card-actions">

          <button
            class="edit-btn"
            onclick="editExperiment(${item.id})">

            ✏️ Edit

          </button>

          <button
            class="delete-btn"
            onclick="deleteExperiment(${item.id})">

            🗑️ Padam

          </button>

        </div>

      </article>

    `).join("");

}


function openExperimentForm(id = null) {

  const item =
    experiments.find(x => x.id === id);


  document.getElementById(
    "modalTitle"
  ).textContent =
    id
      ? "Edit Eksperimen"
      : "Tambah Eksperimen";


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <form onsubmit="
      saveExperiment(event, ${id || "null"})
    ">

      <div class="form-group">

        <label>Nama eksperimen</label>

        <input
          id="experimentName"
          required
          value="${item ? escapeAttr(item.name) : ""}"
        >

      </div>


      <div class="form-group">

        <label>Objektif</label>

        <textarea
          id="experimentObjective"
          required
        >${item ? escapeHTML(item.objective) : ""}</textarea>

      </div>


      <div class="form-group">

        <label>Bahan diperlukan</label>

        <textarea
          id="experimentMaterials"
          required
        >${item ? escapeHTML(item.materials) : ""}</textarea>

      </div>


      <div class="form-group">

        <label>Langkah eksperimen</label>

        <textarea
          id="experimentSteps"
          required
        >${item ? escapeHTML(item.steps) : ""}</textarea>

      </div>


      <div class="form-group">

        <label>Keselamatan</label>

        <textarea
          id="experimentSafety"
          required
        >${item ? escapeHTML(item.safety) : ""}</textarea>

      </div>


      <button class="form-submit">
        Simpan Eksperimen
      </button>

    </form>

  `;


  openModal();

}


function saveExperiment(event, id) {

  event.preventDefault();


  const data = {

    name:
      document.getElementById(
        "experimentName"
      ).value.trim(),

    objective:
      document.getElementById(
        "experimentObjective"
      ).value.trim(),

    materials:
      document.getElementById(
        "experimentMaterials"
      ).value.trim(),

    steps:
      document.getElementById(
        "experimentSteps"
      ).value.trim(),

    safety:
      document.getElementById(
        "experimentSafety"
      ).value.trim()

  };


  if (id) {

    const index =
      experiments.findIndex(
        x => x.id === id
      );

    experiments[index] = {

      ...experiments[index],

      ...data

    };

  } else {

    experiments.push({

      id: Date.now(),

      ...data

    });

  }


  saveData();

  closeModal();

  renderExperiments();

  renderHome();

}


function editExperiment(id) {

  openExperimentForm(id);

}


function deleteExperiment(id) {

  if (!confirm(
    "Padam eksperimen ini?"
  )) return;


  experiments =
    experiments.filter(
      x => x.id !== id
    );


  saveData();

  renderExperiments();

  renderHome();

}


/* =====================================================
   ALERTS
===================================================== */

function getAlerts() {

  const alerts = [];


  /* Equipment */

  equipment.forEach(item => {

    if (item.quantity <= 1) {

      alerts.push({

        type: "warning",

        title:
          `Stok rendah: ${item.name}`,

        message:
          `Kuantiti hanya ${item.quantity}.`

      });

    }


    if (item.status === "Rosak") {

      alerts.push({

        type: "danger",

        title:
          `Peralatan rosak: ${item.name}`,

        message:
          "Peralatan perlu dikeluarkan daripada penggunaan sehingga diperiksa."

      });

    }

  });


  /* Chemicals */

  chemicals.forEach(item => {

    const days =
      daysUntil(item.expiry);


    if (days < 0) {

      alerts.push({

        type: "danger",

        title:
          `Bahan telah luput: ${item.name}`,

        message:
          `Tarikh luput: ${item.expiry}`

      });

    }

    else if (days <= 30) {

      alerts.push({

        type: "warning",

        title:
          `Bahan hampir luput: ${item.name}`,

        message:
          `${days} hari lagi sebelum tarikh luput.`

      });

    }

  });


  return alerts;

}


function renderAlerts() {

  const container =
    document.getElementById(
      "alertList"
    );


  const alerts =
    getAlerts();


  if (!alerts.length) {

    container.innerHTML =
      emptyState(
        "✅",
        "Tiada amaran buat masa ini"
      );

    return;

  }


  container.innerHTML =
    alerts.map(alert => `

      <article class="item-card">

        <div class="item-top">

          <h3>
            ${alert.type === "danger"
              ? "🚨"
              : "⚠️"
            }

            ${escapeHTML(alert.title)}

          </h3>

          <span class="badge
            ${alert.type === "danger"
              ? "badge-danger"
              : "badge-warning"
            }">

            ${alert.type === "danger"
              ? "Penting"
              : "Perhatian"
            }

          </span>

        </div>

        <p>
          ${escapeHTML(alert.message)}
        </p>

      </article>

    `).join("");

}


/* =====================================================
   MODAL
===================================================== */

function openModal() {

  document
    .getElementById("modal")
    .classList.add("show");

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("show");

}


/* Tutup modal bila klik kawasan luar */

document
  .getElementById("modal")
  .addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeModal();

      }

    }
  );


/* =====================================================
   HELPERS
===================================================== */

function daysUntil(dateString) {

  const today =
    new Date();

  today.setHours(
    0,0,0,0
  );


  const date =
    new Date(dateString);

  date.setHours(
    0,0,0,0
  );


  return Math.ceil(
    (
      date - today
    )
    /
    (1000 * 60 * 60 * 24)
  );

}


function statusClass(status) {

  if (status === "Baik") {

    return "badge-success";

  }


  if (status === "Rosak") {

    return "badge-danger";

  }


  return "badge-warning";

}


function hazardClass(hazard) {

  if (hazard === "Tinggi") {

    return "badge-danger";

  }


  if (hazard === "Sederhana") {

    return "badge-warning";

  }


  return "badge-success";

}


function emptyState(
  icon,
  text
) {

  return `

    <div class="empty">

      <div class="empty-icon">
        ${icon}
      </div>

      <strong>
        ${text}
      </strong>

    </div>

  `;

}


/* Lindungi paparan daripada HTML yang dimasukkan pengguna */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function escapeAttr(value) {

  return escapeHTML(value);

}


/* =====================================================
   START APPLICATION
===================================================== */

saveData();

renderHome();

showSection("home");
