document.addEventListener("DOMContentLoaded", function () {
  // Funcții pentru "Colete"
  const selectLocationBtnColete = document.querySelector(".locatieColete");
  const locationOptionsColete = document.querySelector(".locColete");
  const locationErrorColete = document.querySelector(".locerrColete");
  const submitBtnColete = document.querySelector(".submitColete");

  // Funcție pentru a deschide și închide opțiunile de locație
  selectLocationBtnColete.addEventListener("click", function () {
    locationOptionsColete.classList.toggle("show");
    locationErrorColete.style.display = "none";
  });

  // Adăugăm event listener pentru opțiunile de locație
  locationOptionsColete.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", function () {
      selectLocationBtnColete.innerHTML = `${this.textContent} <img src="src/images/arrow.svg" alt="" class="arrow">`;
      locationOptionsColete.classList.remove("show");
      locationErrorColete.style.display = "none";
    });
  });

  // Ascunde opțiunile dacă se face clic în afara lor
  document.addEventListener("click", function (event) {
    const buttonContainers = document.querySelectorAll(".button-container");
    buttonContainers.forEach((container) => {
      if (!container.contains(event.target)) {
        container.querySelector(".options").classList.remove("show");
      }
    });
  });

  // Funcția pentru trimiterea mesajului la "Colete"
  submitBtnColete.addEventListener("click", function () {
    const location = selectLocationBtnColete.textContent.trim();

    // Verifică dacă a fost selectată o locație
    if (location === "Alege Locația" || location === "") {
      locationErrorColete.style.display = "block"; // Afișează eroarea dacă locația nu este selectată
    } else {
      locationErrorColete.style.display = "none"; // Ascunde eroarea dacă locația este selectată
      const message = `Salut! Am un colet pe care aș dori să-l expediez către ${location}. Îmi puteți oferi informații despre servicii și costuri? Mulțumesc!`;
      const whatsappURL = `https://wa.me/40752612413?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank"); // Deschide WhatsApp
    }
  });

  // Funcții pentru "Transport"
  const selectLocationBtnTransport = document.querySelector(".locatieTransport");
  const locationOptionsTransport = document.querySelector(".locTransport");
  const locationErrorTransport = document.querySelector(".locerrTransport");
  const submitBtnTransport = document.querySelector(".submitTransport");

  // Funcție pentru a deschide și închide opțiunile de locație
  selectLocationBtnTransport.addEventListener("click", function () {
    locationOptionsTransport.classList.toggle("show");
    locationErrorTransport.style.display = "none";
  });

  // Adăugăm event listener pentru opțiunile de locație
  locationOptionsTransport.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", function () {
      selectLocationBtnTransport.innerHTML = `${this.textContent} <img src="src/images/arrow.svg" alt="" class="arrow">`;
      locationOptionsTransport.classList.remove("show");
      locationErrorTransport.style.display = "none";
    });
  });

  // Funcția pentru trimiterea mesajului la "Transport"
  submitBtnTransport.addEventListener("click", function () {
    const location = selectLocationBtnTransport.textContent.trim();

    // Verifică dacă a fost selectată o locație
    if (location === "Alege Locația" || location === "") {
      locationErrorTransport.style.display = "block"; // Afișează eroarea dacă locația nu este selectată
    } else {
      locationErrorTransport.style.display = "none"; // Ascunde eroarea dacă locația este selectată
      const message = `Salut! Vreau să planific o călătorie către ${location} și aș aprecia informații despre opțiunile disponibile. Aștept cu interes detalii.`;
      const whatsappURL = `https://wa.me/40752612413?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank"); // Deschide WhatsApp
    }
  });

  // Funcții pentru "Platformă"
  const selectLocationBtnPlatforma = document.querySelector(".locatiePlatforma");
  const locationOptionsPlatforma = document.querySelector(".locPlatforma");
  const locationErrorPlatforma = document.querySelector(".locerrPlatforma");
  const submitBtnPlatforma = document.querySelector(".submitPlatforma");

  // Funcție pentru a deschide și închide opțiunile de locație
  selectLocationBtnPlatforma.addEventListener("click", function () {
    locationOptionsPlatforma.classList.toggle("show");
    locationErrorPlatforma.style.display = "none";
  });

  // Adăugăm event listener pentru opțiunile de locație
  locationOptionsPlatforma.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", function () {
      selectLocationBtnPlatforma.innerHTML = `${this.textContent} <img src="src/images/arrow.svg" alt="" class="arrow">`;
      locationOptionsPlatforma.classList.remove("show");
      locationErrorPlatforma.style.display = "none";
    });
  });

  // Funcția pentru trimiterea mesajului la "Platformă"
  submitBtnPlatforma.addEventListener("click", function () {
    const location = selectLocationBtnPlatforma.textContent.trim();

    // Verifică dacă a fost selectată o locație
    if (location === "Alege Locația" || location === "") {
      locationErrorPlatforma.style.display = "block"; // Afișează eroarea dacă locația nu este selectată
    } else {
      locationErrorPlatforma.style.display = "none"; // Ascunde eroarea dacă locația este selectată
      const message = `Salut! Am nevoie de transport pentru o mașină în ${location}. Care sunt opțiunile disponibile și condițiile? Mulțumesc!`;
      const whatsappURL = `https://wa.me/40752612413?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank"); // Deschide WhatsApp
    }
  });
});
