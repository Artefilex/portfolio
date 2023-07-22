
// Express application created.
const express = require("express")
const app = express();



// database connection 
const sequelizeDb = require("./db/sql")
const dummyData = require("./db/dummydata")
const bodyParser = require("body-parser");

// routes 
const main = require("./routes/main")
const about = require("./routes/about")

// Add CORS middleware to the Express application with specific options.
const cors = require("cors")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

app.use("/",main);
app.use("/about",about)

async function sync() {
     await sequelizeDb.sync({ force: true });
     await dummyData();
  }
  sync();

app.listen(4000, () => {
    console.log("Port 4000 dinleniyor");
  });