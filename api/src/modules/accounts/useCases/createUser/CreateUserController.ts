import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserCase } from "./CreateUserUseCase";

class CreateUserController 
{
  async handle( request: Request, response: Response ): Promise<Response> 
  {
    const { name, email, password, isAdmin } = request.body;
    const createUserUseCase = container.resolve( CreateUserCase );

    await createUserUseCase.execute(
    {
      name,
      email,
      password,
      isAdmin,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
