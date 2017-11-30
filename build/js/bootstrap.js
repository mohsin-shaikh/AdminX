// todo
// i'd rather have this in vanilla JS so you can take this to non jquery environments


document.addEventListener("DOMContentLoaded", function() {
  // Sidebar toggle
  const toggleElements = document.querySelectorAll('.sidebar-toggle');

  Array.from(toggleElements).forEach(element => {
    element.addEventListener('click', event => {
      document.querySelectorAll('.adminx-sidebar')[0].classList.toggle('in');
    });
  });

  // Highlight table rows when selected
  const rowCheckboxes = document.querySelectorAll('.table-select-row');

  Array.from(rowCheckboxes).forEach(element => {
    element.addEventListener('change', event => {
      if (element.checked) {
        element.closest('tr').classList.add('selected');
      } else {
        element.closest('tr').classList.remove('selected');
      }
    });
  });
});

$(document).ready(function() {

  // Highlight row when selected
  /* $('tr .table-select-row').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      $(this).closest('tr').addClass('selected');
    } else {
      $(this).closest('tr').removeClass('selected');

      const selectAll = $(this).closest('table').find('.table-select-all');

      if(selectAll.hasClass('all-selected')) {
        selectAll.removeClass('all-selected');
        selectAll.prop('checked', false);
      }
    }
  }); */

  // check all checkboxes in table
  $('tr .table-select-all').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
      $(this).closest('table').find('.table-select-row').prop('checked', true).change();
      $(this).addClass('all-selected');
    } else {
      $(this).closest('table').find('.table-select-row').prop('checked', false).change();
      $(this).removeClass('all-selected');
    }
  });
});
