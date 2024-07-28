export default function TransctionList({ transactions }) {
  return (
    <div>
      <p className="font-semibold text-gray-500">Transactions</p>
      <ul>
        {transactions.length > 0 ? (
          transactions.map(({ description, amount, transactionDate }, i) => (
            <Transaction
              description={description}
              amount={amount}
              transactionDate={transactionDate}
              key={"T" + i}
            />
          ))
        ) : (
          <li className="text-xs text-slate-400">
            You've not done any transaction.
          </li>
        )}
      </ul>
    </div>
  );
}

function Transaction({ description, transactionDate, amount }) {
  return (
    <li className="mb-1">
      <div className="flex justify-between bg-slate-100 rounded-lg px-2 py-1">
        <div>
          <p className="text-sm">{description}</p>
          <span className="text-xs text-gray-500">{transactionDate}</span>
        </div>
        <p className="self-center text-sm font-semibold">₹ {amount}</p>
      </div>
    </li>
  );
}
