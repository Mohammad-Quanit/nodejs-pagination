const express = require("express")
const app = express()

const users = require("./users.json")

app.get("/users", (req, res) => {
	const page = parseInt(req.query.page)
	const limit = parseInt(req.query.limit)

	const startIndex = (page - 1) * limit
	const endIndex = page * limit

	const results = {}

	results.results = users.slice(startIndex, endIndex)
	results.next = { page: page + 1, limit }
	results.previous = { page: page - 1, limit }

	res.json(results)
})

app.listen(3001, () => console.log("running on 3001"))