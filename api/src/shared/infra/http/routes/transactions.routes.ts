
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateTransactionsController } from "@modules/transactions/useCases/createTransactions/CreateTransactionsController";
import { ListTransactionsController } from "@modules/transactions/useCases/listTransactions/ListTransactionsController";

const transactionsRoutes = Router();
const createTransactionsController = new CreateTransactionsController();
const listTransactionsController = new ListTransactionsController();

transactionsRoutes.post( "/", createTransactionsController.handle );
transactionsRoutes.get( "/list", listTransactionsController.handle );

export { transactionsRoutes };
