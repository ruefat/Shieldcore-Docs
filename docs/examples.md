---
sidebar_position: 2
---

# Examples

## Kick Command
```ts
import { Command } from "@rbxts/shieldcore";
import { Players } from "@rbxts/services";

const Moderators = [12345678];

function isModerator(player: Player): boolean {
	return Moderators.includes(player.UserId);
}

export const kickCommand = new Command(
	"kick",
	(args: string[], player: Player) => {
		const targetName = args[0];

		const target = Players.FindFirstChild(targetName) as Player | undefined;
		if (!target || !target.IsA("Player")) {
			player.Kick(`Player "${targetName}" not found.`);
			return;
		}

		target.Kick(`You were kicked by ${player.Name}.`);
		print(`${player.Name} kicked ${target.Name}`);
	},
	"Kicks a player from the server.",
	"/kick [player]",
	isModerator,
);

```