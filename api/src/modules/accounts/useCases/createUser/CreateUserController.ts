import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserCase } from "./CreateUserUseCase";

class CreateUserController 
{
  async handle( request: Request, response: Response ): Promise<Response> 
  {
    const createUserUseCase = container.resolve( CreateUserCase );

    await createUserUseCase.execute(
    {
      email : request.body.data._parts[0][1],
      name : request.body.data._parts[1][1],
      password : request.body.data._parts[2][1],
      isAdmin : false,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
