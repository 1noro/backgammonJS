// key_actions.js
// (c) inoro 2019 GPL v3

function get_key(e) {
    if(e.key === "Escape") {
        reset_pkmove_states();
        refresh_board();
        console.log('[PKEY] Presionada la tecla "Esc", se limpian todas las selecciones.');
    }
}
