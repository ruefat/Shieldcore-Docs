# Registering commands

A command can be register like so:
```ts
// server
import { YOURCOMMAND } from "./path/file"; // import your command
import { Shieldcore } from "@rbxts/shieldcore";

Shieldcore.RegisterCommand(YOURCOMMAND);
```