document.addEventListener("DOMContentLoaded", function () {
    const testimonialePopup = document.querySelector(".testimoniale");
    const imgElement = document.querySelector(".testimonialimg");
    const commentElement = document.querySelector(".testimonial-comentariu");
    const nameElement = document.querySelector(".info-nume");
    const starsElement = document.querySelector(".info-stele");
    const progressBar = document.querySelector(".progress-bar");
  
    const testimonials = [
      { image: "person1.avif", name: "Ana M.", stars: 5, comment: "Seriozitate și profesionalism" },
      { image: "person2.avif", name: "Ion C.", stars: 4, comment: "Foarte mulțumit" },
      { image: "person3.avif", name: "Maria L.", stars: 5, comment: "Calitate și promptitudine" },
      { image: "person4.avif", name: "George P.", stars: 4, comment: "Servicii excelente" },
      { image: "person5.avif", name: "Elena D.", stars: 5, comment: "Recomand cu încredere" },
      { image: "person6.avif", name: "Radu F.", stars: 5, comment: "Profesionalism de top" },
      { image: "person7.avif", name: "Ioana G.", stars: 4, comment: "Promptitudine garantată" },
      { image: "person8.avif", name: "Mihai S.", stars: 5, comment: "Excelent pe toată linia" },
      { image: "person9.avif", name: "Oana V.", stars: 4, comment: "Recomand cu drag" },
      { image: "person10.avif", name: "Cristina B.", stars: 5, comment: "Experiență foarte bună" }
    ];
  
    function updateTestimonial() {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      const testimonial = testimonials[randomIndex];
  
      imgElement.style.backgroundImage = `url('src/images/${testimonial.image}')`;
      commentElement.textContent = testimonial.comment;
      nameElement.textContent = testimonial.name;
  
      starsElement.innerHTML = "";
      for (let i = 0; i < testimonial.stars; i++) {
        const star = document.createElement("img");
        star.src = "src/images/star.svg";
        star.alt = "star";
        starsElement.appendChild(star);
      }
  
      // Resetăm și pornim animația barei de progres
      progressBar.style.width = "0%";
      setTimeout(() => {
        progressBar.style.width = "100%";
      }, 100); // Pornim animația după o mică întârziere
    }
  
    // Afișăm primul testimonial după 5 secunde
    setTimeout(() => {
      testimonialePopup.classList.add("show");
      updateTestimonial();
  
      // După 5 secunde, ascundem testimonialul
      setTimeout(() => {
        testimonialePopup.classList.remove("show");
        progressBar.style.width = "0%";
      }, 5000);
    }, 7000);
  
    // Interval pentru afișarea testimonialelor
    setInterval(() => {
      setTimeout(() => {
        testimonialePopup.classList.add("show");
        updateTestimonial();
      }, 10000);
  
      setTimeout(() => {
        testimonialePopup.classList.remove("show");
        progressBar.style.width = "0%";
      }, 15000);
    }, 15000);
  });
  