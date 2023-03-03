const express = require("express");
const categoryService = require("../services/CategoryServices");

const countcat = async (req, res) => {
  try {
    const cmp = await categoryService.countcat()
    res.status(200).json({ catCount: cmp });
    console.log("dd")
  } catch {
    res.status(500).json(error);
  }
};
const getAllCategories = async (req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
};
const getCategoryById = async (req, res) => {
  try {
    const result = await categoryService.getCategoryById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
async function createCategory(req, res) {
  try {
    const result = await categoryService.addCategory(req.body);
    res.status(200).json({ result, msg: "created" });
  } catch (error) {
    res.status(500).json(error);
  }
}
const updateCategoryByID = async (req, res) => {
  try {
    console.log(req.body);
    const result = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.status(200).json({ msg: "updated" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
const deleteCatgory = async (req, res) => {
  try {
    await categoryService.deleteCategoryById(req.params.id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryByID,
  deleteCatgory,
  countcat
};
