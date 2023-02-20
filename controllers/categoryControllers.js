const express=require("express")
const catService=require("../services/CategoryServices")

const getAllCategories =async (req,res) =>{
    try{
        const result = await catService.getAllCategories;
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({err:error});
    }
}
const getCategoryById = async(req,res) =>{
    try {
        const result = await catService.getCategoryById(req.params.id);
    } catch (error){
        res.status(500).json({err:error})
    }
}
async function createCategory(req,res){
    try {
        const result = await catService.addCategory(req.body);
        res.status(200).json({result,msg:"created"});
    } catch (error){
        res.status(500).json(error);
    }
}
const updateCategoryByID = async(req,res) =>{
    try{
        console.log(req.body);
        const result = await catService.updateCategory(req.params.id,req.body);
        res.status(200).json({msg :"updated"});

    } catch(error) {
        res.status(500).json({err:error});
    }

}
const deleteCatgory = async (req,res) =>{
    try {
        await catService.deleteCategoryById(req.params.id);
        res.status(200).json({msg:"deleted"});
    } catch (error) {
        res.status(500).json({err:error});
    }
}
module.exports={
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryByID,
    deleteCatgory 
}