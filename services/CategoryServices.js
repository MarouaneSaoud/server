const express = require("express");
const Category = require("../model/Category");

async function getAllCategories() {
  return await Category.find({});
}
const getCategoryById = async (id) => {
  return await Category.findOne({ _id: id });
};
async function addCategory(categorie) {
  return await Category.create(categorie);
}
const updateCategory = async (id, categorie) => {
  return await Category.findOneAndUpdate({ _id: id }, categorie, { new: true });
};

const deleteCategoryById = async (id) => {
  return await Category.deleteOne({ _id: id });
};
module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
  getCategoryById,
  deleteCategoryById,
};
