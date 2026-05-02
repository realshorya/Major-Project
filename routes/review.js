const express = require("express");
const router = express.Router({mergeParams:true});
const methodOverride = require("method-override");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isReviewAuthor,validateReview} = require("../middleware.js");

const reviewController = require("../controller/review.js");

//review post route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.distroyReview));

module.exports=router;