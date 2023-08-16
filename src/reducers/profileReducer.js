const proInitialState = {
    data: {}
}

const profileReducer = (state = proInitialState, action) => {
    switch(action.type){
        case 'GET_PROFILE' : {
            return {...state, data:{...action.payload}}
        }

        case 'CREATE_PROFILE': {
            return {...state, data:{...action.payload}}
        }

        case 'UPDATE_PROFILE': {
            return {...state, data:{...state.data, ...action.payload}}
        }

        case 'UPDATE_IMAGE': {
            return{ ...state, data:{...state.data, ...action.payload}}
        }

        case 'RESET_IMAGE': {
            return{}
        }
        
        default : {
            return {...state}
        }
    }
}

export default profileReducer