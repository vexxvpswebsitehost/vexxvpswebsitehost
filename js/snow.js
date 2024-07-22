// snow.js
$(document).ready(function() {
    const numFlakes = 100; // Number of snowflakes

    for (let i = 0; i < numFlakes; i++) {
        const flake = $('<div class="snow-flake"></div>');
        flake.css({
            left: Math.random() * 100 + 'vw', // Random horizontal position
            top: Math.random() * 100 + 'vh', // Random initial vertical position
            width: Math.random() * 10 + 5 + 'px', // Random size
            height: Math.random() * 10 + 5 + 'px', // Random size
            animationDuration: (Math.random() * 10 + 10) + 's', // Random fall duration
            animationDelay: Math.random() * 5 + 's' // Random delay before fall
        });
        $('body').append(flake);
    }
});
