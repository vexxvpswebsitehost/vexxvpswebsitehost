document.addEventListener('DOMContentLoaded', () => {
    const bioTextElement = document.getElementById('bio-text');
    const bioText = "Hi im vtc.";
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50; // milliseconds per character
    const pauseBetweenLoops = 1000; // milliseconds to pause between typing and deleting

    function typeWriter(text, element, typingSpeed, deletingSpeed, pauseBetweenLoops) {
        let index = 0;
        let isDeleting = false;

        function type() {
            if (isDeleting) {
                if (index > 0) {
                    // Delete character
                    element.textContent = text.substring(0, index - 1);
                    index--;
                    setTimeout(type, deletingSpeed);
                } else {
                    // Start typing again after a pause
                    isDeleting = false;
                    setTimeout(type, pauseBetweenLoops);
                }
            } else {
                if (index < text.length) {
                    // Type character
                    element.textContent = text.substring(0, index + 1);
                    index++;
                    setTimeout(type, typingSpeed);
                } else {
                    // Start deleting after a pause
                    isDeleting = true;
                    setTimeout(type, pauseBetweenLoops);
                }
            }
        }
        type();
    }

    typeWriter(bioText, bioTextElement, typingSpeed, deletingSpeed, pauseBetweenLoops);
});
