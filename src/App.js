import './App.css';
import ExpenseForm from './app/components/ExpenseForm';
import ExpenseList from './app/components/ExpenseList';

const App = () => {
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <h3>Add New Expense</h3>
      <ExpenseForm />
      <hr />
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div >
  );
}

export default App;
