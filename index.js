const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')
const Op = require('sequelize').Op
const app = express()

app.get('/teams', async (request, response) => {
    const teams = await models.teams.findAll()
    response.send(teams)
})

app.get('/teams/:identifier', async (request, response) => {
    const {
        identifier
    } = request.params
    const matchingTeams = await models.teams.findAll({
        where: {
            [Op.or]: [{
                id: identifier
            }, {
                abbreviation: identifier.toUpperCase()
            }]
        }
    })
    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})
app.use(bodyParser.json())

app.post('/teams', async (request, response) => {
    const {
        location,
        mascot,
        abbreviation,
        conference,
        division
    } = request.bod

    if (!location || !mascot || !abbreviation || !conference || !division) {
        response.sendStatus(400).send('The following attributes are required: location, mascot, abbreviation, conference, division')
    }
    const newTeam = await models.teams.create({
        location,
        mascot,
        abbreviation,
        conference,
        division
    })
    response.sendStatus(201).send(newTeam)
})
app.all('*', (request, response) => {
    response.sendStatus(404)
})
const server = app.listen(1337, () => {
    console.log('listening on port 1337')
})

module.exports = server