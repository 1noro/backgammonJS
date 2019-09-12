// draw_board.js
// (c) inoro 2019 GPL v3

function draw_peak(ctx, m, color, x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1*m, y1*m);
    ctx.lineTo(x2*m, y2*m);
    ctx.lineTo(x3*m, y3*m);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function draw_top_peak(ctx, m, rojo, px) {
    if (rojo) {draw_peak(ctx, m, window.bgjs.black_peak_color, px, 20, px+10, 120, px+20, 20);}
    else {draw_peak(ctx, m, window.bgjs.white_peak_color, px, 20, px+10, 110, px+20, 20);}
}

function draw_top_peak_selected(ctx, m, rojo, px) {
    if (rojo) {draw_peak(ctx, m, window.bgjs.black_peak_selected_color, px, 20, px+10, 120, px+20, 20);}
    else {draw_peak(ctx, m, window.bgjs.white_peak_selected_color, px, 20, px+10, 110, px+20, 20);}
}

function draw_bottom_peak(ctx, m, rojo, px) {
    if (rojo) {draw_peak(ctx, m, window.bgjs.white_peak_color, px, 260, px+10, 160, px+20, 260);}
    else {draw_peak(ctx, m, window.bgjs.black_peak_color, px, 260, px+10, 150, px+20, 260);}
}

function draw_bottom_peak_selected(ctx, m, rojo, px) {
    if (rojo) {draw_peak(ctx, m, window.bgjs.white_peak_selected_color, px, 260, px+10, 160, px+20, 260);}
    else {draw_peak(ctx, m, window.bgjs.black_peak_selected_color, px, 260, px+10, 150, px+20, 260);}
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
    var peak_from = window.bgjs.peak_from;
    while (mitad <= 2) {
        var pico = 1;
        while (pico <= 6) {

            if (game_peaks[peak_number] == peak_from) {
                draw_top_peak_selected(ctx, m, rojo, px);
                draw_bottom_peak(ctx, m, rojo, px);
            } else if (game_peaks[peak_number+1] == peak_from) {
                draw_bottom_peak_selected(ctx, m, rojo, px);
                draw_top_peak(ctx, m, rojo, px);
            } else {
                draw_top_peak(ctx, m, rojo, px);
                draw_bottom_peak(ctx, m, rojo, px);
            }

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
