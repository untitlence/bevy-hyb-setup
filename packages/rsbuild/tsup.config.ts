import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	platform: 'node',
	format: 'esm',
	dts: true,
	clean: true,
})
