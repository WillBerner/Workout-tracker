const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                require: "Error: Please include an exercise type, either cardio or resistance"
            },
            name: {
                type: String,
                require: "Error: Please include a name for this exercise"
            },
            duration: {
                type: Number,
                require: "Error, Please include a exercise duration"
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;