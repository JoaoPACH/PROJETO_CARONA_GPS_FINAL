import { Router } from "express";
import CaronaController from "../controllers/CaronaController";

const caronaRouter = Router();
const caronaController = new CaronaController();

caronaRouter.post("/", caronaController.create);
caronaRouter.get("/",  caronaController.get);

export default caronaRouter;
