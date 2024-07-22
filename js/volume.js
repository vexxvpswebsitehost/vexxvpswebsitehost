// volume.js
$(document).ready(function() {
    const volumeInput = $('#volume');
    const backgroundMusic = document.getElementById('background-music');
    const backgroundVideo = document.getElementById('background-video');

    // Set initial volume
    backgroundMusic.volume = volumeInput.val() / 100;
    backgroundVideo.volume = volumeInput.val() / 100;

    // Update volume when the slider value changes
    volumeInput.on('input', function() {
        const volume = volumeInput.val() / 100;
        backgroundMusic.volume = volume;
        backgroundVideo.volume = volume;
    });

    // Volume down button click handler
    $('#volume-down').on('click', function() {
        let currentVolume = volumeInput.val();
        if (currentVolume > 0) {
            currentVolume -= 5; // Decrease volume by 5
            if (currentVolume < 0) currentVolume = 0;
            volumeInput.val(currentVolume);
            volumeInput.trigger('input'); // Trigger input event to update volume
        }
    });

    // Volume up button click handler
    $('#volume-up').on('click', function() {
        let currentVolume = volumeInput.val();
        if (currentVolume < 100) {
            currentVolume += 5; // Increase volume by 5
            if (currentVolume > 100) currentVolume = 100;
            volumeInput.val(currentVolume);
            volumeInput.trigger('input'); // Trigger input event to update volume
        }
    });
});
