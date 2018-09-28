$(document).on("click", "#motw_story_tab", function() {
  $('.motw_panel').removeClass('motw_panel_active');
  $('#motw_story').addClass('motw_panel_active');
  $('#motw_story_tab').addClass('motw_tab_active');
});

$(document).on("click", "#motw_background_tab", function() {
  $('.motw_panel').removeClass('motw_panel_active');
  $('#motw_background').addClass('motw_panel_active');
  $('#motw_background_tab').addClass('motw_tab_active');
});

$(document).on("click", "#motw_notes_tab", function() {
  $('.motw_panel').removeClass('motw_panel_active');
  $('#motw_notes').addClass('motw_panel_active');
  $('#motw_notes_tab').addClass('motw_tab_active');
});

$(document).on("click", "#motw_improvements_tab", function() {
  $('.motw_panel').removeClass('motw_panel_active');
  $('.motw_tab').removeClass('motw_tab_active');
  $('#motw_improvements').addClass('motw_panel_active');
  $('#motw_improvements_tab').addClass('motw_tab_active');
});

$(document).on("click", ".motw_move_header", function() {
  $('#motw_active_move').css('display', 'block');
  $('.motw_move_entry').css('display', 'block');
  let content = $(this).closest('.motw_move_entry').html();
  $(this).closest('.motw_move_entry').css('display', 'none');
  $('#motw_active_move').html(content);
  $('#motw_active_move').find('.motw_move_description').css('display', 'block');
  $('#motw_active_move').find('.motw_movelist_plus').remove();
});

$(document).on("click", "#sheet-popout-undefined-confirm", function() {
  runCommand("music", {src : "/sounds/dice.mp3"});
});

$(document).on("click", "#motw_moves", function() {
  $('.motw_moves').css('display', 'block');
  $('.motw_inventory').css('display', 'none');
});

$(document).on("click", "#motw_inventory", function() {
    $('.motw_moves').css('display', 'none');
    $('.motw_inventory').css('display', 'block');
});
