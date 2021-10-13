const router = require('express').Router();

const Workout = require('../models/Workout.js');

router.get("/api/workouts", ({ body }, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts)
        }).catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        {
            $push: {
                "exercises": {
                    type: req.body.type,
                    name: req.body.name,
                    distance: req.body.distance,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
                }
            }
        },
        { safe: true, upsert: true, new: true },
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Success!");
                console.log(result);
                res.json(result);
            }
        }
    );
});

router.post("/api/workouts", ({ body }, res) => {

    Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        })

});

router.get("/api/workouts/range", ({ body }, res) => {
    res.json({ message: "workouts range success!" })
});

module.exports = router;