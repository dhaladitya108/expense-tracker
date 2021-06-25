import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');


  const filterChangeHandler = selectedYear => {
    console.log('Expense.js');
    setFilterYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
