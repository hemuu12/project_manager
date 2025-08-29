const router = require("express").Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");

router.post("/:projectId", auth, taskController.create);
router.get("/:projectId", auth, taskController.getAll);
router.put("/:id", auth, taskController.update);
router.delete("/:id", auth, taskController.remove);

module.exports = router;
