const budgetInitialState = {
    budget : {}
}

const budgetReducer = (state = budgetInitialState, action) => {

    switch(action.type){
        
        case 'ADD_BUDGET' :{
            return {...state, budget: { ...state.budget, ...action.payload}}
        }

        case 'UPDATE_BUDGET' : {
            return {...state, budget: {...state.budget, ...action.payload}}
        }

        default : {
            return {...state}
        }
    }

}

export default budgetReducer