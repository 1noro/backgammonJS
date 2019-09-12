// draw_board.js
// (c) inoro 2019 GPL v3

function draw_top_peak(ctx, m, rojo, px) {
    ctx.beginPath();
    ctx.moveTo(px*m, 20*m);
    rojo?ctx.lineTo((px+10)*m, 120*m):ctx.lineTo((px+10)*m, 110*m);
    ctx.lineTo((px+20)*m, 20*m);
    ctx.closePath();
    rojo?ctx.fillStyle = "#df6b74":ctx.fillStyle = "#aab1be";
    ctx.fill();
}

function draw_bottom_peak(ctx, m, rojo, px) {
    ctx.beginPath();
    ctx.moveTo(px*m, 260*m);
    rojo?ctx.lineTo((px+10)*m, 160*m):ctx.lineTo((px+10)*m, 150*m);
    ctx.lineTo((px+20)*m, 260*m);
    ctx.closePath();
    rojo?ctx.fillStyle = "#aab1be":ctx.fillStyle = "#df6b74";
    ctx.fill();
}

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

    // ESTILO DE TEXTO
    ctx.font = (5*m)+"px My Courier New";
    ctx.textAlign = "center";

    // PICOS
    var mitad = 1;
    var rojo = false;
    var px = 20;
    var peak_number = 0;
    var game_peaks = window.bgjs.game_peaks;
    while (mitad <= 2) {
        var pico = 1;
        while (pico <= 6) {
            draw_top_peak(ctx, m, rojo, px);
            draw_bottom_peak(ctx, m, rojo, px);

            if (window.bgjs.draw_numbers) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText(game_peaks[peak_number], (px+10)*m, 15*m);
                ctx.fillStyle = "#ffffff";
                ctx.fillText(game_peaks[peak_number+1], (px+10)*m, 268*m);
            }

            rojo=!rojo;

            px+=20;
            pico++;
            peak_number+=2;
        }
        px+=20;
        mitad++;
    }
}
