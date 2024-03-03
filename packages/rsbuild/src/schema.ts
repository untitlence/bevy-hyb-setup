export function package_json(name: string) {
	return `\
{
	"name": "@crate/${name}",
	"private": "true",
	"main": "crate.js",
	"types": "crate.d.ts"
}\
`
}
