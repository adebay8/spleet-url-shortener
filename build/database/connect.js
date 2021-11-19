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
exports.db = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
class Database {
    constructor() {
        this.connection = null;
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, typeorm_1.createConnection)();
                this.connection = response;
                console.log("Connected to db!!");
                return response;
            }
            catch (e) {
                console.error("error connecting to db: ", e);
                process.exit(1);
            }
        });
    }
}
exports.db = new Database();
