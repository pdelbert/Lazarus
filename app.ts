import express, { Express } from "express";
const bodyParser = require('body-parser');

//Routes Call
import routes from "./routes";


const app:Express = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//App Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`🍔 Lazarus Server - Listening Port: ${PORT}`);
})