  
// Configure server
const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection");

const db = require("./models")
const {User, Faculty, Topics} = db;

const app = express();
app.use(cors());
app.use(express.json());

require("./routes/auth.routes")(app);


// Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to FGW - Enterprise Web Development backend project" });
});

const PORT = process.env.PORT || 8080;

function startServer() {
  return new Promise((resolve) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
      resolve();
    });
  });
}

// Create mock db
// function initDatabase() {
  // User -> 4 type of users (student, admin, mc, mm)
  // Faculty -> 3 type of faculties (IT, Design, Business)
  // Topic -> 3 topics (3 type of due date) of each faculty
// }

async function init() {
  await dbConnection.connect();
  await startServer();
}

init();