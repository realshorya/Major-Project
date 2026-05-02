const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const Review = require("../models/review.js");
const {isLoggedIn,isOwner,validateListing} =require("../middleware.js");
const multer = require("multer");
const { saveRedirectUrl } = require("../middleware.js");
//Cloudinary Cloud require
const {storage}=require("../cloudconfig.js");
const upload = multer({storage});

const listingController = require("../controller/listing.js");

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.postNewListing));

//search listing route
router.get("/search",wrapAsync(listingController.searchListing));
//filter listing route
router.get("/filter",wrapAsync(listingController.filterListing));
//trending listing route
router.get("/trending",wrapAsync(listingController.trendingListing));

//new listing route
router.get("/new",isLoggedIn,(listingController.getNewListing));

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingController.putEditListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.distroyListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.getEditListing));

module.exports=router;
