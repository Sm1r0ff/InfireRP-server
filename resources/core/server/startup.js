import * as alt from 'alt-server';
import { db } from '../../database/index.js';
db;
alt.log(`Infire RP Started`);
alt.on('playerConnect', handlePlayerConnect);
function handlePlayerConnect(player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);
    //player.model = 'mp_m_freemode_01';
    //player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    alt.emitClient(player, 'Auth-Reg:Init');
    alt.emitClient(player, 'log:Console', 'Infire RP Started');
}
