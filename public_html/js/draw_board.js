
function draw_board(ctx, m) {
    // ctx.strokeStyle = "#ffffff";
    // ctx.lineWidth = 5;

    // BORDES
    // ctx.fillStyle = "#2c3037";
    // // ctx.fillRect(x, y, width, height);
    // ctx.fillRect(0*m, 0*m, 20*m, 280*m); // - borde izquierdo
    // ctx.fillRect(280*m, 0*m, 20*m, 280*m); // - borde derecho
    // ctx.fillRect(20*m, 0*m, 260*m, 20*m); // - borde superior
    // ctx.fillRect(20*m, 260*m, 260*m, 20*m); // - borde inferior
    // ctx.fillRect(140*m, 20*m, 20*m, 240*m); // - borde medio

    // PARTES DEL TABLERO
    ctx.fillStyle = "#2c3037";
    ctx.fillRect(20*m, 20*m, 120*m, 240*m); // parte izquierda
    ctx.fillRect(160*m, 20*m, 120*m, 240*m); // parte derecha

    // PICOS
    var cuadrante = 1;
    var rojo = false;
    var px = 20;
    while (cuadrante <= 4) {
        var pico = 1;
        while (pico <= 6) {
            ctx.beginPath();
            ctx.moveTo(px*m, 20*m);
            rojo?ctx.lineTo((px+10)*m, 120*m):ctx.lineTo((px+10)*m, 110*m);
            ctx.lineTo((px+20)*m, 20*m);
            ctx.closePath();
            rojo?ctx.fillStyle = "#df6b74":ctx.fillStyle = "#aab1be";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(px*m, 260*m);
            rojo?ctx.lineTo((px+10)*m, 160*m):ctx.lineTo((px+10)*m, 150*m);
            ctx.lineTo((px+20)*m, 260*m);
            ctx.closePath();
            rojo?ctx.fillStyle = "#aab1be":ctx.fillStyle = "#df6b74";
            ctx.fill();

            // rojo=rojo = false:rojo = true;
            rojo=!rojo;

            px+=20;
            pico++;
        }
        px+=20;
        cuadrante++;
    }
}
