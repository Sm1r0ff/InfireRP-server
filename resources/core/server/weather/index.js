import * as alt from 'alt-server';
alt.on('playerConnect', (player)=>{
    player.setWeather(13);
});
