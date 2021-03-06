import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

import logo from './logo.svg';
import './App.css';


const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 6, 25),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Car",
    amount: 29814.67,
    date: new Date(2021, 1, 2)
  },
  {
    id: "e4",
    title: "New TV",
    amount: 894.67,
    date: new Date(2021, 11, 28)
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
