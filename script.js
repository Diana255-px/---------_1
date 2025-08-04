// Highlight active nav link on scroll + Smooth scroll + Night mode with memory

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section, #gallery, #contact");
  const navLinks = document.querySelectorAll("nav a");

  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Active link switching on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Night mode toggle
  const nightBtn = document.createElement("button");
  nightBtn.innerText = "🌓";
  nightBtn.classList.add("night-toggle");
  document.body.appendChild(nightBtn);

  // Load night mode from localStorage
  if (localStorage.getItem("theme") === "night") {
    document.body.classList.add("night");
  }

  nightBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");
    const theme = document.body.classList.contains("night") ? "night" : "light";
    localStorage.setItem("theme", theme);
  });
});
