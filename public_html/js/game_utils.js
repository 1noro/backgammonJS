// game_utils.js
// (c) inoro 2019 GPL v3

// norm_to_game
function n2game(real_peak) {
    return window.bgjs.game_peaks.indexOf(real_peak);
}

// norm_to_real
function n2real(game_peak) {
    return window.bgjs.game_peaks[game_peak];
}

// invert_color
function invC(color) {
    return color?0:1;
}

function refresh_board() {
    var ctx = window.bgjs.ctx;
    draw_board(ctx, window.bgjs.m);
    draw_layout(ctx, window.bgjs.m, window.bgjs.tkstate);
}

// forma parte de las normas
function check_color_mov(color, from, to) {
    var out = false;
    if (!color) {
        // the black color only moves increasingly (-->)
        if (from < to) {
            out = true;
        }
    } else {
        // the white color only moves decreasingly (<--)
        if (from > to) {
            out = true;
        }
    }
    return out;
}

function is_peak_empty(real_peak) {
    var
        out = true,
        tkstate = window.bgjs.tkstate,
        game_peak = n2game(real_peak);
    if (tkstate[game_peak][0] > 0 || tkstate[game_peak][1] > 0) {
        out = false;
    }
    return out;
}

function get_peak_color(real_peak) {
    var
        tkstate = window.bgjs.tkstate,
        game_peak = n2game(real_peak);

    if (tkstate[game_peak][0] == 0 && tkstate[game_peak][1] != 0) {
        return 1;
    } else if (tkstate[game_peak][1] == 0 && tkstate[game_peak][0] != 0) {
        return 0;
    } else if (tkstate[game_peak][1] == 0 && tkstate[game_peak][0] == 0) {
        console.log('[FAIL] En el pico '+real_peak+'('+game_peak+') está vacío, por lo tanto no tiene color.');
    } else {
        console.log('[FAIL] En el pico '+real_peak+'('+game_peak+') hay tokens de 2 colores diferentes: black: '+tkstate[game_peak][0]+', white: '+tkstate[game_peak][0]+'.');
    }
}
