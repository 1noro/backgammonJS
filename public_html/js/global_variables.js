// global_variables.js
// (c) inoro 2019 GPL v3

// --- CONSTRUCTOR ------------------------------------------------------------
window.bgjs = {}

// --- GENERIC ----------------------------------------------------------------
window.bgjs.m = 5; //multiplicador

// --- BORAD ------------------------------------------------------------------
window.bgjs.game_peaks = [
    12, 13, 11, 14, 10, 15,  9, 16,  8, 17,  7, 18,
     6, 19,  5, 20,  4, 21,  3, 22,  2, 23,  1, 24
]
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

// --- TOKENS -----------------------------------------------------------------
window.bgjs.tBw = 6; // token_border_width

// [black, white]
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

// [black, white]
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
