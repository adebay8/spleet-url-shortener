import { nanoid } from "nanoid";
import { Connection } from "typeorm";
import { Address } from "../database/entity/Address";
import { IData, IError, IUrlCode, responseType } from "../types/address.types";

class AddressService {
  // pro db: Connection | null = null;

  // constructor(connection: Connection) {
  //   this.db = connection;
  // }

  public async createAddress(data: IData): Promise<responseType> {
    const generatedId = nanoid(10);

    try {
      const address = new Address();
      address.shortUrl = `https://localhost:1337/${generatedId}`;
      address.longUrl = data.url;
      address.urlCode = generatedId;
      await address.save();
      return {
        success: true,
        data: address,
      };
    } catch (e) {
      return {
        success: true,
        message: "Data could not be saved",
      };
    }
  }

  public async getAddress(urlCode: string): Promise<responseType> {
    try {
      const addressData = await Address.findOne({ urlCode });
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
    } catch (e) {
      return {
        success: true,
        message: "Request failed",
      };
    }
  }
}

export const addressService = new AddressService();
