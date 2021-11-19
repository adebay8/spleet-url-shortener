"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = void 0;
const joi_1 = __importDefault(require("joi"));
const valid_url_1 = __importDefault(require("valid-url"));
class Validators {
    url(req, res, next) {
        const schema = joi_1.default.object({
            url: joi_1.default.string().required(),
        });
        const validation = schema.validate(Object.assign({}, req.body));
        if (validation.error) {
            return res.status(400).json({
                success: false,
                error: validation.error.details[0].message,
            });
        }
        if (!valid_url_1.default.isUri(req.body.url)) {
            return res.status(401).json({
                success: false,
                error: "Invalid base URL",
            });
        }
        next();
    }
}
exports.validators = new Validators();
