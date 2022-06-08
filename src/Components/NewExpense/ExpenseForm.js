import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm =props=>{

    const {onSaveExpense}=props

    const [enteredTitle, setTitleText]=useState("")
    const [enteredAmount, setEnteredAmount]=useState("")
    const [enteredDate, setEnteredDate]=useState("")

//     const [userInput, setUserInput]=useState(
//         {enteredTitleText:"",
//     enteredAmount:"",
// enteredDate:""}
//     )

    const titleChangeHandler=event=>{
        setTitleText(event.target.value)
    }

    const amountChangeHandler=event=>{
        setEnteredAmount(parseInt(event.target.value))
    }

    const dateChangeHandler=event=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler=event=>{
        event.preventDefault()

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }


        setTitleText("")
        setEnteredAmount("")
        setEnteredDate("")

        onSaveExpense(expenseData)
    }


    return (
        <form onSubmit={submitHandler}>
<div className='new-expense__controls'>
    <div className='="new-expense__control'>
    <label id="title">Title</label>
    <input type="text" htmlFor="title" 
    onChange={titleChangeHandler}
    value={enteredTitle}/>
    </div>

    <div className='="new-expense__control'>
    <label id="amount">Amount</label>
    <input type="number" htmlFor="amount" min="0.01" step="0.01" 
    onChange={amountChangeHandler}
    value={enteredAmount}/>
    </div>

    <div className='="new-expense__control'>
    <label id="date">Date</label>
    <input type="date" htmlFor="date" min="2019-01-01" max="2022-12-31" 
    onChange={dateChangeHandler}
    value={enteredDate}/>
    </div>

     <div className='new-expense__actions'> 
    <button type="submit" >Add Expense</button>
    </div>  

</div>



        </form>
    )
}

export default ExpenseForm