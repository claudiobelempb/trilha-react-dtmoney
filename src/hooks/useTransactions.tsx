import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

type ITransactionInput = Omit<ITransaction, "id" | "createAt">;

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

// type ITransactionInput = Pick<ITransaction, "title" | "type"| "category" | "amount">;

// interface ITransactionInput {
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// }

interface ITransactionProps {
  children: ReactNode;
}

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

const TransactionsProvider = ({ children }: ITransactionProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, [setTransactions]);

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
}

export { TransactionsProvider, useTransactions };
