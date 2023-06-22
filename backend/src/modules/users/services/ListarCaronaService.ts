import { Carona, Usuario } from "../../../shared/infra/db/database";
import AppError from "../../../shared/errors/AppError";

class ListarCaronaService {
  async execute(/* Filtros */): Promise<Carona[]> {

    const caronas = Carona.findAll({ include: 'motorista' });

    if (!caronas) throw new AppError("Error listing caronas.");

    return caronas;
  }
}

export default ListarCaronaService;