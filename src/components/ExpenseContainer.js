import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetExpense } from '../actions/expenseAction'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import Chart1 from './Chart1'
import Chart2 from './Chart2'


function ExpenseContainer(props){
       
   const budget = useSelector((state) => {
      return state.budget.budget
   })

    const expense = useSelector((state)=> {
        return state.expense.data
    })

    const category = useSelector((state) => {
        return state.category.data
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetExpense())
    },[dispatch])

    return(
        <div>
            
            <div >
                <ExpenseForm />
            </div>
            <div className="expense_Listing">
              <ExpenseTable data={expense} />
            </div>

            <Chart1 expense={expense} budget={budget} />  
            <Chart2 category={category} expense={expense} />

        </div>
    )
}

export default ExpenseContainer