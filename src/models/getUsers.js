const path = require("path");
const fs = require("fs");


const dataFile = fs.readFileSync(path.resolve("db.json"), "utf8"); 
const usersData = JSON.parse(dataFile); 
const users = usersData.users; 

module.exports = users;