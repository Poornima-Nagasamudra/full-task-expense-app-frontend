const expenseInitialState = {
    data : [],
    errors : {},
    restore: []
}

const expenseReducer = (state = expenseInitialState, action) => {
    switch(action.type) {
        case 'GET_EXPENSE' : {
            return {...state, data:[ ...action.payload]}
        }

        case 'CREATE_EXPENSE' : {
            return {...state, data:[...state.data, action.payload] }
        }
        case 'UPDATE_EXPENSE' : {
            return {...state, data:[...state.data, action.payload] }
        }
        case 'DELETE_EXPENSE' : {
            return {...state, data: state.data.filter(function(ele){
                return ele._id !== action.payload 
            })}
        }
        case 'DELETE_SOFT_DELETE' : {
            return {...state, restore: action.payload}
        }

        case 'DELETE_PERMENANT' : {
            return {...state, restore:state.restore.filter(function(ele){
                return ele._id !== action.payload
            })}
        }

        case 'SOFT_REDELETE' : {
            return {...state, restore:state.restore.filter(function(ele){
                return ele._id !== action.payload
            })}
        }

        case 'SOFT_RESTORE' : {
            return {...state, data:[...state.data, action.payload]}
        }
        
        case 'SEARCH_EXPENSE' : {
            let new_arr = [];
            action.payload.forEach((ele) => {
              state.data.forEach((obj) => {
                if (ele._id === obj.categoryId) {
                  new_arr = [...new_arr, obj];
                }
              });
            });
            return { ...state, data: new_arr };
        }

        case "UPDATE_EXPENSE_INVOICE" : {
            return {...state, data:state.data.map(function(ele){
                return ele._id === action.payload
            })}
        }

        default : {
            return {...state}
        }
    }
}

export default expenseReducer