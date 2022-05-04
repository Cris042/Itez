import { inject, injectable } from "tsyringe";

import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";
import { Transactions } from "@modules/transactions/infra/typeorm/entities/Transactions";

@injectable()
class ListTransactionsUseCase 
{
  constructor
  (
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) {}

  async execute(): Promise<Transactions[]> 
  {
    const transactions = await this.transactionsRepository.list();

    return transactions;
  }
}

export { ListTransactionsUseCase };
