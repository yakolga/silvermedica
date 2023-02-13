window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__ul"),
    menuItem = document.querySelectorAll(".header__li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header__nav_active");
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      hamburger.classList.toggle("header__hamburger_active");
      menu.classList.toggle("header__nav_active");
    });
  });

  window.onscroll = function changeHeader() {
    const header = document.querySelector('.header'),
      headerLink = document.querySelectorAll('.header__link'),
      hamburgerSpan = document.querySelectorAll('.header__hamburger span');

    if (window.pageYOffset > 100) {
      header.style.backgroundColor = 'var(--accent-color)';
      header.style.padding = '10px 0';
      headerLink.forEach(link => {
        link.style.color = "var(--white-color)"
      });
      hamburgerSpan.forEach(span=> {
        span.style.backgroundColor = "var(--white-color)"
      });
    } else {
      headerLink.forEach(link => {
        link.style.color = "var(--grey-deep)"
      });
      hamburgerSpan.forEach(span => {
        span.style.backgroundColor = "var(--grey-deep)"
      });
      header.style.padding = '63px 0';
      header.style.backgroundColor = 'transparent';
      if (window.screen.width < 762) {
        header.style.padding = '20px 0';
        headerLink.forEach(link => {
          link.style.color = "var(--white-color)"
        });
      }
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
