const teams = (connection, Sequelize) => {
    return connection.define('teams', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        location: {
            type: Sequelize.string
        },
        mascot: {
            type: Sequelize.string
        },
        abbreviation: {
            type: Sequelize.string
        },
        conference: {
            type: Sequelize.ENUM('AFC', 'NFC')
        },
        division: {
            type: Sequelize.ENUM('North', 'South', 'East', 'West')
        }
    }, {
        paranoid: true
    })

}

module.exports = teams