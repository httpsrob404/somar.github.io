// Funcție pentru a converti textul în număr
function parseNumber(text) {
  const number = parseFloat(text.replace(/[^0-9.]/g, ""));
  if (text.includes("k")) {
    return number * 1000;
  }
  return number;
}

// Funcție pentru a formata numărul
function formatNumber(number) {
  if (number >= 1000) {
    // Formatează numărul pentru a avea o zecimală, dar elimină zecimalele dacă sunt 0
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return number.toString();
}

// Funcția care animă numărul
function animateCounter(element, targetNumber) {
  let start = 0;
  // Durata animației este proporțională cu valoarea țintă
  let duration = Math.min(2000 + targetNumber / 10, 10000); // Durata minimă 2000ms, maximă 10000ms
  let startTime = null;

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    let progress = currentTime - startTime;
    let currentNumber = Math.min(
      Math.floor((progress / duration) * targetNumber),
      targetNumber
    );

    element.textContent = formatNumber(currentNumber);

    if (currentNumber < targetNumber) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Funcția principală care inițiază observația
function setupCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const initialText = counter.textContent;
    const initialNumber = parseNumber(initialText);
    const targetNumber = Math.floor(initialNumber); // Căutăm numărul cel mai apropiat întreg

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target, targetNumber);
            observer.unobserve(entry.target); // Nu mai avem nevoie să observăm acest element
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger la 50% vizibilitate

    observer.observe(counter);
  });
}

// Apelăm funcția pentru a iniția observația
setupCounters();
