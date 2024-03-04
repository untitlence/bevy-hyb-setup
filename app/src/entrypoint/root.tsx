import '&css/preflight.ts'
import init, { run } from '@crate/vide'
import { useEffect } from 'react'

function Canvas() {
	useEffect(() => {
		init().then(run)
	}, [])

	return (
		<div>
			<canvas id="canvas">

			</canvas>
		</div>
	)
}

export function Root() {
	return <Canvas/>
}
