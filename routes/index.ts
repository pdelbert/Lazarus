const express = require('express');

import v1Routes from "./v1";

const usersRoute = express.Router();

usersRoute.use('/v1', v1Routes);

export default usersRoute;