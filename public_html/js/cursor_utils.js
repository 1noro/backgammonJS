// cursor_utils.js
// (c) inoro 2019 GPL v3

function get_canvas_start_point() {
    var
        bgc = document.getElementById('backgammonCanvas'),
        bgc_satrt_point_x = (window.innerWidth-bgc.offsetWidth)/2,
        bgc_satrt_point_y = window.bgjs.canvas_marginTop;
    return {x:bgc_satrt_point_x, y:bgc_satrt_point_y};
}

function get_cursor(e) {
	// document.getElementById('cursorX').value = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	// document.getElementById('cursorY').value = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    var
        cursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
        cursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    console.log('[CLIC] x: '+cursorX+', y: '+cursorY);
}
