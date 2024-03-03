import '&css/preflight.ts'
import init, { hello } from '@crate/hello'

await init()
console.log(hello())

export function Root() {
	return <h1>Hi</h1>
}
