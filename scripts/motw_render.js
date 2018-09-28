$('body').append('<link rel="stylesheet" href="css/motw.css" type="text/css" />');

HTML_TEMPLATE_CACHE = {};

loadTemplate = function(path) {
    if ( path in HTML_TEMPLATE_CACHE ) return HTML_TEMPLATE_CACHE[path];
    let html = $.get({
        url: path,
        dataType: 'html',
        async: false
    }).responseText;
    HTML_TEMPLATE_CACHE[path] = html;
    return html;
};

sync.render("motw_sheet", function(obj, app, scope) {
    let html = loadTemplate("html/motwsheet.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    let activemove = rendered.find(".motw_moves .motw_move_entry:last-child");
    activemove.css('display', 'none');
    let activeslot = rendered.find('#motw_active_move');
    activeslot.html(activemove.html());
    activeslot.css('display', 'block');
      activeslot.find('.motw_move_description').css('display', 'block');
    if (activemove.find('.motw_move_name').length === 0){
      activeslot.css('display', 'none');
    }
    activeslot.find('.motw_movelist_plus').remove();
    return rendered;
});

sync.render("motw_monster", function(obj, app, scope) {
    let html = loadTemplate("html/motwmonster.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});


sync.render("motw_move", function(obj, app, scope) {
    let html = loadTemplate("html/motw_move.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});

sync.render("motw_item", function(obj, app, scope) {
    let html = loadTemplate("html/motw_item.html");
    let rendered = sync.render("ui_processUI")(obj, app, {display : html});
    return rendered;
});
