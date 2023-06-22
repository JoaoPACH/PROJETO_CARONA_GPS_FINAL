import { Request, Response } from "express";
import LoginService from "../services/LoginService";
import SessionService from "../services/SessionService";
import cookie from 'cookie'

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new LoginService();

    const user = await createSession.execute({ email, password });
    user.password = "";

    response.setHeader('Set-Cookie',
        cookie.serialize('session-token', (await SessionService.create(user)).uuid))

    return response.json(email);
  }
}