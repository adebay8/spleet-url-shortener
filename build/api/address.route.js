"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("../middlewares/validators");
const address_service_1 = require("../services/address.service");
function addressRoutes(app, db) {
    app.get("/:urlCode", (req, res) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield address_service_1.addressService.getAddress(req.params.urlCode);
        if (!response.success) {
            return res
                .status(400)
                .json({ status: "error", message: response.message });
        }
        return res.redirect((_a = response.data) === null || _a === void 0 ? void 0 : _a.longUrl);
    }));
    app.post("/shorten", validators_1.validators.url, (req, res) => __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const response = yield address_service_1.addressService.createAddress(data);
        if (!response.success) {
            return res
                .status(400)
                .json({ status: "error", message: response.message });
        }
        return res.status(201).json(response);
    }));
}
exports.default = addressRoutes;
