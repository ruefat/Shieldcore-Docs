# Defining commands

Commands are defined using the command class

A command can be defined like so:
```ts
import { Command, Shieldcore } from "@rbxts/shieldcore";

const printCommand = new Command(
    "print",
    (args, player) => {
        print(`Arguments: ${args.join(", ")} from ${player}`)
    },
    "print something",
    "/print <args...>",
    (player) => player.UserId === 1,
)
```