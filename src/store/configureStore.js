import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/usersReducer'
import budgetReducer from '../reducers/budgetReducer'
import categoryReducer from '../reducers/categoryReducer'
import expenseReducer from '../reducers/expenseReducer'
import profileReducer from '../reducers/profileReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const configureStore = () => {
    const store = createStore(combineReducers ({
         users : usersReducer,
         budget : budgetReducer,
         category : categoryReducer,
         expense : expenseReducer,
         profile : profileReducer
    }), applyMiddleware(thunk) )
    return store
}

export default configureStore