import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController 
{
  async handle( request: Request, response: Response ): Promise<Response> 
  {
    const authenticateUserUseCase = container.resolve( AuthenticateUserUseCase );
    const data = await authenticateUserUseCase.execute
    ({ 
      email : request.body.data._parts[0][1],
      password : request.body.data._parts[1][1],
    });

    return response.json( data );
  }
}

export { AuthenticateUserController };
