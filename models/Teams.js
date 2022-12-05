const mongoose = require("mongoose");


const TeamsSchema = mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        lowercase: true

    },
    team_country: {
        type: String,
        requried: true,
        lowercase: true
    },
    team_players: {
        type: Object,
        required: true,
        lowercase: true
    }
})



module.exports = mongoose.model('teams', TeamsSchema);