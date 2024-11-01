document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".checkbox");
  const overlay = document.querySelector(".overlay");
  const body = document.body;
  const buttons = document.querySelectorAll(".menu-hamburger button");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      overlay.style.display = "block";
      body.classList.add("no-scroll");
    } else {
      overlay.style.display = "none";
      body.classList.remove("no-scroll");
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        checkbox.checked = false; // Uncheck the checkbox
        overlay.style.display = "none"; // Hide the overlay
        body.classList.remove("no-scroll"); // Enable scrolling

        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

//
