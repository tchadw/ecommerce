const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isCustomer } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { create, eventHistory } = require("../controllers/event");

router.post("/event/create/:userId", requireSignin, isAuth, isCustomer, create);

router.get("/events/by/user/:userId", requireSignin, isAuth, eventHistory);

router.param("userId", userById);

module.exports = router;
