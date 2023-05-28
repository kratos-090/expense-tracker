import { useState } from 'react';
import '../css/ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
  




    const titleChangelHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }





    return (
        <form onSubmit={submitHandler} action="">
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input value={enteredTitle} onChange={titleChangelHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" step="0.01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'><button type='button' onClick={props.onCancel()}>Cancel</button><button type='submit'>Add Expense</button></div>
        </form>
    )
}

export default ExpenseForm;