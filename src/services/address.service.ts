import { nanoid } from "nanoid";
import { Address } from "../database/entity/Address";
import { IData, responseType } from "../types/address.types";

class AddressService {
  // pro db: Connection | null = null;

  // constructor(connection: Connection) {
  //   this.db = connection;
  // }

  private baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://spleet-url-shortener.herokuapp.com"
      : "http://localhost:1337";

  public async createAddress(data: IData): Promise<responseType> {
    const generatedId = nanoid(10);

    try {
      //check if generated Id already exists
      const existingAddress = await this.getAddress(generatedId);

      if (existingAddress.success) {
        return {
          success: false,
          message: "Please try again",
        };
      }

      // create new address mapping
      const address = new Address();
      address.shortUrl = `${this.baseUrl}/${generatedId}`;
      address.longUrl = data.url;
      address.urlCode = generatedId;
      await address.save();
      return {
        success: true,
        data: address,
      };
    } catch (e) {
      return {
        success: false,
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
        success: false,
        message: "Request failed",
      };
    }
  }
}

export const addressService = new AddressService();
