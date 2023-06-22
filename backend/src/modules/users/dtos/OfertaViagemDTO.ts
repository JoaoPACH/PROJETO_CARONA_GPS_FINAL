import { Usuario } from "../../../shared/infra/db/database";

export interface OfertaViagemDTO {
    data: Date;
    origem: string;
    destino: string;
    motorista: Usuario;
  }