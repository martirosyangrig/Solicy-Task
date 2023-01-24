const express = require("express");
const router = express.Router();
const UsersController = require("../controlers/UsersController");

router.get("/", (req, res) => {
    res.redirect("/accounts");
});


router.get("/accounts", UsersController.getAccountPage);
router.get("/accounts/:id", UsersController.getUserInfoPage);
router.get("/users", UsersController.getUsersData);
router.get("/userinfo/:id", UsersController.getOneUserData);


module.exports = router;