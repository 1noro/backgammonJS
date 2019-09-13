// game_actions.js
// (c) inoro 2019 GPL v3

// owner: top (0), bottom (1)
function simple_move_from_to_empty(owner, from, to) {
    var tkstate = window.bgjs.tkstate;
    tkstate[n2game(from)][owner]--;
    tkstate[n2game(to)][owner]++;
    console.log('[MOVE] owner: '+owner+', from: '+from+'('+tkstate[n2game(from)][owner]+') >> to: '+to+'('+tkstate[n2game(to)][owner]+')');
    refresh_board();
}

// owner: top (0), bottom (1)
function simple_move_from_to_take(owner, from, to) {
    var tkstate = window.bgjs.tkstate;
    tkstate[n2game(to)][invO(owner)]--;
    tkstate[n2game(from)][owner]--;
    tkstate[n2game(to)][owner]++;
    if (owner == 0) {
        window.bgjs.bottom_tokens_taked++;
    } else {
        window.bgjs.top_tokens_taked++;
    }
    console.log('[TAKE] owner: '+owner+', from: '+from+'('+tkstate[n2game(from)][owner]+') >> to: '+to+'('+tkstate[n2game(to)][owner]+')');
    refresh_board();
}

function pkmove_states(peak) {
    if (window.bgjs.move_state == 0) {
        if (!is_peak_empty(peak)) {
            window.bgjs.peak_from = peak;
            refresh_board();
            console.log('[SELE] Pico '+peak+' seleccionado.');
            window.bgjs.move_state = 1;
        } else {
            console.log('[NONE] El pico seleccionado está vacío.');
        }
    } else if (window.bgjs.move_state == 1) {
        var
            from = window.bgjs.peak_from,
            to = peak,
            owner = check_peak_ownership(from);

        if (check_owner_mov(owner, from, to)) {
            var tkstate = window.bgjs.tkstate;
            if (tkstate[n2game(to)][invO(owner)] == 1) {
                reset_pkmove_states();
                simple_move_from_to_take(owner, from, to);
            } else if (tkstate[n2game(to)][invO(owner)] <= 1) {
                reset_pkmove_states();
                simple_move_from_to_empty(owner, from, to);
            } else {
                console.log('[NONE] Hay más de 1 ficha del propietario "'+invO(owner)+'" en el pico de destino.');
            }
        } else {
            if (is_peak_empty(to)) {
                reset_pkmove_states();
                console.log('[INFO] Seleccionado como destino un pico vacío anterior, se desselecciona todo.');
                refresh_board();
            } else if (is_same_owner(owner, to)) {
                window.bgjs.peak_from = to;
                refresh_board();
                console.log('[SELE] Pico '+to+' seleccionado.');
            } else {
                console.log('[NONE] Movimiento no permitido para este propietario.');
            }
        }
    }
}
