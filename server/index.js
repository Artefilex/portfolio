const express = require("express")
const main = require("./routes/main")
const app = express();
const cors = require("cors")
const sequelizeDb = require("./db/sql")
const dummyData = require("./db/dummydata")


app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

app.use("/",main);
async function sync() {
     await sequelizeDb.sync({ force: true });
     await dummyData();
  }
  sync();

app.listen(4000, () => {
    console.log("Port 4000 dinleniyor");
  });