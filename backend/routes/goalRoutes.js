const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);


// we can reougroup like abouve in router.route
// to have cleaner code

// router.get("/", (req, res) => {
//   getGoals(req, res);
// });

// router.post("/", (req, res) => {
//   setGoal(req, res);
// });

// router.put("/:id", (req, res) => {
//   updateGoal(req, res);
// });
// router.delete("/:id", (req, res) => {
//   deleteGoal(req, res);
   
// });

module.exports = router;
