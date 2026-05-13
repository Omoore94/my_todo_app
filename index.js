const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //data base set up
const router = require("./routes/todoRoutes");
//live url from mongodb atlas
const live_url = "mongodb+srv://dev_omoore:dev_omoore1234@cluster0.qogxebr.mongodb.net/userDB?appName=Cluster0"
//local url for mongodb compass
const local_url = "mongodb://localhost:27017/userDB"

//.connect method opens a channel for communication with your mongoDB
mongoose.connect(live_url)
.then(() => console.log("MongoDB Connected")) //.then handles the success message after connection
.catch(err => console.error("Connection Error: ", err)); //.catch handles any rejection/error during connection.





const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router)


app.get('/', (req, res) => {
    res.send('Hello World')
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});