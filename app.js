// =========================
// Sélecteurs DOM
// =========================
const header = document.querySelector("header");
const headerTop = document.querySelector(".headerTop");
const headerNav = document.querySelector(".headerNav");

const btnMenu = document.getElementById("menu");
const btnMenuItem = document.querySelector(".btnMenuItem");
const navUl = document.querySelector(".navUl");

const menuLinks = document.querySelectorAll(".menu-link");
const linkSectAll = document.querySelectorAll(".linkSect");

const it1 = document.querySelector(".it1");
const it2 = document.querySelector(".it2");
const it3 = document.querySelector(".it3");

const illus = [
  document.getElementById("sectIllus3"),
  document.getElementById("sectIllus4"),
  document.getElementById("sectIllus5"),
  document.getElementById("sectIllus6"),
  document.getElementById("sectIllus7"),
];

const dots = document.querySelectorAll("#dotNav div");
const backToTop = document.getElementById("backToTop");
const favicon32 = document.getElementById("favicon32");
const favicon96 = document.getElementById("favicon96");
const favicon192 = document.getElementById("favicon192");
const faviconIco = document.getElementById("faviconIco");

const themes = {
  pink: {
    favicon32: "./assets/logo/favicon/faviconZen/faviconZenDarkPink2-32.png",
    favicon96: "./assets/logo/favicon/faviconZen/faviconZenDarkPink2-96.png",
    favicon192: "./assets/logo/favicon/faviconZen/faviconZenDarkPink2-192.png",
    faviconIco: "./assets/logo/favicon/faviconZen/faviconDarkPink2.ico",

    sectIllus3: {
      src: "./assets/meridiensPortrait-320.webp",
      srcset: `
    ./assets/meridiensPortrait-320.webp 320w,
    ./assets/meridiensPortrait-640.webp 640w
    `,
    },

    sectIllus4: {
      src: "./assets/soinsPourTous-320.webp",
      srcset: `
    ./assets/soinsPourTous-320.webp 320w,
    ./assets/soinsPourTous-640.webp 640w
    `,
    },

    sectIllus5: {
      src: "./assets/seanceResc-320.webp",
      srcset: `
    ./assets/seanceResc-320.webp 320w,
    ./assets/seanceResc-640.webp 640w
    `,
    },

    sectIllus6: {
      src: "./assets/tarification-320.webp",
      srcset: `
    ./assets/tarification-320.webp 320w,
    ./assets/tarification-640.webp 640w
    `,
    },

    sectIllus7: {
      src: "./assets/questions-320.webp",
      srcset: `
    ./assets/questions-320.webp 320w,
    ./assets/questions-640.webp 640w
    `,
    },
  },

  blue: {
    favicon32: "./assets/logo/favicon/faviconZen/faviconZenDarkBlue2-32.png",
    favicon96: "./assets/logo/favicon/faviconZen/faviconZenDarkBlue2-96.png",
    favicon192: "./assets/logo/favicon/faviconZen/faviconZenDarkBlue2-192.png",
    faviconIco: "./assets/logo/favicon/faviconZen/faviconDarkBlue2.ico",

    sectIllus3: {
      src: "./assets/meridiensPortrait-320.webp",
      srcset: `
    ./assets/meridiensPortrait-320.webp 320w,
    ./assets/meridiensPortrait-640.webp 640w
    `,
    },

    sectIllus4: {
      src: "./assets/soinsPourTous-320.webp",
      srcset: `
    ./assets/soinsPourTous-320.webp 320w,
    ./assets/soinsPourTous-640.webp 640w
    `,
    },

    sectIllus5: {
      src: "./assets/seanceResc-320.webp",
      srcset: `
    ./assets/seanceResc-320.webp 320w,
    ./assets/seanceResc-640.webp 640w
    `,
    },

    sectIllus6: {
      src: "./assets/tarification-320.webp",
      srcset: `
    ./assets/tarification-320.webp 320w,
    ./assets/tarification-640.webp 640w
    `,
    },

    sectIllus7: {
      src: "./assets/questions-320.webp",
      srcset: `
    ./assets/questions-320.webp 320w,
    ./assets/questions-640.webp 640w
    `,
    },
  },

  green: {
    favicon32: "./assets/logo/favicon/faviconZen/faviconZenDarkGreen2-32.png",
    favicon96: "./assets/logo/favicon/faviconZen/faviconZenDarkGreen2-96.png",
    favicon192: "./assets/logo/favicon/faviconZen/faviconZenDarkGreen2-192.png",
    faviconIco: "./assets/logo/favicon/faviconZen/faviconDarkGreen2.ico",

    sectIllus3: {
      src: "./assets/realistic/meridiensPortrait-320.webp",
      srcset: `
    ./assets/realistic/meridiensPortrait-320.webp 320w,
    ./assets/realistic/meridiensPortrait-640.webp 640w
    `,
    },

    sectIllus4: {
      src: "./assets/realistic/soinsPourTous-320.webp",
      srcset: `
    ./assets/realistic/soinsPourTous-320.webp 320w,
    ./assets/realistic/soinsPourTous-640.webp 640w
    `,
    },

    sectIllus5: {
      src: "./assets/realistic/seanceResc-320.webp",
      srcset: `
    ./assets/realistic/seanceResc-320.webp 320w,
    ./assets/realistic/seanceResc-640.webp 640w
    `,
    },

    sectIllus6: {
      src: "./assets/realistic/tarification-320.webp",
      srcset: `
    ./assets/realistic/tarification-320.webp 320w,
    ./assets/realistic/tarification-640.webp 640w
    `,
    },

    sectIllus7: {
      src: "./assets/realistic/questions-320.webp",
      srcset: `
    ./assets/realistic/questions-320.webp 320w,
    ./assets/realistic/questions-640.webp 640w
    `,
    },
  },

  earthy: {
    favicon32: "./assets/logo/favicon/faviconZen/faviconZenGrey-32.png",
    favicon96: "./assets/logo/favicon/faviconZen/faviconZenGrey-96.png",
    favicon192: "./assets/logo/favicon/faviconZen/faviconZenGrey-192.png",
    faviconIco: "./assets/logo/favicon/faviconZen/faviconGrey.ico",

    sectIllus3: {
      src: "./assets/realistic/meridiensPortrait-320.webp",
      srcset: `
    ./assets/realistic/meridiensPortrait-320.webp 320w,
    ./assets/realistic/meridiensPortrait-640.webp 640w
    `,
    },

    sectIllus4: {
      src: "./assets/realistic/soinsPourTous-320.webp",
      srcset: `
    ./assets/realistic/soinsPourTous-320.webp 320w,
    ./assets/realistic/soinsPourTous-640.webp 640w
    `,
    },

    sectIllus5: {
      src: "./assets/realistic/seanceResc-320.webp",
      srcset: `
    ./assets/realistic/seanceResc-320.webp 320w,
    ./assets/realistic/seanceResc-640.webp 640w
    `,
    },

    sectIllus6: {
      src: "./assets/realistic/tarification-320.webp",
      srcset: `
    ./assets/realistic/tarification-320.webp 320w,
    ./assets/realistic/tarification-640.webp 640w
    `,
    },

    sectIllus7: {
      src: "./assets/realistic/questions-320.webp",
      srcset: `
    ./assets/realistic/questions-320.webp 320w,
    ./assets/realistic/questions-640.webp 640w
    `,
    },
  },
};
const themeBtns = document.querySelectorAll(".themeBtn button");
const themeBlue = document.getElementById("themeBlue");
const themePink = document.getElementById("themePink");
const themeGreen = document.getElementById("themeGreen");
const themeEarthy = document.getElementById("themeEarthy");
// =========================
// Fonctions utilitaires
// =========================

function resizeSmall(image) {
  image.style.transform = "scale(1)";
}

function resizeBig(image) {
  image.style.transform = "scale(2)";
}

function displayNav() {
  if (window.innerWidth > 1500) return;

  navUl.classList.toggle("navUlDisplay");
  it1.classList.toggle("rotateIt1");
  btnMenuItem.classList.toggle("switchStyle");
}

function displayNotNav() {
  if (window.innerWidth > 1500) return;

  navUl.classList.remove("navUlDisplay");
  it1.classList.remove("rotateIt1");
  btnMenuItem.classList.remove("switchStyle");
}

function scrollChecker() {
  const mobile = window.innerWidth <= 500;
  const top = window.scrollY === 0;

  header.style.top = "0";

  if (mobile) {
    headerTop.style.top = top ? "0" : "-134px";
    headerNav.style.top = top ? "134px" : "0";
  } else {
    headerTop.style.top = top ? "0" : "-84px";
    headerNav.style.top = top ? "84px" : "0";
  }
}

// animation au scroll
function showScrollOverlay() {
  scrollOverlay?.classList.add("active");
}

function hideScrollOverlay() {
  scrollOverlay?.classList.remove("active");
}

function smoothScrollWithOverlay(target) {
  showScrollOverlay();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  let lastPos = window.scrollY;
  let stableFrames = 0;

  function checkEndScroll() {
    const currentPos = window.scrollY;

    if (Math.abs(currentPos - lastPos) < 1) {
      stableFrames++;
    } else {
      stableFrames = 0;
    }

    if (stableFrames > 10) {
      hideScrollOverlay();
      return;
    }

    lastPos = currentPos;
    requestAnimationFrame(checkEndScroll);
  }

  requestAnimationFrame(checkEndScroll);
}

// =========================
// fonction changement thème (favicon et images)
// =========================
function updateFavicons(theme) {
  const config = themes[theme];

  favicon32.href = config.favicon32;
  favicon96.href = config.favicon96;
  favicon192.href = config.favicon192;
  faviconIco.href = config.faviconIco;
}

function updateImages(theme) {
  const config = themes[theme];

  for (let i = 3; i <= 7; i++) {
    const img = document.getElementById(`sectIllus${i}`);

    if (!img || !config[`sectIllus${i}`]) continue;

    img.src = config[`sectIllus${i}`].src;
    img.srcset = config[`sectIllus${i}`].srcset;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  updateFavicons(theme);
  updateImages(theme);

  sessionStorage.setItem("theme", theme);
}

// =========================
// Intersection Observer
// =========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const sectionId = entry.target.id;
      const sectionNum = sectionId.substring(8);

      menuLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href").substring(1) === sectionId,
        );
      });

      dots.forEach((dot) => {
        dot.classList.toggle("active", dot.dataset.section === sectionId);
      });

      illus.forEach((illusItem) => {
        const illusNum = illusItem.id.substring(9);

        if (illusNum === sectionNum) {
          resizeSmall(illusItem);
        } else {
          resizeBig(illusItem);
        }
      });
    });
  },
  {
    threshold: 0.3,
  },
);

// =========================
// Initialisation
// =========================

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (!href.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    menuLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    smoothScrollWithOverlay(target);
  });
});

linkSectAll.forEach((section) => {
  observer.observe(section);
});

btnMenu?.addEventListener("click", displayNav);

// =========================
// Scroll optimisé
// =========================

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrollChecker();
      displayNotNav();
      ticking = false;
    });

    ticking = true;
  }
  backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
});

backToTop.addEventListener("click", () => {
  showScrollOverlay();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  let lastPos = window.scrollY;
  let stableFrames = 0;

  function checkEndScroll() {
    const currentPos = window.scrollY;

    if (Math.abs(currentPos - lastPos) < 1) {
      stableFrames++;
    } else {
      stableFrames = 0;
    }

    if (stableFrames > 10) {
      hideScrollOverlay();
      return;
    }

    lastPos = currentPos;
    requestAnimationFrame(checkEndScroll);
  }

  requestAnimationFrame(checkEndScroll);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const target = document.getElementById(dot.dataset.section);

    if (!target) return;

    smoothScrollWithOverlay(target);
  });
});

// =========================
// changement de thème au clic
// =========================
// Au chargement
const savedTheme = sessionStorage.getItem("theme") || "blue";

document.documentElement.dataset.theme = savedTheme;
applyTheme(savedTheme);

// Bouton

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
});

// État initial
scrollChecker();
