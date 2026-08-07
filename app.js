const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

const missionButtons = document.querySelectorAll(".card-button");
const startMissionButton = document.getElementById("startMissionButton");

const missionModal = document.getElementById("missionModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");

const journalButton = document.getElementById("journalButton");

const missionData = {
    "base-camp": {
        title: "Establish Base Camp",
        text: "Set up the core structure of ATLAS, make sure the system is stable, and prepare the project for the next stage."
    },

    "route": {
        title: "Choose the Route",
        text: "Define the next objective, break it into clear stages, and keep the immediate next action visible."
    },

    "progress": {
        title: "Make Progress",
        text: "Track completed work, review momentum, and keep moving toward the larger objective."
    }
};

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;

    missionModal.classList.add("show");
    missionModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeModal() {
    missionModal.classList.remove("show");
    missionModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");

        document.querySelectorAll(".nav-link").forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");
    });
});

missionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const missionKey = button.dataset.mission;
        const mission = missionData[missionKey];

        if (!mission) return;

        openModal(mission.title, mission.text);
    });
});

startMissionButton.addEventListener("click", () => {
    openModal(
        "Start a Mission",
        "Mission Control is online. Choose an objective, define the next action, and begin the climb."
    );
});

journalButton.addEventListener("click", () => {
    openModal(
        "Journal",
        "The journal system is ready to be expanded. Soon this will let you save field notes, decisions, wins, setbacks, and reflections."
    );
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

modalAction.addEventListener("click", () => {
    closeModal();

    document
        .getElementById("missions")
        .scrollIntoView({ behavior: "smooth" });
});
