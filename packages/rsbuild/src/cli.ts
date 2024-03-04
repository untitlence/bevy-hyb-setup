#!/usr/bin/env node

import { DevCommand }  from '&dev.ts'
import { WasmCommand } from '&wasm.ts'
import { runExit }     from 'clipanion'

runExit([DevCommand, WasmCommand])
