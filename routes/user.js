const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/user.js");

router.route("/signup")
.get((userController.getSignup))
.post(wrapAsync(userController.postSignup));

router.route("/login")
.get(userController.getLogin)
.post(saveRedirectUrl,passport.authenticate("local",{
    failureRedirect:"/login",failureFlash:true,}),(userController.postLogin));

router.get("/logout",(userController.getLogout));

module.exports=router;