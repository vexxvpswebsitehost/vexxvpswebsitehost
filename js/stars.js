document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080'];
    const starCount = 100;
    let stars = [];

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(star);
        stars.push(star);
    }

    document.addEventListener('mousemove', (event) => {
        let star = stars.shift();
        stars.push(star);
        star.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
});