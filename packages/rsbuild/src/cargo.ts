import { CARGO_TOML } from '&paths.ts'
import { parse } from 'smol-toml'

type CargoToml = {
	package: {
		name: string
	}
}

export async function crate_name() {
	const cargo_toml_text = await Bun.file(CARGO_TOML).text()
	const cargo_toml = parse(cargo_toml_text) as CargoToml

	return cargo_toml.package.name
}
