import { SlashCommandBuilder } from "../../Structures/Classes/SlashCommand";
import { EmbedBuilder } from "discord.js";

export default new SlashCommandBuilder({
  name: "ping",
  description: "Bot Latency Ping.",
  run({ client, interaction }) {
    interaction.deferReply();
    return interaction.followUp({ content: `🐋 › Ws: **${client.ws.ping}ms**\n🛰 › Shards: **1/1**` })
  },
})