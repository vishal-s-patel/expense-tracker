function Button({ handleExpense }) {
  return (
    <button
      className="bg-gradient-to-t from-indigo-500 to-blue-500 text-white font-semibold py-2 px-10 rounded-lg"
      onClick={handleExpense}
    >
      Add expense
    </button>
  );
}

export default Button;
