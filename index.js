// Скролл к соответствующей странице при клике на ссылку в навигационном меню
document.querySelectorAll('nav a').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});