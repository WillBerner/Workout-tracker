const router = require('express').Router();

const Workout = require('../models/Workout.js');

router.get("/api/workouts", ({body}, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts)
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({body}, res) => {
    res.json({ message: "workouts put success!" })
});

router.post("/api/workouts", ({body}, res) => {
    res.json({ message: "workouts post success!" })
});

router.get("/api/workouts/range", ({body}, res) => {
    res.json({ message: "workouts range success!" })
});

module.exports = router;