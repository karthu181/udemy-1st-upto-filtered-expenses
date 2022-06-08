import './ExpenseItem.css'
import {useState} from 'react'

function ExpenseItem (props){
    const {details}=props
    const {title, amount, date}=details
    
    const month=date.toLocaleDateString('en-US', {month:"long"})
    const year=date.getFullYear()
    const day=date.toLocaleDateString('en-US', {day:"2-digit"})

    const [title1, setTitle1]=useState(title)

    function onClickHandler(){
        setTitle1("updated")
    }

    return (
        <div className="expense-item">
            <div className='date-column expense-item'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            
            <div className='expense-item__description'>
                <h2 className='expense-item h2'>{title1}</h2>
                <div className="expense-item__price">{amount}</div>
                <button onClick={onClickHandler}>Change title</button>
            </div>
        </div>
    )
}

export default ExpenseItem;