import { SlashCommandBuilder } from "../../Structures/Classes/SlashCommand";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default new SlashCommandBuilder({
  name: "botinfo",
  description: "See a short description about me",
  async run({ client, interaction}) {
    const button = new ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("📎").setLabel('Invite').setURL('https://discord.com/api/oauth2/authorize?client_id=1018594939451486228&permissions=139589845056&scope=bot%20applications.commands'); 
    const pag1 = new ButtonBuilder().setLabel("Machine").setEmoji("⚙").setStyle(ButtonStyle.Secondary).setCustomId("pag1")
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([button, pag1]);

    interaction.reply({ embeds: [
      new EmbedBuilder()
      .setAuthor({ name: `Pequenas informações - Botinfo`, iconURL: client.user.displayAvatarURL()})
      .setDescription("🐋 › Olá, meu nome é Safira e eu sou uma bot para qualquer funções do seu servidor, **moderação, música** entre outras coisas\n\n⚙ › Eu fui feita usando a linguagem de programação <:typescript:1018858280715558922> [TypeScript](https://www.typescriptlang.org/), tendo como livraria <:djs:1018858321719078992> [Discord.js v14](https://discord.js.org/#/).\n\n😍 › Se você quiser me adicionar em seu servidor clique [aqui](https://discord.com/api/oauth2/authorize?client_id=1018594939451486228&permissions=139589845056&scope=bot%20applications.commands), agradeço por todo apoio!")
      .addFields(
        {
          name: "🏅 › Menções Honrosas",
          value: `• Obrigada \`${await client.users.fetch('465859183250767882').then(user => user.tag)} & ${await client.users.fetch('714598376137687050').then(user => user.tag)}\` pois me desenvolveram.\n• Obrigada \`${interaction.user.tag}\` por me ajudar a crescer e por me usar no seu servidor :3`,
          inline: false
        }
      )
      .setFooter({ text: `Criada por: ${await client.users.fetch('465859183250767882').then(user => user.tag)} & ${await client.users.fetch('714598376137687050').then(user => user.tag)}`, iconURL: `${await client.users.fetch('465859183250767882').then(user => user.displayAvatarURL())}`})
       .setColor("#89b4fa")
    ], components: [
      row
    ]})
    const filter1 = i => i.user.id === interaction.user.id;
	const collector1 = interaction.channel.createMessageComponentCollector({ filter: filter1, time: 20000 });

  collector1.on('collect', async (x) => {
    if (x.customId === 'pag1') {
      interaction.followUp({ content: `🛰 › Safira Rewrite TypeScript\n› Github: [SafiraSource](https://github.com/whoisbueno/Safira-bot)\n› Memória Utilizada: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\`\n› Servidores: \`${client.guilds.cache.size}\`\n› Criada em: \`${client.user.createdAt.toLocaleDateString('pt-BR')}\`\n› Shards: \`2/2\`\n› Ping: \`${client.ws.ping}\``, ephemeral: true})
    }
  })
  },
})