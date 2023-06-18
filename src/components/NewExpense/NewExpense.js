import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {
    const saveEnteredDataHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onSaveData(expense)
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveData={saveEnteredDataHandler} />
    </div>)

}
export default NewExpense