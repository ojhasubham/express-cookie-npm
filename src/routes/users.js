import { Router } from "express";
import authServer from "auth-server-cookie";
import UsersController from "../controllers/UsersController";

const router = Router();

router.get("/users", authServer.check, UsersController.index);

export default router;
