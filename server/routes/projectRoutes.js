const router = require("express").Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, projectController.create);
router.get("/", auth, projectController.getAll);
router.put("/:id", auth, projectController.update);
router.delete("/:id", auth, projectController.remove);  
router.get("/:id", auth, projectController.getOne);


module.exports = router;
