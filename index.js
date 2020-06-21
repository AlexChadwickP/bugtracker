import Express from "express";

const app = Express();
// Defines the port that will be used whilst in development
const PORT = 8080;

// Defines where Express can find the html files it has to return
app.use(Express.static('views'));

// Returns index.html if no other path is specified
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

// Starts the app and logs the port in which the app is listening to
app.listen(PORT, () => console.log("Listening on port " + PORT + "\nhttp://localhost:" + PORT));