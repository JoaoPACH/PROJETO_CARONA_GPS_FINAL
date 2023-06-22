import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import SessionService from "../services/SessionService";
import cookie from 'cookie';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    console.log("Aqui");
    
    const { firstName, lastName, email, telefone, password } = request.body;

    const createUser = new CreateUserService();

    var user = await createUser.execute({
      firstName,
      lastName,
      email,
      telefone,
      password,
    });
    
    response.setHeader('Set-Cookie',
        cookie.serialize('session-token', (await SessionService.create(user)).uuid))

    //user = Object.assign({}, user.dataValues) // Dereference and clone
    //user.password = undefined;

    return response.json(user);

  }

  public async get(request: Request, response: Response): Promise<Response> {
    const session = await SessionService.validate(request, response)
    if(session === null) return; // Check if logged in

    var user = session.user
    user.ofertas = await session.user.$get('ofertas');
    user.viagens = await session.user.$get('viagens');

    user = Object.assign({}, user) // Dereference and clone
    user.password = undefined

    return response.json(user);
  }
}

export default UsersController;
