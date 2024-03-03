import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/cli.ts'],
	platform: 'node',
	format: 'esm',
	clean: true,
})
