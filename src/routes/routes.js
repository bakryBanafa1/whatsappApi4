const expres = require("express");
const router = expres.Router();
const whatsappController = require("../controllers/whatsappControllers");

router
.get("/", whatsappController.VerifyToken)
.post("/", whatsappController.receivedMessage)

module.exports = router;