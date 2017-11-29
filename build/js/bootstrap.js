const feather = require('feather-icons');

$(document).ready(function() {
  feather.replace();

  // Sidebar
  $('.sidebar-toggle').on('click', function(e) {
    e.preventDefault();
    $('.adminx-sidebar').toggleClass('in');
  });
});
