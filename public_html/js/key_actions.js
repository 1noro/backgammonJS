// key_actions.js
// (c) inoro 2019 GPL v3

function get_key(e) {
    if(e.key === "Escape") {
        reset_move_states();
        refresh_board();
    }
}
