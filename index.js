const fs = require("fs")
const steps = JSON.parse(process.env.PIPEDREAM_STEPS || "null")
const $ = {
	export(name, value) {
		fs.appendFileSync(process.env.PIPEDREAM_EXPORTS, `${name}:json=${JSON.stringify(value)}\n`)
	}
}
module.exports = { steps, $ }
