// js/cursor-sparkles.js

document.addEventListener('DOMContentLoaded', () => {
    const numSparkles = 20; // Number of sparkles to generate
    const colors = [
        'rgba(255, 0, 0, 0.8)', // Red
        'rgba(0, 255, 0, 0.8)', // Green
        'rgba(0, 0, 255, 0.8)', // Blue
        'rgba(255, 255, 0, 0.8)', // Yellow
        'rgba(255, 105, 180, 0.8)' // Pink
    ];
    
    // Create sparkle elements
    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('cursor-sparkle');
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(sparkle);
    }

    const sparkles = document.querySelectorAll('.cursor-sparkle');

    function updateSparklePosition(e) {
        const x = e.clientX;
        const y = e.clientY;

        sparkles.forEach(sparkle => {
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            sparkle.classList.add('visible');

            // Fade out sparkle after some time
            setTimeout(() => {
                sparkle.classList.remove('visible');
            }, 300); // Adjust this to change the duration of the sparkle effect
        });
    }

    document.addEventListener('mousemove', updateSparklePosition);
});