import { ChannelType, EmbedBuilder } from "discord.js";
import { Event } from "../../Structures/Classes/Event";

export default new Event({
  name: "messageCreate",
  run(client, message) {
    if (message.author.bot || !message.guild) return;
    
    return
    if (!message.content.toLowerCase().startsWith(client.config.prefix)) return;

    let [cmd, ...args] = message.content
      .slice(client.config.prefix.length)
      .trim()
      .split(/ +/g);

    let command =
      client.commands.get(cmd.toLowerCase()) ||
      client.commands.get(client.aliases.get(cmd.toLowerCase()));
    if(message.content == `<@1018594939451486228>` || message.content == `<@!1018594939451486228>`){
      message.reply({ embeds: [
      new EmbedBuilder()
      .setDescription(`⭐ Olá, eu sou a **safira**, prazer em conhecer você **${message.author.username}**, você pode adicionar clicando [aqui](https//discord.com/)`)
      .setColor("#89b4fa")
    ]})
    }
    if (!command) return
    command.run({ args, client, message })
  },
});
