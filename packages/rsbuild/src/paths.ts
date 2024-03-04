import { fileURLToPath } from 'node:url'
import { join }          from 'node:path'

export const CWD = process.cwd()
export const SRC = join(CWD, 'src')
export const WORKSPACE = fileURLToPath(new URL('../../..', import.meta.url))
export const BIN = fileURLToPath(new URL('../bin', import.meta.url))
export const TARGET = join(WORKSPACE, 'target', 'wasm32-unknown-unknown')
export const TARGET_DEBUG = join(TARGET, 'debug')
export const TARGET_RELEASE = join(TARGET, 'release')
export const CARGO_TOML = join(CWD, 'Cargo.toml')
export const OUT_DIR = join(CWD, 'dist')
