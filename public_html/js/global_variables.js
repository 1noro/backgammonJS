// global_variables.js
// (c) inoro 2019 GPL v3

// --- CONSTRUCTOR ------------------------------------------------------------
window.bgjs = {}

// --- GENERIC ----------------------------------------------------------------
window.bgjs.verbose = 3;
window.bgjs.m = 2.5; //multiplier
window.bgjs.canvas_marginTop = 100; //lo que ocupa el <h2> del title

window.bgjs.canvas = 0;
window.bgjs.ctx = 0;

// --- GAME -------------------------------------------------------------------
// avaliable colors
window.bgjs.black = {
    stroke_color: "#ffffff",
    fill_color: "#000000",
    text_color: "#ffffff",

    peak_color: "#000000",
    peak_selected_color: "#000000",

    tokens_taked_selected_color: "#434953"
}

window.bgjs.white = {
    stroke_color: "#000000",
    fill_color: "#ffffff",
    text_color: "#000000",

    peak_color: "#aab1be",
    peak_selected_color: "#e4e6ea",

    tokens_taked_selected_color: "#434953"
}

window.bgjs.red = {
    stroke_color: "#ffffff",
    fill_color: "#981f28",
    text_color: "#ffffff",

    peak_color: "#df6b74",
    peak_selected_color: "#f1bfc3",

    tokens_taked_selected_color: "#434953"
}

window.bgjs.blue = {
    stroke_color: "#ffffff",
    fill_color: "blue",
    text_color: "#ffffff",

    peak_color: "blue",
    peak_selected_color: "#ffffff",

    tokens_taked_selected_color: "#434953"
}

// assigned colors
window.bgjs.bg_color = "#262a2f";

// --- top
window.bgjs.top_stroke_color = window.bgjs.red.stroke_color;
window.bgjs.top_fill_color = window.bgjs.red.fill_color;
window.bgjs.top_text_color = window.bgjs.red.text_color;

window.bgjs.top_peak_color = window.bgjs.red.peak_color;
window.bgjs.top_peak_selected_color = window.bgjs.red.peak_selected_color;

window.bgjs.top_tokens_taked_selected_color = window.bgjs.red.tokens_taked_selected_color;

// --- bottom
window.bgjs.bottom_stroke_color = window.bgjs.white.stroke_color;
window.bgjs.bottom_fill_color = window.bgjs.white.fill_color;
window.bgjs.bottom_text_color = window.bgjs.white.text_color;

window.bgjs.bottom_peak_color = window.bgjs.white.peak_color;
window.bgjs.bottom_peak_selected_color = window.bgjs.white.peak_selected_color;

window.bgjs.bottom_tokens_taked_selected_color = window.bgjs.white.tokens_taked_selected_color;

// --- GAME STATE -------------------------------------------------------------
window.bgjs.game_pause = 0;
window.bgjs.move_state = 0;
window.bgjs.peak_from = 0;
window.bgjs.no_peak_selected = false;

window.bgjs.doubling_cube = true;
window.bgjs.doubling_cube_state = 64;

// valores provisionales
window.bgjs.top_tokens_out = 1;
window.bgjs.bottom_tokens_out = 2;
window.bgjs.top_tokens_taked = 0;
window.bgjs.bottom_tokens_taked = 0;
window.bgjs.top_tokens_taked_selected = false;
window.bgjs.bottom_tokens_taked_selected = false;

// --- BORAD ------------------------------------------------------------------
window.bgjs.draw_numbers = true;

window.bgjs.game_peaks = [
    12, 13, 11, 14, 10, 15,  9, 16,  8, 17,  7, 18,
     6, 19,  5, 20,  4, 21,  3, 22,  2, 23,  1, 24
]

// Virtual board token map
// [(x1, y1), (x2, y2), (x3, y3), (x4, y4), (x5, y5)]
window.bgjs.vboard = [
    [[ 1,  1], [ 1,  2], [ 1,  3], [ 1, 4], [ 1, 5]], // 12
    [[ 1, 12], [ 1, 11], [ 1, 10], [ 1, 9], [ 1, 8]], // 13
    [[ 2,  1], [ 2,  2], [ 2,  3], [ 2, 4], [ 2, 5]], // 11
    [[ 2, 12], [ 2, 11], [ 2, 10], [ 2, 9], [ 2, 8]], // 14
    [[ 3,  1], [ 3,  2], [ 3,  3], [ 3, 4], [ 3, 5]], // 10
    [[ 3, 12], [ 3, 11], [ 3, 10], [ 3, 9], [ 3, 8]], // 15
    [[ 4,  1], [ 4,  2], [ 4,  3], [ 4, 4], [ 4, 5]], // 09
    [[ 4, 12], [ 4, 11], [ 4, 10], [ 4, 9], [ 4, 8]], // 16
    [[ 5,  1], [ 5,  2], [ 5,  3], [ 5, 4], [ 5, 5]], // 08
    [[ 5, 12], [ 5, 11], [ 5, 10], [ 5, 9], [ 5, 8]], // 17
    [[ 6,  1], [ 6,  2], [ 6,  3], [ 6, 4], [ 6, 5]], // 07
    [[ 6, 12], [ 6, 11], [ 6, 10], [ 6, 9], [ 6, 8]], // 18

    [[ 8,  1], [ 8,  2], [ 8,  3], [ 8, 4], [ 8, 5]], // 06
    [[ 8, 12], [ 8, 11], [ 8, 10], [ 8, 9], [ 8, 8]], // 19
    [[ 9,  1], [ 9,  2], [ 9,  3], [ 9, 4], [ 9, 5]], // 05
    [[ 9, 12], [ 9, 11], [ 9, 10], [ 9, 9], [ 9, 8]], // 20
    [[10,  1], [10,  2], [10,  3], [10, 4], [10, 5]], // 04
    [[10, 12], [10, 11], [10, 10], [10, 9], [10, 8]], // 21
    [[11,  1], [11,  2], [11,  3], [11, 4], [11, 5]], // 03
    [[11, 12], [11, 11], [11, 10], [11, 9], [11, 8]], // 22
    [[12,  1], [12,  2], [12,  3], [12, 4], [12, 5]], // 02
    [[12, 12], [12, 11], [12, 10], [12, 9], [12, 8]], // 23
    [[13,  1], [13,  2], [13,  3], [13, 4], [13, 5]], // 01
    [[13, 12], [13, 11], [13, 10], [13, 9], [13, 8]], // 24
]

// Virtual peak map
// [(x1, y1), (x2, y2)]
window.bgjs.vpeak = [
    [[ 20,  20], [ 40, 130]], // 12
    [[ 20, 150], [ 40, 260]], // 13
    [[ 40,  20], [ 60, 130]], // 11
    [[ 40, 150], [ 60, 260]], // 14
    [[ 60,  20], [ 80, 130]], // 10
    [[ 60, 150], [ 80, 260]], // 15
    [[ 80,  20], [100, 130]], // 09
    [[ 80, 150], [100, 260]], // 16
    [[100,  20], [120, 130]], // 08
    [[100, 150], [120, 260]], // 17
    [[120,  20], [140, 130]], // 07
    [[120, 150], [140, 260]], // 18

    [[160,  20], [180, 130]], // 06
    [[160, 150], [180, 260]], // 19
    [[180,  20], [200, 130]], // 05
    [[180, 150], [200, 260]], // 20
    [[200,  20], [220, 130]], // 04
    [[200, 150], [220, 260]], // 21
    [[220,  20], [240, 130]], // 03
    [[220, 150], [240, 260]], // 22
    [[240,  20], [260, 130]], // 02
    [[240, 150], [260, 260]], // 23
    [[260,  20], [280, 130]], // 01
    [[260, 150], [280, 260]], // 24
]

// [(x1, y1), (x2, y2)]
window.bgjs.top_tokens_taked_box = [[140, 110], [160, 130]];
window.bgjs.bottom_tokens_taked_box = [[140, 150], [160, 170]];

// --- TOKENS -----------------------------------------------------------------
window.bgjs.tBw = 6; // token_border_width

window.bgjs.top_tokens_taken = 0;
window.bgjs.top_tokens_out = 0;
window.bgjs.bottom_tokens_taken = 0;
window.bgjs.bottom_tokens_out = 0;

// [top, bottom]
window.bgjs.tkstate = [
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

// [top, bottom]
window.bgjs.tkstate_initial = [
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
