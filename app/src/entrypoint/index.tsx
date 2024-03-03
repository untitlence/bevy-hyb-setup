import { createRoot } from 'react-dom/client'
import { Root }       from './root.tsx'

export function render() {
	createRoot(document.getElementById('root')!).render(<Root/>)
}
