// main.js
// (c) inoro 2019 GPL v3

function main() {
    console.log("[MAIN] Start...");
    var
        bgc = document.getElementById('backgammonCanvas'),
        ctx = bgc.getContext("2d");

    window.bgjs.canvas = ctx;
    window.bgjs.ctx = ctx;

    draw_board(ctx, window.bgjs.m);
    draw_initial_layout(ctx, window.bgjs.m);

	document.onkeydown = get_key;
	document.onmousedown = get_cursor_rel;
}
