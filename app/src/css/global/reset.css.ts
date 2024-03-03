import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
	margin: 0,
	padding: 0,
	font: 'inherit',
})

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
})

globalStyle('html', {
	colorScheme: 'dark light',
})

globalStyle('body', {
	minHeight: '100vh',
})

globalStyle('img, picture, svg, video', {
	display: 'block',
	maxWidth: '100%',
})
