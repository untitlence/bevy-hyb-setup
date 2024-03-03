import { package_json }  from '&schema.ts'
import { fileURLToPath } from 'node:url'
import type { Plugin }   from 'vite'
import { join }          from 'path'

const { $ } = Bun

const N_PREFIX = 'crate:'
const PREFIX = '\0crate:'
const ROOT = fileURLToPath(new URL('../../..', import.meta.url))
const WASM_DIR = join(ROOT, '.wasm_crates')
const BIN = fileURLToPath(new URL('../bin', import.meta.url))
const TARGET_DEBUG = join(ROOT, 'target', 'wasm32-unknown-unknown', 'debug')

export function plugin(): Plugin {
	return {
		name: 'rsbuild',
		apply: 'serve',

		resolveId(id) {
			if (id.startsWith(N_PREFIX)) {
				return `\0${id}`
			}
		},

		async load(id) {
			if (id.startsWith(PREFIX)) {
				const crate = id.substring(PREFIX.length)
				console.log('Crate name:', crate)
				await $`cargo build --package ${crate} --target wasm32-unknown-unknown`
				const wasm = join(TARGET_DEBUG, crate)
				const out_dir = join(WASM_DIR, crate)
				await $`wasm-bindgen --target web --reference-types --out-name crate --out-dir ${out_dir} ${wasm}.wasm`.cwd(BIN)
				await Bun.write(join(out_dir, 'package.json'), package_json(crate))
				return Bun.file(join(out_dir, `crate.js`)).text()
			}
		},
	}
}
