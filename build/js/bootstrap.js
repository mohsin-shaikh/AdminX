import feather from 'feather-icons';

$(document).ready(function() {
  feather.replace();

  // Sidebar
  $('.sidebar-toggle').on('click', function(e) {
    e.preventDefault();
    $('.adminx-sidebar').toggleClass('in');
  });

  // Highlight row when selected
  $('tr .table-select-row').change(function() {
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
  });

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
