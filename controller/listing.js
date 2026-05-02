const Listing = require("../models/listing.js");
const cloudinary = require("cloudinary").v2;

module.exports.index = async (req,res)=>{
    let listings= await Listing.find();
    res.render("listings/index.ejs",{listings});
};

module.exports.getNewListing = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Property does not exist!");
        res.redirect("/listings");
    }else{
        res.render("listings/show.ejs",{listing});
    }
};

module.exports.postNewListing = async (req,res)=>{
    const newListing= new Listing(req.body.listing);
    
    const url = req.file.path;
    const filename = req.file.filename;

    newListing.owner = req.user._id;
    newListing.image={url,filename};

    await newListing.save();
    req.flash("success","Property Added Successfully!");
    res.redirect("/listings");
};

module.exports.getEditListing = async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload/","/upload/w_250/");
    
    if(!listing){
        req.flash("error","Property does not exist!");
        res.redirect("/listings");
    }else{
        res.render("listings/edit.ejs",{listing,originalImageUrl});
    }
};

module.exports.putEditListing = async (req,res)=>{
    if(!req.body || !req.body.listing){
        throw new ExpressError(404,"Send valid data for listing");
    }
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(
        id,
        req.body.listing,
        {runValidators:true, returnDocument:"after"}
    );

    if (typeof req.file !== "undefined") {
        const url = req.file.path;
        const filename = req.file.filename;
        listing.image = { url, filename };

        await listing.save();
    }

    req.flash("success","Information Updated Successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.distroyListing = async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);

    
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    
    if (listing.image && listing.image.filename !== "listingimage") {
        await cloudinary.uploader.destroy(listing.image.filename);
    }
    
    await Listing.findByIdAndDelete(id);

    req.flash("success","Property Deleted Successfully!");
    res.redirect("/listings");
};

module.exports.searchListing = async (req,res)=>{
    let {listingTitle}=req.query;
    let list = await Listing.findOne({title:listingTitle});
    if(list==null){
        req.flash("error","Please enter correct name");
        res.redirect(req.headers.referer);
    }else{
        res.render("listings/index.ejs",{listings:[list]});
    }
};

module.exports.filterListing = async (req,res)=>{
    let {listingCategory}=req.query;
        let listings = await Listing.find({category:listingCategory});
        if(listings.length==0){
            req.flash("error","Not available!");
            res.redirect("/listings");
        }else{
            res.render("listings/index.ejs",{listings});
        }
};

module.exports.trendingListing = async (req, res) => {
    const listings = await Listing.aggregate([
        { $sample: { size: 8 } }
    ]);
    res.render("listings/index.ejs", { listings });
};