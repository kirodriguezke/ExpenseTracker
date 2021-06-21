import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 6, 25) },
    { id: 'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e3', title: 'Car', amount: 29814.67, date: new Date(2021, 1, 2) },
    { id: 'e4', title: 'New TV', amount: 894.67, date: new Date(2021, 11, 28) },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
