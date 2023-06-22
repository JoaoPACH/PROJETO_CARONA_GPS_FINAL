import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { Usuario } from "../../../shared/infra/db/database";
import AppError from "../../../shared/errors/AppError";

class CreateUserService {
  async execute({
    firstName,
    lastName,
    email,
    telefone,
    password,
  }: CreateUserDTO): Promise<Usuario> {

    const user = await Usuario.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      telefone: telefone,
      password: password,
    });

    if (!user) throw new AppError("Error creating user.");

    return user;
  }
}

export default CreateUserService;
