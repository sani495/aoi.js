const Interpreter = require("../core/interpreter.js");
module.exports = async (shard, cmds, client) => {
    for (const cmd of cmds.shardCreate.array()) {
        const id = cmd?.channel?.includes("$")
            ? (
                  await Interpreter(
                      client,
                      {},
                      [],
                      {
                          name: "channelParser",
                          code: cmd.channel
                      },
                      client.db,
                      true
                  )
              )?.code
            : cmd.channel;
        const channel = client.channels.cache.get(id);
        if (!channel) return;

        await Interpreter(
            client,
            {},
            [],
            cmd,
            client.db,
            false,
            undefined,
            {
                shard
            },
            channel
        );
    }
};
