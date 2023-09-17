"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericErrorHandler = exports.methodNotAllowed = exports.notFound = void 0;
const enums_1 = require("../enums");
const logger_1 = __importDefault(require("../utils/logger"));
const buildError_1 = __importDefault(require("./buildError"));
/**
 * Error response middleware for 404 not found.
 */
function notFound(req, res) {
    res.status(enums_1.HttpStatusEnum.NOT_FOUND).json({
        success: false,
        code: enums_1.HttpStatusEnum.NOT_FOUND,
        message: enums_1.ReasonPhrasesEnum.NOT_FOUND,
    });
}
exports.notFound = notFound;
/**
 * Method not allowed error middleware. This middleware should be placed at
 */
function methodNotAllowed(req, res) {
    res.status(enums_1.HttpStatusEnum.METHOD_NOT_ALLOWED).json({
        success: false,
        code: enums_1.HttpStatusEnum.METHOD_NOT_ALLOWED,
        message: enums_1.ReasonPhrasesEnum.METHOD_NOT_ALLOWED,
    });
}
exports.methodNotAllowed = methodNotAllowed;
/**
 * Generic error response middleware for validation and internal server errors.
 */
function genericErrorHandler(err, req, res, next) {
    logger_1.default.error(err.message);
    const error = (0, buildError_1.default)(err);
    res.status(error.code).json(error);
}
exports.genericErrorHandler = genericErrorHandler;
//# sourceMappingURL=errorHandler.js.map