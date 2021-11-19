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
exports.addressService = void 0;
const nanoid_1 = require("nanoid");
const Address_1 = require("../database/entity/Address");
class AddressService {
    constructor() {
        // pro db: Connection | null = null;
        // constructor(connection: Connection) {
        //   this.db = connection;
        // }
        this.baseUrl = process.env.NODE_ENV === "production"
            ? "https://spleet-url-shortener.herokuapp.com"
            : "http://localhost:1337";
    }
    createAddress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const generatedId = (0, nanoid_1.nanoid)(10);
            try {
                //check if generated Id already exists
                const existingAddress = yield this.getAddress(generatedId);
                if (existingAddress.success) {
                    return {
                        success: false,
                        message: "Please try again",
                    };
                }
                // create new address mapping
                const address = new Address_1.Address();
                address.shortUrl = `${this.baseUrl}/${generatedId}`;
                address.longUrl = data.url;
                address.urlCode = generatedId;
                yield address.save();
                return {
                    success: true,
                    data: address,
                };
            }
            catch (e) {
                return {
                    success: false,
                    message: "Data could not be saved",
                };
            }
        });
    }
    getAddress(urlCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addressData = yield Address_1.Address.findOne({ urlCode });
                if (addressData === undefined) {
                    return {
                        success: false,
                        message: "Data not found",
                    };
                }
                return {
                    success: true,
                    data: addressData,
                };
            }
            catch (e) {
                return {
                    success: false,
                    message: "Request failed",
                };
            }
        });
    }
}
exports.addressService = new AddressService();
