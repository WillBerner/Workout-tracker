// Import dependencies
const express = require('express');
const mongoose = require('mongoose');

// Set local port to 3000 if not deployed
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

// Boilerplate express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static webpages
app.use(express.static("public"));

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Connect routes
app.use(require("./routes/api.js"));

// Start the server up
app.listen(PORT, () => {
    console.log(`App running at localhost:${PORT}`);
});