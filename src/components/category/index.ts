import { Router } from "express";
import * as Controller from "./controller";

const clientRouter = Router();

clientRouter.post("/", Controller.store)
clientRouter.get("/", Controller.findAll)
clientRouter.get("/:id", Controller.findOne)

export default clientRouter;