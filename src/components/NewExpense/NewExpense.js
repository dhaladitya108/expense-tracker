import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEdiitng, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEdiitng && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEdiitng && < ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div >
  );
};

export default NewExpense;
