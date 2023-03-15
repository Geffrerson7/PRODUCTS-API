import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();

productRouter.post("/", Controller.store)
productRouter.get("/", Controller.findAll)
productRouter.get("/category/:idCategory", Controller.findAllbyCategory)
productRouter.get("/name/:name", Controller.findAllbyName)

export default productRouter;