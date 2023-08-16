import React, {useState}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { startGetBudget } from '../actions/budgetAction'
import BudgetForm from './BudgetForm'

const BudgetContainer = (props) => {
    const[toggle, setToggle] = useState(false)

    const budget = useSelector((state) => {
        return state.budget.budget
    })

    const dispatch = useDispatch()
    const handleEdit = () => {
        setToggle(!toggle)
    } 

    useEffect(() => {
        dispatch(startGetBudget())      
    }, [dispatch])


    return(
        <div>
            { toggle ?  (<div> 
                                <BudgetForm handleEdit= {handleEdit} />
                                <button onClick={handleEdit}>Cancel</button>
                        </div> ) : (<div>             
                                 <h1>Budget - {budget.amount } </h1> 
                                 <button onClick={handleEdit}>Edit</button>
                        </div>)
             }        

        </div>
    )
}

export default BudgetContainer