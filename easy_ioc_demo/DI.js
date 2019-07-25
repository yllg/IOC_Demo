class Database {
    constructor(connStr){
        this.connStr = connStr;
    }
    log(){
        console.log(this.connStr);
    }
}
class UserService {
    constructor(db){
        //aop + di
        this.db = db;
    }
    create() {
        return this.db.log();
    }
}
const db = new Database(Math.random());
// 把db注入到UserService的构造函数中
const userService = new UserService(db);
userService.create();