import chalk from "chalk";
import { Event } from "../../Structures/Classes/Event";

export default new Event({
  name: "shardReady",
  once: true,
  run(client, id) {
    console.log(chalk.white.bold("━━━━━━━━━━━━━━━━━━━━━[ Shards ]"))
    console.log(`${chalk.whiteBright.bold(`[ ${chalk.blueBright.bold("Shard")} ]`)} launched: ${chalk.greenBright.bold(`${id}#`)}`)

//client.manager.init();
  },
})