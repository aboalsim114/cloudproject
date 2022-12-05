const express = require("express");
const router = express.Router();
const TeamsModel = require("../models/Teams");


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






// delete team details







module.exports = router;