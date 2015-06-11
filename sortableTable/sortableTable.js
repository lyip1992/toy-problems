/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  $('th').on('click', function() {
    var getCellValue = function(row, index) {
      return $(row).children('td').eq(index).html();
    };

    var compare = function(index) {
      return function(a, b) {
        var valueA = getCellValue(index, a);
        var valueB = getCellValue(index, b);
        return $.isNumeric(valueA) && $.isNumeric(valueB) ? valueA - valueB : valueA.localeCompare(valueB);
      };
    };

    var table = $(this).parents('table');
    var rows = table.find('tr:gt(0)').toArray().sort(compare($(this).index()));

    // more work to be done over here

  });
});
