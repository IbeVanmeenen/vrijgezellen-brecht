/* ==========================================================================
   Clock
   ========================================================================== */

brecht.video = function(undefined) {

    var exports = this.video;

    var video, videoContainer, bgVideo,
        playBtn, playBtn2;

    var hasCookie;

    // Get Time
    var play = function(btn) {
        video.play();
        playBtn.remove();

        video.addEventListener('ended', function() {
            videoContainer.classList.remove('video--show');
            bgVideo.volume = 1;

            brecht.clock();

            if (!hasCookie) {
                document.cookie = 'videoBrechtVrijgezellen=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
            }
        });
    };


    // Init
    var init = function() {
        video = document.getElementById('video');
        videoContainer = document.getElementById('video-container');
        bgVideo = document.getElementById('bg-video');
        playBtn = document.getElementById('video-play');
        playBtn2 = document.getElementById('video-play-2');

        hasCookie = document.cookie.match(/(?:(?:^|.*;\s*)videoBrechtVrijgezellen\s*\=\s*([^;]*).*$)|^.*$/)[1];

        if (hasCookie) {
            brecht.clock();
            bgVideo.volume = 1;

            playBtn2.addEventListener('click', function() {
                videoContainer.classList.add('video--show');
                bgVideo.volume = 0;

                play();
            });
        } else {
            videoContainer.classList.add('video--show');
            bgVideo.volume = 0;

            playBtn.addEventListener('click', function() {
                play();
            });
        }


    }();
};
