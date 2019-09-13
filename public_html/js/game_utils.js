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

// invert_owner
function invO(owner) {
    return owner?0:1;
}

function refresh_board() {
    var ctx = window.bgjs.ctx;
    draw_board(ctx, window.bgjs.m);
    draw_layout(ctx, window.bgjs.m, window.bgjs.tkstate);
}

// forma parte de las normas
function check_owner_mov(owner, from, to) {
    var out = false;
    if (!owner) {out = (from < to)?true:false;}
        else {out = (from > to)?true:false;}
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

function check_peak_ownership(real_peak) {
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
        console.log('[FAIL] En el pico '+real_peak+'('+game_peak+') hay tokens de 2 colores diferentes: top: '+tkstate[game_peak][0]+', bottom: '+tkstate[game_peak][0]+'.');
    }
}

function reset_pkmove_states() {
    window.bgjs.move_state = 0;
    window.bgjs.peak_from = 0;

    window.bgjs.top_tokens_taked_selected = false;
    window.bgjs.bottom_tokens_taked_selected = false;
}

function is_the_peak_back(owner, from, to) {
    var out = false;
    if (owner == 0) {out = (from > to)?true:false;}
        else {out = (from < to)?true:false;}
    return out;
}

function is_same_owner(owner, to) {
    return (owner == check_peak_ownership(to));
}
