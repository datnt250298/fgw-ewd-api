  
// Configure server
const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection");

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

async function init() {
  await dbConnection.connect();
  await startServer();
}

init();