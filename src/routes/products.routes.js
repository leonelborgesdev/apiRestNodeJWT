import { Router } from "express";

const router = Router();

import * as productCtrl from "../controllers/products.controller";
import { verifyToken } from "../middlewares/index";

router.get("/", productCtrl.getProducts);
router.post("/", verifyToken, productCtrl.createProduct);
router.get("/:productId", productCtrl.getProductById);
router.put("/:productId", productCtrl.updateProductById);
router.delete("/:productId", productCtrl.deleteProductById);

export default router;
