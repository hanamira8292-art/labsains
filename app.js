/* =====================================================
   LABSAINS PRO
   APP.JS
===================================================== */


/* =====================================================
   DEFAULT SETTINGS
===================================================== */

const defaultSettings = {

    name: "Pengguna",

    role: "Guru",

    lab: "Makmal Sains",

    tagline:
        "Urus Makmal. Rekod Eksperimen. Lebih Selamat.",

    theme:
        "#0878d1",

    fontSize:
        "normal",

    logo:
        "",

    splash:
        ""

};


/* =====================================================
   LOAD SETTINGS
===================================================== */

let settings =
    JSON.parse(
        localStorage.getItem(
            "labsains_pro_settings"
        )
    ) || {
        ...defaultSettings
    };


/* =====================================================
   INVENTORY DATA
===================================================== */

let inventory =
    JSON.parse(
        localStorage.getItem(
            "labsains_pro_inventory"
        )
    ) || [

    {
        id: "eq001",

        type: "equipment",

        name: "Mikroskop",

        formula: "",

        category: "Optik",

        quantity: 12,

        unit: "unit",

        location: "Kabinet A2",

        status: "Baik",

        notes: "",

        icon: "🔬"
    },

    {
        id: "eq002",

        type: "equipment",

        name: "Bikar 100mL",

        formula: "",

        category: "Bekas",

        quantity: 35,

        unit: "unit",

        location: "Kabinet B1",

        status: "Baik",

        notes: "",

        icon: "🥛"
    },

    {
        id: "eq003",

        type: "equipment",

        name: "Tabung Uji",

        formula: "",

        category: "Bekas",

        quantity: 52,

        unit: "unit",

        location: "Kabinet B1",

        status: "Stok mencukupi",

        notes: "",

        icon: "🧪"
    },

    {
        id: "eq004",

        type: "equipment",

        name: "Penunu Bunsen",

        formula: "",

        category: "Pemanasan",

        quantity: 8,

        unit: "unit",

        location: "Kabinet C2",

        status: "Baik",

        notes: "",

        icon: "🔥"
    },

    {
        id: "eq005",

        type: "equipment",

        name: "Pipet",

        formula: "",

        category: "Pemindahan",

        quantity: 24,

        unit: "unit",

        location: "Kabinet C1",

        status: "Baik",

        notes: "",

        icon: "💧"
    },

    {
        id: "ch001",

        type: "chemical",

        name: "Asid Hidroklorik",

        formula: "HCl",

        category: "Asid",

        quantity: 2,

        unit: "botol",

        location: "Kabinet Kimia A",

        status: "Stok mencukupi",

        notes: "",

        icon: "🧪",

        warning: "Menghakis"
    },

    {
        id: "ch002",

        type: "chemical",

        name: "Natrium Hidroksida",

        formula: "NaOH",

        category: "Alkali",

        quantity: 1,

        unit: "botol",

        location: "Kabinet Kimia B",

        status: "Stok rendah",

        notes: "",

        icon: "🧪",

        warning: "Menghakis"
    },

    {
        id: "ch003",

        type: "chemical",

        name: "Etanol",

        formula: "C₂H₅OH",

        category: "Pelarut",

        quantity: 3,

        unit: "botol",

        location: "Kabinet Kimia C",

        status: "Baik",

        notes: "",

        icon: "🧪",

        warning: "Mudah terbakar"
    },

    {
        id: "ch004",

        type: "chemical",

        name: "Kuprum(II) Sulfat",

        formula: "CuSO₄",

        category: "Garam",

        quantity: 1,

        unit: "bekas",

        location: "Kabinet Kimia D",

        status: "Stok rendah",

        notes: "",

        icon: "🧪",

        warning: "Berbahaya jika tertelan"
    },

    {
        id: "ch005",

        type: "chemical",

        name: "Asid Sulfurik",

        formula: "H₂SO₄",

        category: "Asid",

        quantity: 2,

        unit: "botol",

        location: "Kabinet Kimia A",

        status: "Baik",

        notes: "",

        icon: "🧪",

        warning: "Sangat menghakis"
    }

];


/* =====================================================
   EXPERIMENT DATA
===================================================== */

let experiments =
    JSON.parse(
        localStorage.getItem(
            "labsains_pro_experiments"
        )
    ) || [

    {
        id: "exp001",

        name:
            "Ujian Kanji Dalam Makanan",

        level:
            "Tingkatan 4",

        subject:
            "Biologi",

        date:
            "2026-10-04",

        group:
            "Kumpulan 1",

        status:
            "Selesai",

        objective:
            "Menguji kehadiran kanji dalam sampel makanan.",

        hypothesis:
            "Sampel makanan yang mengandungi kanji akan menunjukkan perubahan warna apabila diuji.",

        materials:
            "Larutan iodin, sampel makanan",

        equipment:
            "Pipet, plat titisan",

        observation:
            "Sampel tertentu menunjukkan perubahan warna.",

        result:
            "Keputusan direkodkan.",

        conclusion:
            "Kanji dapat dikesan dalam sampel tertentu."

    },

    {
        id: "exp002",

        name:
            "Fotosintesis",

        level:
            "Tingkatan 4",

        subject:
            "Biologi",

        date:
            "2026-10-05",

        group:
            "Kumpulan 2",

        status:
            "Dalam proses",

        objective:
            "Mengkaji faktor yang mempengaruhi fotosintesis.",

        hypothesis:
            "Keadaan persekitaran tertentu mempengaruhi kadar fotosintesis.",

        materials:
            "Daun dan bahan berkaitan",

        equipment:
            "Radas makmal",

        observation:
            "Pemerhatian sedang dijalankan.",

        result:
            "",

        conclusion:
            ""

    },

    {
        id: "exp003",

        name:
            "Tindak Balas Asid & Alkali",

        level:
            "Tingkatan 3",

        subject:
            "Sains",

        date:
            "2026-10-06",

        group:
            "Kumpulan 3",

        status:
            "Belum bermula",

        objective:
            "Mengkaji tindak balas antara asid dan alkali.",

        hypothesis:
            "",

        materials:
            "",

        equipment:
            "",

        observation:
            "",

        result:
            "",

        conclusion:
            ""

    }

];


/* =====================================================
   FILTERS
===================================================== */

let inventoryFilter = "all";

let experimentFilter = "all";

let selectedRole = settings.role || "Guru";


/* =====================================================
   STORAGE
===================================================== */

function saveAll() {

    localStorage.setItem(
        "labsains_pro_inventory",
        JSON.stringify(inventory)
    );

    localStorage.setItem(
        "labsains_pro_experiments",
        JSON.stringify(experiments)
    );

    localStorage.setItem(
        "labsains_pro_settings",
        JSON.stringify(settings)
    );
}


/* =====================================================
   INITIAL START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applySettings();

        setTimeout(
            () => {

                document
                    .getElementById("splashScreen")
                    .classList.add("hidden");

                document
                    .getElementById("loginScreen")
                    .classList.remove("hidden");

            },
            1800
        );

        renderExperiments();

        renderInventory();

        renderChemicals();

        updateDashboard();

        setupDate();

    }
);


/* =====================================================
   SETTINGS DISPLAY
===================================================== */

function applySettings() {

    document.documentElement
        .style
        .setProperty(
            "--primary",
            settings.theme
        );

    document.body.classList.remove(
        "font-large",
        "font-xlarge"
    );

    if (
        settings.fontSize === "large"
    ) {

        document.body.classList.add(
            "font-large"
        );

    }

    if (
        settings.fontSize === "xlarge"
    ) {

        document.body.classList.add(
            "font-xlarge"
        );

    }


    const labName =
        settings.lab ||
        "LABSAINS";

    setText(
        "headerLabName",
        labName
    );

    setText(
        "headerSubtitle",
        "Urus Makmal • Rekod Eksperimen"
    );

    setText(
        "welcomeName",
        settings.name
    );

    setText(
        "welcomeRole",
        settings.role
    );

    setText(
        "welcomeLab",
        settings.lab
    );


    setText(
        "splashTagline",
        settings.tagline
    );


    setLogo(
        "splashLogo",
        settings.logo
    );

    setLogo(
        "loginLogo",
        settings.logo
    );

    setLogo(
        "headerLogo",
        settings.logo
    );


    const splash =
        document.getElementById(
            "splashScreen"
        );

    if (
        settings.splash
    ) {

        splash.style.backgroundImage =
            `linear-gradient(rgba(3,35,67,.55),rgba(3,35,67,.75)),url("${settings.splash}")`;

        splash.style.backgroundSize =
            "cover";

        splash.style.backgroundPosition =
            "center";

    }


    const settingName =
        document.getElementById(
            "settingName"
        );

    if (settingName) {

        settingName.value =
            settings.name;

    }


    const settingRole =
        document.getElementById(
            "settingRole"
        );

    if (settingRole) {

        settingRole.value =
            settings.role;

    }


    const settingLab =
        document.getElementById(
            "settingLab"
        );

    if (settingLab) {

        settingLab.value =
            settings.lab;

    }


    const settingTagline =
        document.getElementById(
            "settingTagline"
        );

    if (settingTagline) {

        settingTagline.value =
            settings.tagline;

    }


    const fontSetting =
        document.getElementById(
            "fontSizeSetting"
        );

    if (fontSetting) {

        fontSetting.value =
            settings.fontSize;

    }


    const logoPreview =
        document.getElementById(
            "logoPreview"
        );

    if (
        logoPreview &&
        settings.logo
    ) {

        logoPreview.innerHTML =
            `<img src="${settings.logo}">`;

    }


    const splashPreview =
        document.getElementById(
            "splashPreview"
        );

    if (
        splashPreview &&
        settings.splash
    ) {

        splashPreview.style.backgroundImage =
            `url("${settings.splash}")`;

    }

}


/* =====================================================
   HELPER
===================================================== */

function setText(
    id,
    text
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            text;

    }

}


function setLogo(
    id,
    image
) {

    const element =
        document.getElementById(id);

    if (!element) return;


    if (image) {

        element.innerHTML =
            `<img src="${image}" alt="Logo">`;

    }

}


/* =====================================================
   LOGIN
===================================================== */

function selectRole(role) {

    selectedRole =
        role;

    setText(
        "selectedRole",
        "Role: " + role
    );

}


function loginUser() {

    const username =
        document
            .getElementById("loginUser")
            .value
            .trim();


    if (username) {

        settings.name =
            username;

    }

    settings.role =
        selectedRole;

    saveAll();

    enterApp();

}


function guestLogin() {

    settings.name =
        "Tetamu";

    settings.role =
        "Pelawat";

    saveAll();

    enterApp();

}


function enterApp() {

    document
        .getElementById("loginScreen")
        .classList.add("hidden");

    document
        .getElementById("mainApp")
        .classList.remove("hidden");

    applySettings();

    openPage("homePage");

}


function togglePassword() {

    const input =
        document.getElementById(
            "loginPassword"
        );

    input.type =
        input.type === "password"
            ? "text"
            : "password";

}


/* =====================================================
   NAVIGATION
===================================================== */

function openPage(
    pageId
) {

    document
        .querySelectorAll(".page")
        .forEach(
            page =>
                page.classList.remove(
                    "active"
                )
        );


    const page =
        document.getElementById(
            pageId
        );

    if (!page) return;

    page.classList.add("active");


    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

            if (
                btn.dataset.page ===
                pageId
            ) {

                btn.classList.add(
                    "active"
                );

            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    renderExperiments();

    renderInventory();

    renderChemicals();

    updateDashboard();

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


    const warning =
        inventory.filter(
            item =>
                item.type === "chemical" &&
                item.warning
        ).length;


    setText(
        "equipmentCount",
        equipment
    );

    setText(
        "chemicalCount",
        chemicals
    );

    setText(
        "experimentCount",
        experiments.length
    );

    setText(
        "warningCount",
        warning
    );

    setText(
        "warningBadge",
        warning
    );

}


/* =====================================================
   EXPERIMENT
===================================================== */

function openExperimentForm(
    id = ""
) {

    closeModal(
        "quickAddModal"
    );


    const modal =
        document.getElementById(
            "experimentModal"
        );


    modal.classList.remove(
        "hidden"
    );


    clearExperimentForm();


    if (id) {

        const item =
            experiments.find(
                x => x.id === id
            );

        if (!item) return;


        setText(
            "experimentModalTitle",
            "✏️ Edit Eksperimen"
        );


        document.getElementById(
            "expId"
        ).value = item.id;


        document.getElementById(
            "expName"
        ).value = item.name || "";


        document.getElementById(
            "expLevel"
        ).value =
            item.level ||
            "Tingkatan 1";


        document.getElementById(
            "expSubject"
        ).value =
            item.subject || "";


        document.getElementById(
            "expDate"
        ).value =
            item.date || "";


        document.getElementById(
            "expGroup"
        ).value =
            item.group || "";


        document.getElementById(
            "expStatus"
        ).value =
            item.status ||
            "Belum bermula";


        document.getElementById(
            "expObjective"
        ).value =
            item.objective || "";


        document.getElementById(
            "expHypothesis"
        ).value =
            item.hypothesis || "";


        document.getElementById(
            "expMaterials"
        ).value =
            item.materials || "";


        document.getElementById(
            "expEquipment"
        ).value =
            item.equipment || "";


        document.getElementById(
            "expObservation"
        ).value =
            item.observation || "";


        document.getElementById(
            "expResult"
        ).value =
            item.result || "";


        document.getElementById(
            "expConclusion"
        ).value =
            item.conclusion || "";

    }

}


function clearExperimentForm() {

    document.getElementById(
        "expId"
    ).value = "";


    document.getElementById(
        "expName"
    ).value = "";


    document.getElementById(
        "expSubject"
    ).value = "";


    document.getElementById(
        "expGroup"
    ).value = "";


    document.getElementById(
        "expObjective"
    ).value = "";


    document.getElementById(
        "expHypothesis"
    ).value = "";


    document.getElementById(
        "expMaterials"
    ).value = "";


    document.getElementById(
        "expEquipment"
    ).value = "";


    document.getElementById(
        "expObservation"
    ).value = "";


    document.getElementById(
        "expResult"
    ).value = "";


    document.getElementById(
        "expConclusion"
    ).value = "";


    document.getElementById(
        "expStatus"
    ).value =
        "Belum bermula";


    setText(
        "experimentModalTitle",
        "🧫 Rekod Eksperimen"
    );

}


function setupDate() {

    const date =
        document.getElementById(
            "expDate"
        );

    if (
        date &&
        !date.value
    ) {

        const now =
            new Date();

        date.value =
            now.toISOString()
                .split("T")[0];

    }

}


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


    const id =
        document.getElementById(
            "expId"
        ).value;


    const data = {

        id:
            id ||
            "exp_" +
            Date.now(),

        name:

            name,

        level:

            document.getElementById(
                "expLevel"
            ).value,

        subject:

            document.getElementById(
                "expSubject"
            ).value.trim(),

        date:

            document.getElementById(
                "expDate"
            ).value,

        group:

            document.getElementById(
                "expGroup"
            ).value.trim(),

        status:

            document.getElementById(
                "expStatus"
            ).value,

        objective:

            document.getElementById(
                "expObjective"
            ).value.trim(),

        hypothesis:

            document.getElementById(
                "expHypothesis"
            ).value.trim(),

        materials:

            document.getElementById(
                "expMaterials"
            ).value.trim(),

        equipment:

            document.getElementById(
                "expEquipment"
            ).value.trim(),

        observation:

            document.getElementById(
                "expObservation"
            ).value.trim(),

        result:

            document.getElementById(
                "expResult"
            ).value.trim(),

        conclusion:

            document.getElementById(
                "expConclusion"
            ).value.trim()

    };


    if (id) {

        const index =
            experiments.findIndex(
                x => x.id === id
            );

        if (index !== -1) {

            experiments[index] =
                data;

        }

    } else {

        experiments.unshift(
            data
        );

    }


    saveAll();

    renderExperiments();

    updateDashboard();

    closeModal(
        "experimentModal"
    );

    openPage(
        "experimentPage"
    );

}


function setExperimentFilter(
    filter,
    button
) {

    experimentFilter =
        filter;


    document
        .querySelectorAll(
            "#experimentPage .chip"
        )
        .forEach(
            x =>
                x.classList.remove(
                    "active"
                )
        );


    button.classList.add(
        "active"
    );

    renderExperiments();

}


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
        .toLowerCase();


    const list =
        experiments.filter(
            item => {

                const text =
                    (
                        item.name +
                        " " +
                        item.subject +
                        " " +
                        item.level
                    )
                    .toLowerCase();


                const matchSearch =
                    text.includes(
                        search
                    );


                const matchFilter =
                    experimentFilter ===
                        "all" ||
                    item.status ===
                        experimentFilter;


                return (
                    matchSearch &&
                    matchFilter
                );

            }
        );


    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>🧫</div>
                <strong>Tiada eksperimen</strong>
                <p>Tekan "+ Rekod" untuk menambah.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = "";


    list.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "experiment-card";


            let statusClass =
                "pending";

            if (
                item.status ===
                "Selesai"
            ) {

                statusClass =
                    "done";

            } else if (
                item.status ===
                "Dalam proses"
            ) {

                statusClass =
                    "process";

            }


            div.innerHTML = `

                <div class="experiment-icon">
                    🧪
                </div>

                <div class="experiment-content">

                    <span class="status ${statusClass}">
                        ${escapeHTML(item.status)}
                    </span>

                    <h3>
                        ${escapeHTML(item.name)}
                    </h3>

                    <p>
                        ${escapeHTML(item.level || "")}
                        •
                        ${escapeHTML(item.subject || "")}
                    </p>

                    <p>
                        ${
                            escapeHTML(
                                item.objective ||
                                "Tiada objektif direkodkan."
                            )
                        }
                    </p>

                    <div class="card-actions">

                        <button
                            class="edit-btn"
                            onclick="openExperimentForm('${item.id}')">
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteExperiment('${item.id}')">
                            🗑️ Padam
                        </button>

                    </div>

                </div>
            `;


            container.appendChild(
                div
            );

        }
    );

}


function deleteExperiment(id) {

    const item =
        experiments.find(
            x => x.id === id
        );

    if (!item) return;


    if (
        !confirm(
            `Padam eksperimen "${item.name}"?`
        )
    ) {

        return;

    }


    experiments =
        experiments.filter(
            x => x.id !== id
        );


    saveAll();

    renderExperiments();

    updateDashboard();

}


/* =====================================================
   INVENTORY
===================================================== */

function openInventoryForm(
    type = "equipment",
    id = ""
) {

    closeModal(
        "quickAddModal"
    );


    document
        .getElementById(
            "inventoryModal"
        )
        .classList.remove(
            "hidden"
        );


    clearInventoryForm();


    document.getElementById(
        "itemType"
    ).value =
        type;


    if (id) {

        const item =
            inventory.find(
                x => x.id === id
            );

        if (!item) return;


        setText(
            "inventoryModalTitle",
            "✏️ Edit Inventori"
        );


        document.getElementById(
            "itemId"
        ).value =
            item.id;


        document.getElementById(
            "itemType"
        ).value =
            item.type;


        document.getElementById(
            "itemName"
        ).value =
            item.name || "";


        document.getElementById(
            "itemFormula"
        ).value =
            item.formula || "";


        document.getElementById(
            "itemCategory"
        ).value =
            item.category || "";


        document.getElementById(
            "itemQuantity"
        ).value =
            item.quantity ?? "";


        document.getElementById(
            "itemUnit"
        ).value =
            item.unit || "unit";


        document.getElementById(
            "itemLocation"
        ).value =
            item.location || "";


        document.getElementById(
            "itemStatus"
        ).value =
            item.status || "Baik";


        document.getElementById(
            "itemNotes"
        ).value =
            item.notes || "";

    }

}


function clearInventoryForm() {

    document.getElementById(
        "itemId"
    ).value = "";


    document.getElementById(
        "itemName"
    ).value = "";


    document.getElementById(
        "itemFormula"
    ).value = "";


    document.getElementById(
        "itemCategory"
    ).value = "";


    document.getElementById(
        "itemQuantity"
    ).value = "";


    document.getElementById(
        "itemLocation"
    ).value = "";


    document.getElementById(
        "itemStatus"
    ).value =
        "Baik";


    document.getElementById(
        "itemNotes"
    ).value = "";


    setText(
        "inventoryModalTitle",
        "➕ Tambah Inventori"
    );

}


function saveInventoryItem() {

    const name =
        document.getElementById(
            "itemName"
        ).value.trim();


    if (!name) {

        alert(
            "Sila masukkan nama item."
        );

        return;

    }


    const id =
        document.getElementById(
            "itemId"
        ).value;


    const type =
        document.getElementById(
            "itemType"
        ).value;


    const item = {

        id:
            id ||
            (
                type === "chemical"
                    ? "ch_"
                    : "eq_"
            ) +
            Date.now(),

        type:

            type,

        name:

            name,

        formula:

            document.getElementById(
                "itemFormula"
            ).value.trim(),

        category:

            document.getElementById(
                "itemCategory"
            ).value.trim() ||
            "Umum",

        quantity:

            Number(
                document.getElementById(
                    "itemQuantity"
                ).value
            ) || 0,

        unit:

            document.getElementById(
                "itemUnit"
            ).value,

        location:

            document.getElementById(
                "itemLocation"
            ).value.trim(),

        status:

            document.getElementById(
                "itemStatus"
            ).value,

        notes:

            document.getElementById(
                "itemNotes"
            ).value.trim(),

        icon:

            type === "chemical"
                ? "🧪"
                : "🔬",

        warning:

            type === "chemical"
                ? getChemicalWarning(
                    name
                )
                : ""

    };


    if (id) {

        const index =
            inventory.findIndex(
                x => x.id === id
            );

        if (index !== -1) {

            inventory[index] =
                item;

        }

    } else {

        inventory.unshift(
            item
        );

    }


    saveAll();

    renderInventory();

    renderChemicals();

    updateDashboard();

    closeModal(
        "inventoryModal"
    );

}


function getChemicalWarning(
    name
) {

    const lower =
        name.toLowerCase();


    if (
        lower.includes("asid hidroklorik") ||
        lower === "hcl"
    ) {

        return "Menghakis";

    }


    if (
        lower.includes("natrium hidroksida") ||
        lower.includes("kalium hidroksida") ||
        lower === "naoh" ||
        lower === "koh"
    ) {

        return "Menghakis";

    }


    if (
        lower.includes("asid sulfurik")
    ) {

        return "Sangat menghakis";

    }


    if (
        lower.includes("etanol") ||
        lower.includes("methanol") ||
        lower.includes("metanol")
    ) {

        return "Mudah terbakar";

    }


    if (
        lower.includes("hidrogen peroksida")
    ) {

        return "Pengoksida";

    }


    return "";

}


function setInventoryFilter(
    filter,
    button
) {

    inventoryFilter =
        filter;


    document
        .querySelectorAll(
            "#inventoryPage .chip"
        )
        .forEach(
            x =>
                x.classList.remove(
                    "active"
                )
        );


    button.classList.add(
        "active"
    );


    renderInventory();

}


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
        .toLowerCase();


    const list =
        inventory.filter(
            item => {

                const text =
                    (
                        item.name +
                        " " +
                        item.category +
                        " " +
                        item.location
                    )
                    .toLowerCase();


                const matchSearch =
                    text.includes(
                        search
                    );


                const matchFilter =
                    inventoryFilter ===
                        "all" ||
                    item.type ===
                        inventoryFilter;


                return (
                    matchSearch &&
                    matchFilter
                );

            }
        );


    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>🔬</div>
                <strong>Tiada inventori</strong>
                <p>Tekan "+ Tambah" untuk memasukkan item.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = "";


    list.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "inventory-card";


            let stockClass = "";

            if (
                item.status ===
                    "Stok rendah"
            ) {

                stockClass =
                    "low";

            }

            if (
                item.status ===
                    "Rosak" ||
                item.status ===
                    "Hilang"
            ) {

                stockClass =
                    "bad";

            }


            div.innerHTML = `

                <div class="inventory-icon">
                    ${item.icon || "🔬"}
                </div>

                <div class="inventory-info">

                    <h3>
                        ${escapeHTML(item.name)}
                    </h3>

                    <p>

                        ${
                            item.formula
                                ? escapeHTML(
                                    item.formula
                                ) + " • "
                                : ""
                        }

                        ${escapeHTML(
                            item.category || ""
                        )}

                        <br>

                        Kuantiti:
                        ${item.quantity ?? 0}
                        ${escapeHTML(
                            item.unit || ""
                        )}

                        ${
                            item.location
                                ? `
                                    <br>
                                    Lokasi:
                                    ${escapeHTML(
                                        item.location
                                    )}
                                  `
                                : ""
                        }

                    </p>

                    <span class="stock ${stockClass}">
                        ${escapeHTML(
                            item.status || "Baik"
                        )}
                    </span>

                    ${
                        item.warning
                            ? `
                                <span class="status pending">
                                    ⚠️
                                    ${escapeHTML(
                                        item.warning
                                    )}
                                </span>
                              `
                            : ""
                    }

                    <div class="card-actions">

                        <button
                            class="edit-btn"
                            onclick="openInventoryForm('${item.type}','${item.id}')">
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteInventory('${item.id}')">
                            🗑️ Padam
                        </button>

                    </div>

                </div>
            `;


            container.appendChild(
                div
            );

        }
    );

}


/* =====================================================
   CHEMICAL PAGE
===================================================== */

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


    const list =
        inventory.filter(
            item =>
                item.type ===
                "chemical"
        )
        .filter(
            item =>
                (
                    item.name +
                    " " +
                    item.formula +
                    " " +
                    item.category
                )
                .toLowerCase()
                .includes(
                    search
                )
        );


    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>🧪</div>
                <strong>Tiada bahan kimia</strong>
                <p>Tekan "+ Tambah" untuk memasukkan bahan.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = "";


    list.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "inventory-card";


            div.innerHTML = `

                <div class="inventory-icon">
                    🧪
                </div>

                <div class="inventory-info">

                    <h3>
                        ${escapeHTML(item.name)}
                    </h3>

                    <p>

                        Formula:
                        ${escapeHTML(
                            item.formula || "-"
                        )}

                        <br>

                        Kategori:
                        ${escapeHTML(
                            item.category || "-"
                        )}

                        <br>

                        Kuantiti:
                        ${item.quantity || 0}
                        ${escapeHTML(
                            item.unit || ""
                        )}

                        <br>

                        Lokasi:
                        ${escapeHTML(
                            item.location || "-"
                        )}

                    </p>

                    ${
                        item.warning
                            ? `
                                <span class="status pending">
                                    ⚠️
                                    ${escapeHTML(
                                        item.warning
                                    )}
                                </span>
                              `
                            : ""
                    }

                    <div class="card-actions">

                        <button
                            class="edit-btn"
                            onclick="openInventoryForm('chemical','${item.id}')">
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteInventory('${item.id}')">
                            🗑️ Padam
                        </button>

                    </div>

                </div>
            `;


            container.appendChild(
                div
            );

        }
    );

}


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
    ) {

        return;

    }


    inventory =
        inventory.filter(
            x => x.id !== id
        );


    saveAll();

    renderInventory();

    renderChemicals();

    updateDashboard();

}


/* =====================================================
   QUICK ADD
===================================================== */

function openQuickAdd() {

    document
        .getElementById(
            "quickAddModal"
        )
        .classList.remove(
            "hidden"
        );

}


/* =====================================================
   MODAL CLOSE
===================================================== */

function closeModal(
    id
) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


/* =====================================================
   SETTINGS
===================================================== */

function saveSettings() {

    settings.name =
        document
            .getElementById(
                "settingName"
            )
            .value.trim() ||
        "Pengguna";


    settings.role =
        document
            .getElementById(
                "settingRole"
            )
            .value;


    settings.lab =
        document
            .getElementById(
                "settingLab"
            )
            .value.trim() ||
        "Makmal Sains";


    settings.tagline =
        document
            .getElementById(
                "settingTagline"
            )
            .value.trim() ||
        defaultSettings.tagline;


    saveAll();

    applySettings();

    alert(
        "Tetapan LABSAINS berjaya disimpan."
    );

}


function setTheme(
    color
) {

    settings.theme =
        color;

    saveAll();

    applySettings();

}


function changeFontSize(
    size
) {

    settings.fontSize =
        size;

    saveAll();

    applySettings();

}


/* =====================================================
   IMAGE UPLOAD
===================================================== */

function uploadImage(
    input,
    type
) {

    const file =
        input.files?.[0];

    if (!file) return;


    const reader =
        new FileReader();


    reader.onload =
        function(event) {

            const image =
                event.target.result;


            if (
                type ===
                "logo"
            ) {

                settings.logo =
                    image;

            }


            if (
                type ===
                "splash"
            ) {

                settings.splash =
                    image;

            }


            saveAll();

            applySettings();

        };


    reader.readAsDataURL(
        file
    );

}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function showNotifications() {

    const warnings =
        inventory.filter(
            item =>
                item.warning ||
                item.status ===
                "Stok rendah" ||
                item.status ===
                "Rosak"
        );


    if (!warnings.length) {

        alert(
            "Tiada amaran inventori."
        );

        return;

    }


    let message =
        "⚠️ AMARAN INVENTORI\n\n";


    warnings.forEach(
        item => {

            message +=
                "• " +
                item.name +
                " — " +
                (
                    item.warning ||
                    item.status
                ) +
                "\n";

        }
    );


    alert(
        message
    );

}


/* =====================================================
   RESET
===================================================== */

function resetApp() {

    const answer =
        confirm(
            "AMARAN!\n\nSemua eksperimen, inventori dan tetapan akan dipadam daripada peranti ini.\n\nTeruskan?"
        );


    if (!answer) return;


    localStorage.removeItem(
        "labsains_pro_inventory"
    );

    localStorage.removeItem(
        "labsains_pro_experiments"
    );

    localStorage.removeItem(
        "labsains_pro_settings"
    );


    location.reload();

}


/* =====================================================
   HTML SECURITY
===================================================== */

function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )
    .replace(
        /&/g,
        "&amp;"
    )
    .replace(
        /</g,
        "&lt;"
    )
    .replace(
        />/g,
        "&gt;"
    )
    .replace(
        /"/g,
        "&quot;"
    )
    .replace(
        /'/g,
        "&#039;"
    );

}
