$(document).ready(function() {
    $('#enter-button').click(function() {
        $('#enter-site').hide();
        $('#content').show();
        document.getElementById('background-music').play();
        document.getElementById('background-video').play();
        fetchDiscordData();
    });

    function fetchDiscordData() {
        const userId = '1171500467856089220'; 
        const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const discordData = data.data;
                updateBadges(discordData.badges);
                updateActivity(discordData.activities);
            })
            .catch(error => console.error('Error fetching Discord data:', error));
    }

    function updateBadges(badges) {
        $('#badges img').hide();

        if (badges && badges.length > 0) {
            badges.forEach(badge => {
                switch (badge) {
                    case 'DISCORD_NITRO':
                        $('#discord-NITRO').show();
                        break;
                    case 'DISCORD_BOOSTER':
                        $('#DISCORD_BOOSTER').show();
                        break;
                    default:
                        console.log(`No image found for badge: ${badge}`);
                }
            });
        }
    }
});