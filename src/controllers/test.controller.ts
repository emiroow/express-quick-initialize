import { responseHandler } from "@/utils/common";
import { Request, Response } from "express";

export const getTestController = async (req: Request, res: Response) => {
  responseHandler({
    res,
    data: { msg: "Hi", req },
    massage: "hi",
    status: true,
    responseCode: 200,
  });
};
