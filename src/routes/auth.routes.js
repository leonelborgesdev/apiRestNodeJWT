import { Router } from "express";
const router = Router();

import * as authCrtl from "../controllers/auth.controller";
import { verifySingup } from "../middlewares";

router.post(
  "/singup",
  [verifySingup.checkDuplicateUsernameOrEmail, verifySingup.checkRolesExisted],
  authCrtl.singup
);

router.post("/singin", authCrtl.singin);

export default router;
