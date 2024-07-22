document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const enterSite = document.getElementById('enter-site');
    const content = document.getElementById('content');

    enterButton.addEventListener('click', () => {
        enterSite.classList.add('fade-out');
        content.classList.add('show');

        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.play();
    });
});