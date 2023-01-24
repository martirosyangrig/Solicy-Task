const path = require("path");
const users = require("../models/getUsers")
class UserController {

    static getAccountPage(req, res) {
        res.sendFile(path.join(__dirname, "../../client/htmls/index.html"));
    }

    static getUserInfoPage(req, res) {
        res.sendFile(path.join(__dirname, "../../client/htmls/user.html"));
    }

    static getUsersData(req, res) {
        res.send(users)
    }

    static getOneUserData (req, res) {
        const user = users.find(user => user.id === parseInt(req.params.id));
        res.send(user);
    }
}

module.exports = UserController