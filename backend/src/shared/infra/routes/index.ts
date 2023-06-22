import { Router } from "express";
import usersRouter from "../../../modules/users/http/user.routes";
import sessionsRouter from "../../../modules/users/http/sessions.routes";
import ofertasRouter from "../../../modules/users/http/carona.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/caronas", ofertasRouter);

export default routes;
