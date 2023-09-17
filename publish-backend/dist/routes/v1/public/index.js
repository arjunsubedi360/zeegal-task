"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyRouter = void 0;
const express_1 = require("express");
const messageRoutes_1 = require("./messageRoutes");
class ProxyRouter {
    static instance;
    router = (0, express_1.Router)();
    routes = [
        { segment: '/message', provider: messageRoutes_1.MessageRouter },
    ];
    constructor() { }
    static get() {
        if (!ProxyRouter.instance) {
            ProxyRouter.instance = new ProxyRouter();
        }
        return ProxyRouter.instance;
    }
    map() {
        this.routes.forEach((route) => {
            const instance = new route.provider();
            this.router.use(route.segment, instance.router);
        });
        return this.router;
    }
}
const proxyRouter = ProxyRouter.get();
exports.ProxyRouter = proxyRouter;
//# sourceMappingURL=index.js.map