import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
  
    const user_id = request.user.id;
    const { name, password,  avatar, old_password } = request.body;
    const createUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await createUserUseCase.execute({
      id: user_id,
      name,
      password,
      old_password,      
      avatar
    });
    
    console.log("PUSH DO USUÁRIO")
    console.log(request.body)
    return response.status(201).json(response);
  }
}

export { UpdateUserController };
