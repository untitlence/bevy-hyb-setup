import { BIN, OUT_DIR, TARGET_DEBUG } from '&paths.ts'
import { join }                       from 'node:path'

const { $ } = Bun

export function build_dev() {
	return $`cargo build --target wasm32-unknown-unknown`
}

export function build_release() {
	return $`cargo build --target wasm32-unknown-unknown --release`
}

export function generate_bindings_dev(crate: string) {
	const artifact = join(TARGET_DEBUG, `${crate}.wasm`)
	return $`wasm-bindgen --target web --reference-types --out-name crate --out-dir ${OUT_DIR} ${artifact}`.cwd(BIN)
}
