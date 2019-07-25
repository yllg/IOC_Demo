const Database = require("../Database.js");
class UserService {
    constructor(){
        this.db = new Database(Math.random());
    }
    create() {
        return this.db.log();
    }
}
const userService = new UserService();
userService.create();