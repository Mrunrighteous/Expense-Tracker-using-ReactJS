import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expense(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpense = props.items.filter (expense=> { return expense.date.getFullYear().toString() === filterYear }) 
  
  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
      
    </Card>
  );
}
export default Expense;
