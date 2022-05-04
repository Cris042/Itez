import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";

class CreateTransactionsController 
{
  async handle( request: Request, response: Response ): Promise<Response> 
  {
    const { name, idUser, type, value } = request.body;
    const createUserUseCase = container.resolve( CreateTransactionsUseCase );

    await createUserUseCase.execute(
    {
      name,
      idUser,
      type,
      value,
    });

    return response.status(201).send();
  }
}

export { CreateTransactionsController };
