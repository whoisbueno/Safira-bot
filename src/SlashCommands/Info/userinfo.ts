import { SlashCommandBuilder } from "../../Structures/Classes/SlashCommand";
import { ApplicationCommandOptionType, EmbedBuilder, AttachmentBuilder } from "discord.js";
import { profileImage } from "discord-arts"
export default new SlashCommandBuilder({
  name: "userinfo",
  description: "Look at a user's information",
  options: [

        {

            name: 'user',

            type: ApplicationCommandOptionType.User,

            description: 'Marque o user ',

            required: false

        },  

    ], 
  async run({ client, interaction}) {
    await interaction.deferReply({ ephemeral: false });
    try {
    const user = interaction.options.getUser("user") || interaction.user

    
    let bufferImg = await profileImage(user);
    let imgAttachment = new AttachmentBuilder(bufferImg, { name: "profile.png"});



interaction.followUp({ content: `🖌 › Informações simples de **${user.tag}**.`, files: [imgAttachment]})
    } catch(err) {
     interaction.reply(`😕 › Eu não consegui criar o perfil do usuário.`)
    }


  },
})