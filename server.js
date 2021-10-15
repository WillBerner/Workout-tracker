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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Serve static html files
app.get('/exercise', (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html");
});
app.get('/stats', (req, res) => {
    res.sendFile(__dirname + "/public/stats.html");
})

// Connect routes
app.use(require("./routes/api.js"));

// Start the server up
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});