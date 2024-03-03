import rsbuild                  from '@repo/rsbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react                    from '@vitejs/plugin-react'
import { fileURLToPath }        from 'node:url'
import { defineConfig }         from 'vite'

export default defineConfig({
	plugins: [react(), vanillaExtractPlugin(), rsbuild()],
	resolve: {
		alias: [
			{
				find: /^&/,
				replacement: fileURLToPath(new URL('./src/', import.meta.url)),
			},
		],
	},
})