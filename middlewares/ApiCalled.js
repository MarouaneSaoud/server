const express=require("express")

const methode =(request , response , next) =>{
    console.log(`${request.method}:${request.url}`);
    next();
}

module.exports=methode 