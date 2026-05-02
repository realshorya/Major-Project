const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main().then((res)=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDb= async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"69f18a756bdc2cbe967047b2"}));
    await Listing.insertMany(initData.data);
    console.log("Data Inserted");
}

initDb();