import './ExpenseItem.css'

function ExpenseItem (props){
    const {details}=props
    const {title, amount, date}=details
    
    const month=date.toLocaleDateString('en-US', {month:"long"})
    const year=date.getFullYear()
    const day=date.toLocaleDateString('en-US', {day:"2-digit"})
    return (
        <div className="expense-item">
            <div className='date-column expense-item'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            
            <div className='expense-item__description'>
                <h2 className='expense-item h2'>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;