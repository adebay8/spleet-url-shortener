import { nanoid } from "nanoid";
import { Connection } from "typeorm";
import { Address } from "../database/entity/Address";
import { IData, IUrlCode } from "../types/address.types";

class AddressService {
  // pro db: Connection | null = null;

  // constructor(connection: Connection) {
  //   this.db = connection;
  // }

  public async createAddress(data: IData): Promise<Address | undefined> {
    const generatedId = nanoid(10);

    try {
      const address = new Address();
      address.shortUrl = `https://localhost:1337/${generatedId}`;
      address.longUrl = data.url;
      address.urlCode = generatedId;
      await address.save();
      return address;
    } catch (e) {
      console.log("error", e);
    }
  }

  public async getAddress(urlCode: string) {
    try {
      const addressData = await Address.findOne({ urlCode });
      return addressData;
    } catch (e) {
      console.log("error: ", e);
    }
  }
}

export const addressService = new AddressService();
