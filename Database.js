class Database {
    constructor(connStr){
        this.connStr = connStr;
    }
    log(){
        console.log(this.connStr);
    }
}
module.exports = Database;