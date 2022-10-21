const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.get("/", (req, res) => {
  getGoals(req, res);
});

router.post("/", (req, res) => {
  setGoal(req, res);
});

router.put("/:id", (req, res) => {
  updateGoal(req, res, req.params.id);
});
router.delete("/:id", (req, res) => {
  deleteGoal(req, res, req.params.id);
});

module.exports = router;
