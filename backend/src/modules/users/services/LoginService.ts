import { Usuario } from "../../../shared/infra/db/database";
import { AuthenticateUserDTO } from "../dtos/AuthenticateUserDTO";
import AppError from "../../../shared/errors/AppError";

class LoginService {
  public async execute({
    email,
    password,
  }: AuthenticateUserDTO): Promise<Usuario> {
    const user = await Usuario.findOne({ where: { email: email } });

    if (!user) throw new AppError("Incorrect email/password combination.", 401);
    if (!(await user.validPassword(password)))
      throw new AppError("Incorrect email/password combination.", 401);

    return user;
  }
}

export default LoginService;
