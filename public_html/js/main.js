
function main() {
    console.log("[MAIN] Start...");
    var
        bgc = document.getElementById('backgammonCanvas'),
        ctx = bgc.getContext("2d"),
        m = 5; //multiplicador

    draw_board(ctx, m);
    draw_initial_layout(ctx, m);
}
