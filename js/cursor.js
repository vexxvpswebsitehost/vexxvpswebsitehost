function setCustomCursor(cursorUrl) {
    if (!cursorUrl) {
        console.error('Currsor ur not provided');
        return;
    }

    document.body.style.cursor = `url (${cursorUrl}), auto`;
}

$(document).ready(function() {
    setCustomCursor('assets/cross.png');
});