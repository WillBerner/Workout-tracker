const router = require('express').Router();

router.get("/api/workouts", ({body}, res) => {
    res.json({ message: "workouts get success!" })
});

router.put("/api/workouts/:id", ({body}, res) => {
    res.json({ message: "workouts put success!" })
});

router.post("/api/workouts", ({body}, res) => {
    // res.json({ message: "workouts post success!" })
});

router.get("/api/workouts/range", ({body}, res) => {
    res.json({ message: "workouts range success!" })
});

module.exports = router;