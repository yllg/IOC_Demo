
class IocService2 {
    constructor(db){
        this.db = db;
    }
    create() {
        this.db.log();
    }
}
module.exports = IocService2;