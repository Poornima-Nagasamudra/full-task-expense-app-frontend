import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider} from 'react-redux'
import  configureStore   from './store/configureStore'
import { BrowserRouter } from 'react-router-dom';
import { startGetBudget} from './actions/budgetAction';
import { startGetCategory } from './actions/categoryAction';
import { startGetExpense } from './actions/expenseAction';
import { startGetProfile } from './actions/profileAction';

const store = configureStore()

if(localStorage.getItem('token')){
    store.dispatch(startGetBudget())
    store.dispatch(startGetCategory())
    store.dispatch(startGetExpense())
    store.dispatch(startGetProfile())
  
}
console.log('state', store.getState())
store.subscribe(function(){
  console.log(store.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
   
  </Provider>
);


