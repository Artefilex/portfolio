const express = require("express")
const main = require("./routes/main")
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

app.use("/",main);


app.listen(4000, () => {
    console.log("Port 4000 dinleniyor");
  });