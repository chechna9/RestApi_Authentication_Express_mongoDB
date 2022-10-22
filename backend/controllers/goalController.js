const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals);
});

// @desc Set goal
// @route Set /api/goals
// @access Private
const setGoal = asyncHandler (async(req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const goal = await Goal.create({
    text : req.body.text
  })
  res.status(200).json(goal);
});
// @desc Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req, res) => {
  const goal = await Goal.findById(req.params.id);
   
  if(!goal){
    res.status(400)
    throw new Error('Goal not found');
  }
  console.log(`updated ${req.body}`)
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});

  res.status(200).json(updatedGoal);
});
// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async(req, res, id) => {

  const goal = await Goal.findById(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error('Goal not found');
  }
  await goal.remove();
  res.status(200).json({ message: `goal deleted ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
