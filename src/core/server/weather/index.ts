import * as alt from 'alt-server';

alt.on('playerConnect', (player: alt.Player) => {
    player.setWeather(13)
})