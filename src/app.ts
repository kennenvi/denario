import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();


interface Transaction {
	id: number
	description: string
	amount: number
	type: "income" | "expense"
	date: Date
}

const transactions: Transaction[] = [];
const nextId: number = 1;


app.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

type NewTransactionBody = Omit<Transaction, 'id' | 'date'>;


app.listen(3000);
