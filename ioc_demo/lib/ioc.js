const { join } = require("path");
module.exports = function createIoC(rootPath) {
    return {
        container: new Map(),
        bind(key, callback) {
            this.container.set(key, { callback, singleton: false })
        },
        singleton(key, callback) {
            this.container.set(key, { callback, singleton: true })
        },
        restore(key){
            this.container.delete(key)
        },
        use(namespace) {
            const item = this.container.get(namespace);
            if (item) {
                // 单例的话，每次都用item.instance
                if (item.singleton && !item.instance) {
                    item.instance = item.callback();
                }
                return item.singleton ? item.instance : item.callback()
            }
            return require(join(rootPath,namespace))
        }
    }
}