document.addEventListener("DOMContentLoaded", function () {
  // Elemente pentru overlay-ul colete
  var openButtonC = document.getElementById("openC");
  var closeButtonC = document.getElementById("closeC");
  var overlayC = document.getElementById("overlay");

  // Elemente pentru overlay-ul transport
  var openButtonT = document.getElementById("openT");
  var closeButtonT = document.getElementById("closeT");
  var overlayT = document.getElementById("overlayT");

  // Elemente pentru overlay-ul platform
  var openButtonP = document.getElementById("openP");
  var closeButtonP = document.getElementById("closeP");
  var overlayP = document.getElementById("overlayP");

  // Elemente pentru overlay-ul despre
  var openButtonD = document.getElementById("openD");
  var closeButtonD = document.getElementById("closeD");
  var overlayD = document.getElementById("overlayD");

  var body = document.body;
  var scrollPosition = 0;

  // Funcție pentru a deschide un overlay
  function openOverlay(overlay) {
    // Memorează poziția curentă de scroll
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Adaugă clasa pentru a dezactiva derularea
    body.classList.add("no-scroll");

    // Setează poziția de scroll pe overlay
    overlay.classList.add("show");

    // Blochează derularea paginii
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
  }

  // Funcție pentru a închide un overlay
  function closeOverlay(overlay) {
    // Elimină clasa pentru a activa derularea
    body.classList.remove("no-scroll");

    // Restabilește poziția de scroll
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, scrollPosition);

    // Închide overlay-ul
    overlay.classList.remove("show");
  }

  // Evenimente pentru overlay-ul colete
  if (openButtonC && closeButtonC && overlayC) {
    openButtonC.addEventListener("click", function () {
      openOverlay(overlayC);
    });

    closeButtonC.addEventListener("click", function () {
      closeOverlay(overlayC);
    });
  }

  // Evenimente pentru overlay-ul transport
  if (openButtonT && closeButtonT && overlayT) {
    openButtonT.addEventListener("click", function () {
      openOverlay(overlayT);
    });

    closeButtonT.addEventListener("click", function () {
      closeOverlay(overlayT);
    });
  }

  // Evenimente pentru overlay-ul platform
  if (openButtonP && closeButtonP && overlayP) {
    openButtonP.addEventListener("click", function () {
      openOverlay(overlayP);
    });

    closeButtonP.addEventListener("click", function () {
      closeOverlay(overlayP);
    });
  }

  // Evenimente pentru overlay-ul despre
  if (openButtonD && closeButtonD && overlayD) {
    openButtonD.addEventListener("click", function () {
      openOverlay(overlayD);
    });

    closeButtonD.addEventListener("click", function () {
      closeOverlay(overlayD);
    });
  }
});

const selectLocationBtn = document.querySelector(".locatieColete");
const locationOptions = document.querySelector(".locColete");
const locationError = document.querySelector(".locerrColete");

const submitBtn = document.querySelector(".submitColete");
