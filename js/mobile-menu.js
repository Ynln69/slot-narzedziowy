document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const headerNav = document.querySelector(".header-nav");
  const menuIcon = mobileMenuBtn.querySelector("i");

  if (mobileMenuBtn && headerNav) {
    mobileMenuBtn.addEventListener("click", () => {
      headerNav.classList.toggle("active");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  }
});
