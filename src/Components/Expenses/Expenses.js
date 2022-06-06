import ExpenseItem from '../ExpenseItem/ExpenseItem'

function Expenses (props){
    const {expenses}=props

    return (
        <>
        {expenses.map(each=><ExpenseItem details={each} key={each.id}/> )}
        </>
    )
}

export default Expenses