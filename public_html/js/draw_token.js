
function draw_initial_layout(ctx, m) {

    // [black, white]
    var tkstate = [
        [5, 0], // 12
        [0, 5], // 13
        [0, 0], // 11
        [0, 0], // 14
        [0, 0], // 10
        [0, 0], // 15
        [0, 0], // 09
        [0, 0], // 16
        [0, 3], // 08
        [3, 0], // 17
        [0, 0], // 07
        [0, 0], // 18

        [0, 5], // 06
        [5, 0], // 19
        [0, 0], // 05
        [0, 0], // 20
        [0, 0], // 04
        [0, 0], // 21
        [0, 0], // 03
        [0, 0], // 22
        [0, 0], // 02
        [0, 0], // 23
        [2, 0], // 01
        [0, 2], // 24
    ]

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;

    // token 1 (roja)
    // ctx.beginPath();
    // ctx.arc(30*m, 30*m, 10*m, 0, 2*Math.PI);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fillStyle = "#981f28";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(xyT(0,m), xyT(0,m), 10*m, 0, 2*Math.PI);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fillStyle = "#981f28";
    // ctx.fill();

}
