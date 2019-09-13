// cursor_actions.js
// (c) inoro 2019 GPL v3

function check_peak(cursorX, cursorY) {
    var
        ctx = window.bgjs.ctx,
        game_peaks = window.bgjs.game_peaks,
        vpeak = window.bgjs.vpeak,
        m = window.bgjs.m;
    var i = 0;
    while (i < vpeak.length) {
        if (
            (cursorX >= vpeak[i][0][0]*m && cursorX <= vpeak[i][1][0]*m) &&
            (cursorY >= vpeak[i][0][1]*m && cursorY <= vpeak[i][1][1]*m)
        ) {
            // console.log('[INFO] Pulsaste en el pico: '+game_peaks[i]+', i:'+i);
            // console.log('[INFO] Pulsaste en el pico: '+game_peaks[i]);
            window.bgjs.no_peak_selected = true;
            move_states(game_peaks[i]);
            break;
        }
        i++;
    }
}

function get_cursor_rel(e) {
    var
        cursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
        cursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    // console.log('[CLIC] rel_x: '+(cursorX-get_canvas_start_point().x)+', rel_y: '+(cursorY-get_canvas_start_point().y));
    cursorX_rel = cursorX-get_canvas_start_point().x;
    cursorY_rel = cursorY-get_canvas_start_point().y;
    console.log('[CLIC] '+cursorX_rel+', '+cursorY_rel+' (cursorX_rel, cursorY_rel)');
    check_peak(cursorX_rel, cursorY_rel);
}
