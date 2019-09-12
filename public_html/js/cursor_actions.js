// cursor_actions.js
// (c) inoro 2019 GPL v3

function check_peak(cursorX, cursorY) {
    var
        ctx = window.bgjs.ctx,
        game_peaks = window.bgjs.game_peaks,
        vpeak = window.bgjs.vpeak,
        m = window.bgjs.m;
    var i = 0;
    while (i < vpeak.length) {
        // console.log( cursorX+' >= '+vpeak[i][0][0]*m+' && '+cursorX+' <= '+vpeak[i][1][0]*m+' &&' );
        // console.log( cursorY+' >= '+vpeak[i][0][1]*m+' && '+cursorY+' <= '+vpeak[i][1][1]*m );
        if (
            (cursorX >= vpeak[i][0][0]*m && cursorX <= vpeak[i][1][0]*m) &&
            (cursorY >= vpeak[i][0][1]*m && cursorY <= vpeak[i][1][1]*m)
        ) {
            // console.log( cursorX+' >= '+vpeak[i][0][0]*m+' && '+cursorX+' <= '+vpeak[i][1][0]*m+' &&' );
            // console.log( cursorY+' >= '+vpeak[i][0][1]*m+' && '+cursorY+' <= '+vpeak[i][1][1]*m );
            // ctx.fillStyle = "blue";
            // ctx.fillRect(vpeak[i][0][0]*m, vpeak[i][0][1]*m, 20*m, 110*m);
            console.log('[INFO] Pulsaste en el pico: '+game_peaks[i]+', i:'+i);
            window.bgjs.selected_peak = game_peaks[i];
            refresh_board();
        }
        i++;
    }
}
