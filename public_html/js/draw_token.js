// draw_token.js
// (c) inoro 2019 GPL v3

function draw_top_token(ctx, cx, cy, m, tBw) {
    ctx.beginPath();
    ctx.arc(cx*m, cy*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.top_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.top_fill_color;
    ctx.fill();
}

function draw_bottom_token(ctx, cx, cy, m, tBw) {
    ctx.beginPath();
    ctx.arc(cx*m, cy*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.bottom_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.bottom_fill_color;
    ctx.fill();
}

function draw_top_token_taked(ctx, m, tBw, num) {
    var
        tx = xyT(7),
        ty = xyT(5.5);

    ctx.beginPath();
    ctx.arc(tx*m, ty*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.top_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.top_fill_color;
    ctx.fill();

    if (num > 1) {
        ctx.fillStyle = window.bgjs.top_text_color;
        ctx.fillText(num, tx*m, (ty+3.2)*m);
    }
}

function draw_bottom_token_taked(ctx, m, tBw, num) {
    var
        tx = xyT(7),
        ty = xyT(7.5);

    ctx.beginPath();
    ctx.arc(tx*m, ty*m, 10*m-(tBw/2), 0, 2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = window.bgjs.bottom_stroke_color;
    ctx.stroke();
    ctx.fillStyle = window.bgjs.bottom_fill_color;
    ctx.fill();

    if (num > 1) {
        ctx.fillStyle = window.bgjs.bottom_text_color;
        ctx.fillText(num, tx*m, (ty+3.2)*m);
    }
}

function draw_layout(ctx, m, tkstate) {
    var
        tBw = window.bgjs.tBw, // token_border_width
        vboard = window.bgjs.vboard;

    // TOKEN STYLE
    ctx.lineWidth = tBw;

    // TEXT STYLE
    ctx.font = (10*m)+"px My Courier New";
    ctx.textAlign = "center";

    var i = 0;
    while (i < tkstate.length) {
        var e = 0;
        var overflow = false;
        while (e < tkstate[i][0]) {
            // tokens negros
            if (e > 4) { // normas
                overflow = true;
                break;
            }
            draw_top_token(ctx, xyT(vboard[i][e][0]), xyT(vboard[i][e][1]), m, tBw);
            e++;
        }
        if (overflow) {
            last_e = 4;
            ctx.fillStyle = window.bgjs.top_text_color;
            ctx.fillText(tkstate[i][0], xyT(vboard[i][last_e][0])*m, (xyT(vboard[i][last_e][1])+3.2)*m);
        }

        e = 0;
        overflow = false;
        while (e < tkstate[i][1]) {
            // tokens blancos
            if (e > 4) { // normas
                overflow = true;
                break;
            }
            draw_bottom_token(ctx, xyT(vboard[i][e][0]), xyT(vboard[i][e][1]), m, tBw);
            e++;
        }
        if (overflow) {
            last_e = 4;
            ctx.fillStyle = window.bgjs.bottom_text_color;
            ctx.fillText(tkstate[i][1], xyT(vboard[i][last_e][0])*m, (xyT(vboard[i][last_e][1])+3.2)*m);
        }

        i++;
    }

    if (window.bgjs.top_tokens_taked > 0) {
        draw_top_token_taked(ctx, m, tBw, window.bgjs.top_tokens_taked);
    }
    if (window.bgjs.bottom_tokens_taked > 0) {
        draw_bottom_token_taked(ctx, m, tBw, window.bgjs.bottom_tokens_taked);
    }
}

function draw_initial_layout(ctx, m) {
    draw_layout(ctx, m, window.bgjs.tkstate_initial);
}
