"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
/**
 * Build error response for validation errors.
 */
function buildError(err) {
    // Validation errors
    if (err.isJoi) {
        return {
            success: false,
            code: enums_1.HttpStatusEnum.BAD_REQUEST,
            message: enums_1.ReasonPhrasesEnum.BAD_REQUEST || err,
            details: err.details &&
                err.details.map((err) => {
                    return {
                        message: err.message || err,
                        param: err.path.join('.'),
                    };
                }),
        };
    }
    else {
        return {
            success: false,
            code: enums_1.HttpStatusEnum.INTERNAL_SERVER_ERROR,
            message: enums_1.ReasonPhrasesEnum.INTERNAL_SERVER_ERROR,
        };
    }
}
exports.default = buildError;
