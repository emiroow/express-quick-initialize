import { getTestController } from "@/controllers/test.controller";
import { Router } from "express";

const router = Router();

router.get("/testRouter", getTestController);

export const testRouter = router;
