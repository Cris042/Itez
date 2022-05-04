import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { AppError } from "@shared/errors/AppError";
import { ICreateTransactionsDTO } from "../../dtos/ITransactionsResponseDTO";

import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
class CreateTransactionsUseCase 
{
  constructor
  (
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) {}

  async execute({
    name,
    idUser,
    type,
    value,
  }: ICreateTransactionsDTO): Promise<void> 
  {
    const AlreadyExists = await this.transactionsRepository.findByName( name );

    if ( AlreadyExists ) 
    {
      throw new AppError("Name already exists");
    }

    await this.transactionsRepository.create({
      name,
      idUser,
      type,
      value,
    });

  }
}

export { CreateTransactionsUseCase };
