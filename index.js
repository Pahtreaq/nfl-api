const express = require('express')
const teams = require('./teams.json')
const bodyParser = require('body-parser')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:identifier', (request, response) => {
    const identifier = request.params.identifier
    const matchingTeams = teams.filter((team) => {
        return team.id === Number(identifier)
    })
    response.send(matchingTeams)
})

if (matchingTeams.length) {
    response.send(matchingTeams)
} else {
    response.sendStatus(404)
}
app.use(bodyParser.json())
app.post('/teams', (request, response) => {
const post = (id, location, mascot, abbreviation, conference, division) = request.body

if(!id || !location || !mascot || !abbreviation || !conference || !division){
    response.sendStatus(400).send('This following attributes are required: id, location, mascot, abbreviation, conference, division')
}
teams.push({id, location, mascot, abbreviation, conference, division})
response.sendStatus(201)
})


app.all('*', (request, response) => {
    response.sendStatus(404)
})

const server = app.listen(1337, () => {
    console.log('listening on port 1337')
})

module.exports = server