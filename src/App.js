import React, {useState} from 'react';
import Expnses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

let Dummy_Expense= [
  {
    id: 'e1',
    title: 'College fee',
    amount: 25000,
    date: new Date(2023,6,12)
  },
  {
    id: 'e2',
    title: 'Room fee',
    amount: 5000,
    date: new Date(2023,4,5)
  },
  {
    id: 'e3',
    title: 'Bus fee',
    amount: 15000,
    date: new Date(2023,5,1)
  },
  {
    id: 'e4',
    title: 'Tution fee',
    amount: 2500,
    date: new Date(2023,6,12)
  }
];
const App= () => {

  const [expenses, setExpenses]=useState(Dummy_Expense);

  const addExpenseHandler=(expense)=>{
    const updatedExpense =[expense, ...expenses];
    setExpenses(updatedExpense);

  };
  return (
    <div>      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expnses item={expenses}/>
    </div>
  );
}
export default App;
