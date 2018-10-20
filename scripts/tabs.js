$(document).on("click", ".motw_move_header", function() {
  $('#motw_active_move').css('display', 'block');
  $('.motw_move_entry').css('display', 'block');
  let content = $(this).closest('.motw_move_entry').html();
  $(this).closest('.motw_move_entry').css('display', 'none');
  $('#motw_active_move').html(content);
  $('#motw_active_move').find('.motw_move_description').css('display', 'block');
  $('#motw_active_move').find('.motw_movelist_plus').remove();
});