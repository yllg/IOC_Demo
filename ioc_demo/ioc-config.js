const Database = require("../Database.js");
const createIoC = require("./lib/ioc");
global.ioc = createIoC(__dirname);

// 单例模式，每次输出值相同
ioc.singleton("Database", () => new Database(Math.random()));
// 非单例模式，每次输出值不同
// ioc.bind("Database", () => new Database(Math.random()));

const IocService1 = require("./ioc-service1");
const IocService2 = require("./ioc-service2");

// 把database注入到两个service中，之后文件路径修改，只要在这里改一下就好
// 因为ioc挂到全局了，可以到它的构造函数中use
const userService1 = new IocService1();
userService1.create();
const userService2 = new IocService2(ioc.use("Database"));
userService2.create();

// 验证单例模式每次输出值相同，非单例模式每次输出值不同
const result = ioc.use("Database");
result.log();
const result2 = ioc.use("Database");
result2.log();
const result3 = ioc.use("Database");
result3.log();
const result4 = ioc.use("Database");
result4.log();