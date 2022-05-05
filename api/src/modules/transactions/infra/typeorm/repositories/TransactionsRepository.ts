import { getRepository, Repository } from "typeorm";
import { ITransactionsRepository  } from "../../../repositories/ITransactionsRepository";
import { ICreateTransactionsDTO  } from "../../../dtos/ITransactionsResponseDTO";
import { Transactions } from "../entities/Transactions";

class TransactionsRepository implements ITransactionsRepository 
{
  private repository: Repository<Transactions>;

  constructor() 
  {
    this.repository = getRepository( Transactions  );
  }

  async create(
  {
    name,
    idUser,
    type,
    value,
  }: ICreateTransactionsDTO ): Promise<void> 
  {
    const transactions = this.repository.create(
    {
       name,
       idUser,
       type,
       value,
    });

    await this.repository.save( transactions );
  }

  async findByName( name: string ): Promise<Transactions> 
  {

    const transactions = await this.repository.findOne({ name });
    return transactions;

  }

  async findById( id: string ): Promise<Transactions> 
  {

    const transactions = await this.repository.findOne( id );
    return transactions;

  }

  async delet( id: string ): Promise<void> 
  {

    await this.repository.delete( id );

  }

  async save( transactions: Transactions ): Promise<Transactions> 
  {

    await this.repository.save( transactions );    
    return transactions;

  }

  async list(): Promise<Transactions[]> 
  {

    const transactions = await this.repository.find();
    return transactions;
    
  }

  
}

export { TransactionsRepository };
