import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controllers";
import { authJwt, verifySingup } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySingup.checkRolesExisted],
  userCtrl.createUser
);

export default router;
