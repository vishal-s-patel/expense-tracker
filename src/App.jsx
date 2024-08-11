import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import TransctionList from "./components/Transactions";

function App() {
  const [amount, setAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState();
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
  });
  function handleExpense() {
    const transction = {
      description,
      amount,
      transactionDate: transactionDate || new Date().toLocaleDateString(),
    };
    setTransactions([...transactions, transction]);
    setAmount("");
    setTransactionDate("");
    setDescription("");
  }

  localStorage.setItem("TRANSACTIONS", JSON.stringify(transactions));

  const totalExpense = transactions.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  return (
    <>
      <Header />
      <div className="mx-5">
        <p className="bg-gradient-to-tr from-indigo-500 to-red-400 text-white  p-3 rounded-lg">
          <span className="block text-base font-medium">Total Expenses:</span>
          <span className="font-semibold text-2xl">{totalExpense} ₹</span>
        </p>
        <div className="flex items-center mt-2">
          <div className="w-1/2 me-1">
            <label htmlFor="transactionDate" className="text-sm block">
              Date:
            </label>
            <input
              type="date"
              className="border w-full rounded-md p-2 text-sm"
              id="transactionDate"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="amount" className="text-sm block">
              Amount:
            </label>
            <input
              type="number"
              placeholder="00"
              value={amount}
              onChange={(e) => setAmount(e.target.value || "")}
              className="border rounded-md p-2 w-full text-sm"
              id="amount"
            />
          </div>
        </div>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Add a note"
            className="w-full border rounded-md p-2 text-sm"
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
