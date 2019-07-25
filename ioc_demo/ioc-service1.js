class IocService1 {
    constructor(){
        //因为ioc挂到全局了，可以在构造函数中use
        this.db = ioc.use("Database");
    }
    create() {
        this.db.log();
    }
}
module.exports = IocService1;