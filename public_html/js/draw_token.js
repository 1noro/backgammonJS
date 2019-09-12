// draw_token.js
// (c) inoro 2019 GPL v3

function draw_black_token(ctx, cx, cy, m, tBw) {
    ctx.beginPath();
    ctx.arc(cx*m, cy*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.balck_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.balck_fill_color;
    ctx.fill();
}

function draw_white_token(ctx, cx, cy, m, tBw) {
    ctx.beginPath();
    ctx.arc(cx*m, cy*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.white_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.white_fill_color;
    ctx.fill();
}

function draw_layout(ctx, m, tkstate) {
    var
        tBw = window.bgjs.tBw, // token_border_width
        vboard = window.bgjs.vboard;

    ctx.lineWidth = tBw;

    var i = 0;
    while (i < tkstate.length) {
        var e = 0;
        while (e < tkstate[i][0]) {
            // tokens negros
            draw_black_token(ctx, xyT(vboard[i][e][0]), xyT(vboard[i][e][1]), m, tBw);
            e++;
        }
        e = 0;
        while (e < tkstate[i][1]) {
            // tokens blancos
            draw_white_token(ctx, xyT(vboard[i][e][0]), xyT(vboard[i][e][1]), m, tBw);
            e++;
        }
        i++;
    }
}

function draw_initial_layout(ctx, m) {
    draw_layout(ctx, m, window.bgjs.tkstate_initial);
}
