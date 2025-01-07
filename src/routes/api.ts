import { Router } from "express";
import { testRouter } from "./test.api";

const router: Router = Router();

router.use("/test", testRouter);

export const apiRouter = router;
