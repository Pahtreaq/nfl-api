const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:x', (request, response) => {
    const x = request.params.x
    const matchingTeams = teams.filter((team) => {
        return team.id === Number(x)
    })
    response.send(matchingTeams)
})
if (matchingTeams.length) {
    response.send(matchingTeams)
} else {
    response.sendStatus(404)
}

app.all('*', (request, response) => {
    response.sendStatus(404)
})

const server = app.listen(1337, () => {
    console.log('listening on port 1337')
})

module.exports = server