// game_actions.js
// (c) inoro 2019 GPL v3

// color: black (0), white (1)
function move_from_to(color, from, to) {
    if (check_color_mov(color, from, to)) {
        var tkstate = window.bgjs.tkstate;
        if (tkstate[n2game(from)][color] > 0) {
            if (tkstate[n2game(to)][invC(color)] == 1) {
                tkstate[n2game(to)][invC(color)]--;
                tkstate[n2game(from)][color]--;
                tkstate[n2game(to)][color]++;
                console.log('[TAKE] color: '+color+', from: '+from+'('+tkstate[n2game(from)][color]+') >> to: '+to+'('+tkstate[n2game(to)][color]+')');
                refresh_board();
            } else if (tkstate[n2game(to)][invC(color)] <= 1) {
                tkstate[n2game(from)][color]--;
                tkstate[n2game(to)][color]++;
                console.log('[MOVE] color: '+color+', from: '+from+'('+tkstate[n2game(from)][color]+') >> to: '+to+'('+tkstate[n2game(to)][color]+')');
                refresh_board();
            } else {
                console.log('[FAIL] Hay más de 1 ficha del color "'+invC(color)+'" en el pico de destino.');
            }
        } else {
            console.log('[FAIL] No hay fichas del color "'+color+'" en el pico de origen.');
        }
    } else {
        console.log('[FAIL] Movimiento no permitido para este color.');
    }
}

function move_states(peak) {
    if (window.bgjs.move_state == 0) {
        window.bgjs.peak_from = peak;
        refresh_board();
        console.log('[SELE] Pico '+peak+' seleccionado.');
        window.bgjs.move_state = 1;
    } else if (window.bgjs.move_state == 1) {

        var
            from = window.bgjs.peak_from,
            to = peak;
            color = get_peak_color(from);

        // reset
        window.bgjs.move_state = 0;
        window.bgjs.peak_from = 0;

        move_from_to(color, from, to);
        console.log('[MOVE] Movido 1 token del color '+color+' desde '+peak+' hasta '+to+'.');
    }
}
