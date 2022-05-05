import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { AppError } from "@shared/errors/AppError";
import { ICreateTransactionsDTO } from "../../dtos/ITransactionsResponseDTO";

import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
class  DeletTransactionsUseCase 
{
  constructor
  (
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) {}

  async execute(id): Promise<void> 
  {
   
    await this.transactionsRepository.delet( id );

  }
}

export { DeletTransactionsUseCase };
