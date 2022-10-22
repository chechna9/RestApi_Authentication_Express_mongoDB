const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const {protect} = require('../middleware/authMiddleware')

router.route("/").get(protect,getGoals).post(protect,setGoal);
router.route("/:id").put(protect,updateGoal).delete(protect,deleteGoal);


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
