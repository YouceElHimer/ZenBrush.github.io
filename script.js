const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.feature, .step, .testimonial');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target); // stop observing once animated
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});


window.addEventListener("load", () => {
      // Wait for fill animation
      setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("main-content");

        loader.classList.add("fade-out");

        // After loader fades out, show and fade in content
        setTimeout(() => {
          loader.style.display = "none";
          content.classList.add("visible");
        }, 800); // match loader fade-out time
      }, 2000); // match fill animation time
});