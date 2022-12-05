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

router.patch("/:id", async(req, res) => {


    try {
        const id = req.params.id;
        const update = req.body;
        const options = { new: true };


        const team = await TeamsModel.findByIdAndUpdate(id, update, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
        res.send(team);

    } catch (err) {
        res.status(404).send({ error: err })
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



// create team 

router.post("/:id", async(req, res) => {
    const id = req.params.id;
    const newTeam = new TeamsModel({
        team_name: req.body.team_name,
        team_country: req.body.team_country,
    })

    try {
        const saveTeam = await newTeam.save();
        res.send(saveTeam);
    } catch (err) {
        console.log(err);
    }


})




module.exports = router;