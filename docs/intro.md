---
sidebar_position: 1
---

# Getting Started

## Installation

```bash
npm install @rbxts/shieldcore
```

## Starting Shieldcore
Centurion only needs to be started once on the server

```ts
import { Shieldcore } from "@rbxts/shieldcore";

Shieldcore.start()
```

## Registration

Here is a example of how you can register a command

```ts
import { COMMAND } from "./path/file"
import { Shieldcore } from "@rbxts/shieldcore";

Shieldcore.RegisterCommand(COMMAND);
```