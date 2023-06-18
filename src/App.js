import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expensedata = [
    { id: "e1", title: "Iphone", amount: 900, date: new Date(2023, 11, 9) },
    { id: "e2", title: "macbook", amount: 1200, date: new Date(2024, 11, 9) },
    {
      id: "e3",
      title: "apple watch",
      amount: 350,
      date: new Date(2023, 0, 21),
    },
  ];
  const [expenses,setExpenses]=useState(expensedata)
  const saveDataHandler = (expense) => 
  {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onSaveData={saveDataHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
