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
    var
        bgc = document.getElementById('backgammonCanvas'),
        ctx = bgc.getContext("2d");
    draw_board(ctx, window.bgjs.m);
    draw_layout(ctx, window.bgjs.m, window.bgjs.tkstate);
}

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
