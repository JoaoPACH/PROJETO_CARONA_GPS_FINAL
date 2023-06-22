import { Carona } from "../../../shared/infra/db/database";
import { OfertaViagemDTO } from "../dtos/OfertaViagemDTO";
import AppError from "../../../shared/errors/AppError";

class CaronaService {
  public async execute({
    data,
    destino,
    origem,
    motorista
  }: OfertaViagemDTO): Promise<Carona> {

    const carona = await Carona.create({
      data,
      destino,
      origem,
      motoristaId: motorista.id
    })

    await motorista.$add('ofertas', carona)

    if (!carona) throw new AppError("Error at creating oferta", 401);

    return carona;
  }
}

export default CaronaService;
