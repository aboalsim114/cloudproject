const express = require("express");
const router = express.Router();
const TeamsModel = require("../models/Teams");
var bodyParser = require('body-parser')






// get all teams
router.get("/", async(req, res) => {

    try {
        const teams = await TeamsModel.find();
        res.send(teams);
    } catch (err) {
        console.log(err);
    }

})




// get team by id 
router.get("/id=:teamId", async(req, res) => {
    const teamId = req.params.teamId;
    try {
        const teamById = await TeamsModel.findById(teamId);
        res.send(teamById);
    } catch (err) {
        console.log(err);
    }


})




// update team details

router.patch('/teamId=:id', async(req, res) => {
    try {
        const updateTeambyId = await TeamsModel.updateOne({ _id: req.params.id }, {
            $set: {
                team_name: req.body.team_name,
                team_country: req.body.team_country,

            }
        })
        res.send(updateTeambyId)
    } catch (err) {
        res.send({ message: err })
    }
})



// delete team details

router.delete("/teamId=:id", async(req, res) => {
    try {
        const team = await TeamsModel.findById(req.params.id);
        await team.remove();
        res.send({ message: "the team has been removed" });
    } catch (err) {
        console.log(err);
    }
})






module.exports = router;