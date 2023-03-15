import type { Application, Router } from "express";
import * as ROUTES from "../components";

const routes: [string, Router][] = [
  ["categories", ROUTES.CategoryRouter],
  ["products", ROUTES.ProductRouter],
];

const router = (app: Application): void => {
  routes.forEach(([path, controler]) => {
    app.use(`/api/v1/${path}`, controler);
  });
};

export default router;