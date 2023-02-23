const { Router } = require("express");
const { getusers } = require("../controllers/user.controller");
const router = Router();

router.get('/', getusers);





module.exports= router;