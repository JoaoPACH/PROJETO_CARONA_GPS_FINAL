import { Usuario, Session } from "../../../shared/infra/db/database";
import { Request, Response } from "express";

class SessionService {
  static sessionsCache: {[uuid: string]: Session} = {}

  public static async create(user: Usuario): Promise<Session> {
    const session = await Session.create({ userId: user.id })
    session.user = user
    SessionService.sessionsCache[session.uuid] = session // Cache it
    return session
  }

  private static async _validate(request: Request, response: Response): Promise<Session | string>{
    if(request.headers.cookie === undefined) return 'Cookies not present'; // Cookies not present

    let uuid = request.cookies['session-token']
    if(uuid === undefined) return 'Session token not present';      // Invalid uuid
    uuid = uuid.split(',')[0]

    let session = SessionService.sessionsCache[uuid]

    if(session === undefined){                                      // Session is not on cache
      session = SessionService.sessionsCache[uuid] =
        await Session.findOne({ where: { uuid: uuid }, include: [Usuario] })
    }
    
    if(session === null) return 'Session token is invalid/expired'; // Session not found
    return session;
  }

  public static async validate(request: Request, response: Response): Promise<Session | null>{
    const session = await this._validate(request, response);
    console.log("Session:", session)
    if(session instanceof Session) return session;

    response.statusCode = 403;
    response.json({ error: session })
    return null;
  }
}

export default SessionService;
