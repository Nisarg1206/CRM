const express = require('express');
const cors = require('cors');
const contactRoutes =require("./routes/contactRoute");
const database = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 4000

database.connect();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
    }
));

app.use("/api/v1", contactRoutes)

app.get("/", (req, res) => {
    return res.json(
        {
            success: true,
            message:`Your server is up and running on ${PORT}.....`,
        }
    )
})
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})