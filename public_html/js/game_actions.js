// game_actions.js
// (c) inoro 2019 GPL v3

// color: black (0), white (1)
function move_from_to(color, from, to) {
    if (check_color_mov(color, from, to)) {
        var tkstate = window.bgjs.tkstate;
        if (tkstate[n2game(from)][color] > 0) {
            if (tkstate[n2game(to)][invC(color)] <= 1) {
                console.log('Ok, había '+(tkstate[n2game(from)][color])+' y ahora hay '+(tkstate[n2game(from)][color]-1));
                tkstate[n2game(from)][color]--;
                tkstate[n2game(to)][color]++;
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
