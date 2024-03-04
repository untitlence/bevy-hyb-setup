import { crate_name }                       from '&cargo.ts'
import { build_dev, generate_bindings_dev } from '&stages.ts'
import { Command }                          from 'clipanion'

export class WasmCommand extends Command {
	static paths = [['wasm']]

	async execute() {
		const crate = await crate_name()
		await build_dev()
		await generate_bindings_dev(crate)
	}
}
