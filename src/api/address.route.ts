import { Express, Request, Response } from "express";
import { Connection } from "typeorm";
import { validators } from "../middlewares/validators";
import { addressService } from "../services/address.service";

function addressRoutes(app: Express, db: Connection) {
  app.get(
    "/:urlCode",
    async (req: Request, res: Response): Promise<Response> => {
      const response = await addressService.getAddress(req.params.urlCode);
      return res.status(200).json(response);
    }
  );

  app.post(
    "/shorten",
    validators.url,
    async (req: Request, res: Response): Promise<Response> => {
      const data = req.body;

      const response = await addressService.createAddress(data);

      return res.status(201).json({ status: "success", data: { ...response } });
    }
  );
}

export default addressRoutes;
