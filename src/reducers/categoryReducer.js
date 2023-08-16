const categoryInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

const categoryReducer = (state = categoryInitialState, action) => {

    switch(action.type){
        case 'GET_CATEGORY' : {
            return {...state, data: [...action.payload]}
        }
        case 'SET_LOADING' : {
            return {...state, isLoading: action.payload}
        }
        case 'CREATE_CATEGORY' : {
            return {...state, data:[...state.data, action.payload]}
        }
        case 'DELETE_CATEGORY' : {
            return {...state, data: state.data.filter(function(ele){
                 return ele._id !== action.payload
            })}
        }

        default : {
            return {...state}
        }
    }
}

export default categoryReducer