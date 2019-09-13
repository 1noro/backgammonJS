// draw_utils.js
// (c) inoro 2019 GPL v3

// x and y transform
function xyT(xypos) {
    return (xypos*(20))+10;
}

// x and y transform with multiple
function xyTm(xypos, m) {
    return (xypos*(20*m))+10*m;
}

function reset_canvas_with_bg_color(ctx, m) {
    ctx.fillStyle = window.bgjs.bg_color;
    ctx.fillRect(0*m, 0*m, 300*m, 280*m);
}
