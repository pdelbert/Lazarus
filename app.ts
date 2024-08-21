import express, { Express } from "express";
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

//Routes Call
import routes from "./routes";

const app:Express = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cookieParser());

//App Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`🍔 Lazarus Server - Listening Port: ${PORT}`);
})