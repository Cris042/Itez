import "@shared/container/providers";

import { container } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

import { ITransactionsRepository } from "@modules/transactions/repositories/ITransactionsRepository";
import { TransactionsRepository } from "@modules/transactions/infra/typeorm/repositories/TransactionsRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
   UsersRepository
);

container.registerSingleton<ITransactionsRepository>(
  "TransactionsRepository",
   TransactionsRepository
);
