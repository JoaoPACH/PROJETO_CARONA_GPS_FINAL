import { Request, Response } from "express";
import CaronaService from "../services/CaronaService";
import SessionService from "../services/SessionService";
import ListarCaronaService from "../services/ListarCaronaService";
import { forEach } from "lodash";

export default class CaronaController {
  public async create(request: Request, response: Response): Promise<Response> {
    const session = await SessionService.validate(request, response)
    if(session === null) return; // Check if logged in

    const { data, origem, destino } = request.body;

    const createOferta = new CaronaService();
    const carona = await createOferta.execute({ data, origem, destino, motorista: session.user });

    return response.json(data);
  }
  
  public async get(request: Request, response: Response): Promise<Response> {
    const session = await SessionService.validate(request, response)
    if(session === null) return; // Check if logged in

    // TODO: Filters

    const listcarona = new ListarCaronaService();
    const caronas = await listcarona.execute();

    var ret: Object[] = []
    caronas.forEach(carona => {
      const motorista = carona.motorista
      ret.push({
        origem: carona.origem,
        destino: carona.destino,
        data: carona.data,
        createdAt: carona.createdAt,
        motorista: {
          firstName: motorista.firstName,
          lastName: motorista.lastName,
          // TODO: Avaliacao
        }
      })
    })
    return response.json(ret);
  }
}
