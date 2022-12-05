const mongoose = require("mongoose");


const TeamsSchema = mongoose.Schema({
    team_name: {
        type: String,
        required: true,


    },
    team_country: {
        type: String,
        requried: true,

    },
    team_players: {
        type: Array,
        required: true,

    }
})



module.exports = mongoose.model('teams', TeamsSchema);