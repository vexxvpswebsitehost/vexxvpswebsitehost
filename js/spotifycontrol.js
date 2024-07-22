$(document).ready(function() {
    const backgroundMusic = document.getElementById('background-music');
    const spotifyPlayer = document.getElementById('spotify-player');

    // Function to pause the background music
    function pauseBackgroundMusic() {
        if (backgroundMusic) {
            backgroundMusic.pause();
        }
    }

    // Function to play the background music
    function playBackgroundMusic() {
        if (backgroundMusic) {
            backgroundMusic.play();
        }
    }

    // Detect focus on the Spotify player iframe
    $(spotifyPlayer).on('load', function() {
        this.contentWindow.addEventListener('focus', pauseBackgroundMusic, true);
        this.contentWindow.addEventListener('blur', playBackgroundMusic, true);
    });

    // Check periodically if Spotify player is in focus
    setInterval(function() {
        if (document.activeElement === spotifyPlayer) {
            pauseBackgroundMusic();
        } else {
            playBackgroundMusic();
        }
    }, 1000); // Check every second

    // Handle events on iframe focus
    $(spotifyPlayer).on('focus', pauseBackgroundMusic);
    $(spotifyPlayer).on('blur', playBackgroundMusic);
});