import './utility/ipc.js'; // Used to reconnect, do not remove.
import './weather/index.js';
import * as alt from 'alt-server';
import { db } from '../../database/index.js';
db;
import { connectLocalClient } from './utility/reconnect.js';
alt.log(`alt:V Server - Boilerplate Started`);
alt.on('playerConnect', handlePlayerConnect);
function handlePlayerConnect(player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);
    alt.emitClient(player, 'Start:WebViews');
    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    alt.emitClient(player, 'log:Console', 'alt:V Server - Boilerplate Started');
}
connectLocalClient();
