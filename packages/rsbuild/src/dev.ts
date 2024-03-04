import { crate_name }                       from '&cargo.ts'
import { SRC }                              from '&paths.ts'
import { build_dev, generate_bindings_dev } from '&stages.ts'
import { Command }                          from 'clipanion'
import { watch }                            from 'node:fs/promises'

export class DevCommand extends Command {
	static paths = [['dev']]

	async execute() {
		const watcher = watch(SRC, { recursive: true })

		await this.build()

		for await (const _ of watcher) {
			await this.build()
		}
	}

	async build() {
		const crate = await crate_name()
		await build_dev()
		await generate_bindings_dev(crate)
	}
}
