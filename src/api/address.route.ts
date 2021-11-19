import { Express, Request, Response } from "express";
import { Connection } from "typeorm";
import { validators } from "../middlewares/validators";
import { addressService } from "../services/address.service";

function addressRoutes(app: Express, db: Connection) {
  app.get(
    "/:urlCode",
    async (req: Request, res: Response): Promise<Response | void> => {
      const response = await addressService.getAddress(req.params.urlCode);

      if (!response.success) {
        return res
          .status(400)
          .json({ status: "error", message: response.message });
      }

      return res.redirect(response.data?.longUrl!);
    }
  );

  app.post(
    "/shorten",
    validators.url,
    async (req: Request, res: Response): Promise<Response> => {
      const data = req.body;

      const response = await addressService.createAddress(data);

      if (!response.success) {
        return res
          .status(400)
          .json({ status: "error", message: response.message });
      }

      return res.status(201).json(response);
    }
  );
}

export default addressRoutes;
