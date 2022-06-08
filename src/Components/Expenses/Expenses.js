import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import {useState} from 'react'

function Expenses (props){
    const {expenses}=props

    const [selectYear, setSelectYear]=useState("")

    const expensesFilterHandler=selectedYear=>{
        setSelectYear(selectedYear)
    }

    const filteringExpenses=()=>{
        const filteredExpenses=expenses.filter(each=>
           (each.date.getFullYear().toString().includes(selectYear))
           )

         return filteredExpenses.map(each=> <ExpenseItem key={each.id} details={each} /> )
    }

    return (
        <>
    <div>
        <ExpenseFilter selectedYearState={selectYear} expensesFilter={expensesFilterHandler}/>
    </div>

        {filteringExpenses()}
        </>
    )
}

export default Expenses