import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import TransctionList from "./components/Transactions";

function App() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);
  function handleExpense() {
    const transction = { description, amount, transactionDate };
    setTransactions([...transactions, transction]);
    setTotalExpense((total) => total + Number(amount));
    setAmount("");
    setTransactionDate("");
    setDescription("");
  }
  return (
    <>
      <Header />
      <div className="mx-5">
        <p className="bg-gradient-to-tr from-indigo-500 to-red-400 text-white  p-2 rounded-lg">
          <span className="block text-sm font-medium">Total Expenses:</span>
          <span className="font-semibold">{totalExpense} ₹</span>
        </p>
        <div className="flex items-center mt-2">
          <div className="w-1/2 me-1">
            <label htmlFor="transactionDate" className="text-xs block">
              Date:
            </label>
            <input
              type="date"
              className="border w-full rounded-md p-1 text-sm"
              id="transactionDate"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="amount" className="text-xs block">
              Amount:
            </label>
            <input
              type="text"
              placeholder="00"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border rounded-md p-1 w-full text-sm"
              id="amount"
            />
          </div>
        </div>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Add a note"
            className="w-full border rounded-md p-1 text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-2 mb-5 text-center">
          <Button handleExpense={handleExpense} />
        </div>
        <TransctionList transactions={transactions} />
      </div>
    </>
  );
}

export default App;
