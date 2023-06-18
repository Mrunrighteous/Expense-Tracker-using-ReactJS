import React from "react";
import "./Expenseitem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (

    <Card className='expenseitem'>
      <ExpenseDate date={props.date}/>
      <div className='expenseitem_desc'>
        <h2>{props.title}</h2>
        <div className='expenseitem_price'>{"$" + props.amount}</div>
      </div>
    </Card>
    
  );
}
export default ExpenseItem;
