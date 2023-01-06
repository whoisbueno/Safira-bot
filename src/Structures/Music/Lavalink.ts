/* https://github.com/itsjon4s/siesta-bot/blob/main/src/structures/Music.ts */
import type { TextChannel } from 'discord.js';
import { Node, NodeOptions, Track, Vulkava } from 'vulkava';
import type { ExtendedClient } from './Client';

const sleep = (ms: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, ms));

export class Manager extends Vulkava {
 client: ExtendedClient;
 autoplay: Map<string, Track>;
 constructor(client: ExtendedClient, nodes: NodeOptions[]) {
 super({ 
   nodes: [
     {
       host: "node1.gglvxd.tk",
       port: 443,
       password: "free",
       secure: true
     }
     ], sendWS: (guildId, payload) => client.guilds.cache.get(guildId)?.shard.send(payload) 
});
 this.client = client; 
this.autoplay = new Map();

this.on("nodeReconnect", (node: Node) => {
console.log(`Node ${node.options.id} Reconnecting servers...`)
}) 
this.on('nodeConnect', (node: Node) => { 
console.log(`Node ${node.options.id} Connected`});
   setInterval(() => { 
     node.send({ op: 'pong' }); 
   }, 45000); 
 });
  

init() { super.start(this.client.user.id); this.client.on('raw', packet => this.handleVoiceUpdate(packet)); }}
