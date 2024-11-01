document.addEventListener("DOMContentLoaded", function () {
  const selectServiceBtn = document.querySelector(".mesajPrincipal");
  const serviceOptions = document.querySelector(".optiuniPrincipal");
  const serviceError = document.querySelector(".eroarePrincipal");

  const selectLocationBtn = document.querySelector(".locatiePrincipal");
  const locationOptions = document.querySelector(".locPrincipal");
  const locationError = document.querySelector(".locerrPrincipal");

  const submitBtn = document.querySelector(".submitPrincipal");

  // Funcție pentru a deschide și închide opțiunile de servicii
  selectServiceBtn.addEventListener("click", function () {
    serviceOptions.classList.toggle("show");
    serviceError.style.display = "none";
  });

  // Funcție pentru a deschide și închide opțiunile de locație
  selectLocationBtn.addEventListener("click", function () {
    locationOptions.classList.toggle("show");
    locationError.style.display = "none";
  });

  // Adăugăm event listener pentru opțiunile de servicii
  serviceOptions.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", function () {
      selectServiceBtn.innerHTML = `${this.textContent} <img src="src/images/arrow.svg" alt="" class="arrow">`;
      serviceOptions.classList.remove("show");
      serviceError.style.display = "none";
    });
  });

  // Adăugăm event listener pentru opțiunile de locație
  locationOptions.querySelectorAll("button").forEach((option) => {
    option.addEventListener("click", function () {
      selectLocationBtn.innerHTML = `${this.textContent} <img src="src/images/arrow.svg" alt="" class="arrow">`;
      locationOptions.classList.remove("show");
      locationError.style.display = "none";
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

  // Funcția pentru trimiterea mesajului
  submitBtn.addEventListener("click", function () {
    const service = selectServiceBtn.textContent.trim();
    const location = selectLocationBtn.textContent.trim();

    let message = "";

    if (service === "Persoane") {
      message = `Salut! Vreau să planific o călătorie către ${location} și aș aprecia informații despre opțiunile disponibile. Aștept cu interes detalii.`;
    } else if (service === "Colete") {
      message = `Salut! Am un colet pe care aș dori să-l expediez către ${location}. Îmi puteți oferi informații despre servicii și costuri? Mulțumesc!`;
    } else if (service === "Platformă") {
      message = `Salut! Am nevoie de transport pentru o mașină în ${location}. Care sunt opțiunile disponibile și condițiile? Mulțumesc!`;
    }

    // Verificare pentru a afișa eroare dacă nu este selectat serviciul sau locația
    let serviceSelected = service !== "Serviciu";
    let locationSelected = location !== "Locația";

    if (!serviceSelected) {
      serviceError.style.display = "block";
    } else {
      serviceError.style.display = "none";
    }

    if (!locationSelected) {
      locationError.style.display = "block";
    } else {
      locationError.style.display = "none";
    }

    if (serviceSelected && locationSelected) {
      const whatsappURL = `https://wa.me/40752612413?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank"); 
    }
  });
});
