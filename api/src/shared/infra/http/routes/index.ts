import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
const router = Router();

// router.use( "/transactions", );
router.use( "/users", usersRoutes );
router.use( "/authenticate", authenticateRoutes );

export { router };
