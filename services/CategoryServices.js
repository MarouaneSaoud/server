const express = require ("express");
const Categories=require("../model/Category")

async function addCategory(categorie){
    //return await Categories.create(categorie)
   return await Categories.create(categorie)
}

async function getAllCategories(){
    return await Categories.find();
}
 const updateCategory = async(id,categorie)=> {
    return await Categories.findOneAndUpdate({_id:id},categorie,{new:true});

 }
 const getCategoryById= async (id) =>{
    return await Categories.findOne({_id:id});
 }
 const deleteCategoryById= async (id) =>{
    return await Categories.deleteOne({_id:id})
 }
 module.exports={
    addCategory,getAllCategories,updateCategory ,getCategoryById,deleteCategoryById
 }