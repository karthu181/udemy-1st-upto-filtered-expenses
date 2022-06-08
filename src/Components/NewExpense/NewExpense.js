import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import {v4 as uuidv4} from 'uuid'

const NewExpense=props=>{

    const {addExpenseHandler}=props

    const onSaveExpense=enteredExpense=>{
        const enteredExpenseData={
            ...enteredExpense,
            id:uuidv4()
        }
        

        addExpenseHandler(enteredExpenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={onSaveExpense} />
        </div>
    )
}

export default NewExpense