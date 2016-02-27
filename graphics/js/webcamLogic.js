/**
 * Created by Tobias on 2016-02-27.
 */
'use strict';
$(function () {
    var $webcamCover = $('#webcamCover');
    $webcamCover.css('transform', 'translateX(-100%)');

    function coverWebcam() {
        animation_translateRevert($webcamCover);
    }
});
