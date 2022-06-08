import './ExpenseFilter.css'

const ExpenseFilter=props=>{
    const {expensesFilter}=props

    const selectYearHandler=event=>{
        const selectedYear=event.target.value
        console.log(selectedYear)
        expensesFilter(selectedYear)
    }

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onChange={selectYearHandler}>
                <option value="">All</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
}

export default ExpenseFilter