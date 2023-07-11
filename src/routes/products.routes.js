import { Router } from "express";

const router = Router();

import * as productCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get("/", productCtrl.getProducts);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productCtrl.createProduct
);
router.get("/:productId", productCtrl.getProductById);
router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.updateProductById
);
router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.deleteProductById
);

export default router;
