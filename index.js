var express = require('express')
var teams = require('./teams.json')

var app = express()
app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:id', (request, response) => {
    var matchingTeams = teams.filter((item) => {
        return item.id === request.params.id
    })
    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})

app.get('/teams/:abbreviation', (request, response) => {
            var matchingAbbreviation = abbreviation.filter((item) => {
                return item.abbreviation === request.params.abbreviation
            })

            app.all('*', (request, response) => {
                response.sendStatus(404)
            })
            app.listen(1337, () => {
                console.log {
                    'listening on 1337...')
            })

            module.exports = app