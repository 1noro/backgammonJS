// main.js
// (c) inoro 2019 GPL v3

function main() {
    console.log("[MAIN] Start...");
    var
        bgc = document.getElementById('backgammonCanvas'),
        ctx = bgc.getContext("2d");

    draw_board(ctx, window.bgjs.m);
    draw_initial_layout(ctx, window.bgjs.m);
}
