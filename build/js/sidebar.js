document.addEventListener("DOMContentLoaded", function() {
  // Sidebar toggle
  const toggleElements = document.querySelectorAll('.sidebar-toggle');

  Array.from(toggleElements).forEach(element => {
    element.addEventListener('click', event => {
      document.querySelectorAll('.adminx-sidebar')[0].classList.toggle('in');
    });
  });
});