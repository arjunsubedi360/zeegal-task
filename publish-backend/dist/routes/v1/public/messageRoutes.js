"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRouter = void 0;
const classes_1 = require("../../../classes");
const controllers_1 = require("../../../controllers");
const exceptionHandler_1 = __importDefault(require("../../../middlewares/exceptionHandler"));
class MessageRouter extends classes_1.RouterClass {
    constructor() {
        super();
    }
    define() {
        this.router
            .route("/send")
            .post((0, exceptionHandler_1.default)(controllers_1.MessageController.sendMessage));
    }
}
exports.MessageRouter = MessageRouter;
//# sourceMappingURL=messageRoutes.js.map