const fs = require("fs")
let steps
try {
	steps = JSON.parse(fs.readFileSync(process.env.PIPEDREAM_STEPS))
} catch {
	//ignore
}
const $ = {
	export(name, value) {
		fs.appendFileSync(process.env.PIPEDREAM_EXPORTS, `${name}:json=${JSON.stringify(value)}\n`)
	}
}
module.exports = { steps, $ }
