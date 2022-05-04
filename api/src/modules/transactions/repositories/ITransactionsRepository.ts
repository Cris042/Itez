import { ICreateTransactionsDTO  } from "../dtos/ITransactionsResponseDTO";
import { Transactions } from "../infra/typeorm/entities/Transactions";

interface ITransactionsRepository 
{
  create( data: ICreateTransactionsDTO ): Promise<void>;
  save( transactions: Transactions ): Promise<Transactions>;
  list(): Promise<Transactions[]>;
  findByName( name: string ): Promise<Transactions>;
  findById( id: string ): Promise<Transactions>;
}

export { ITransactionsRepository };
