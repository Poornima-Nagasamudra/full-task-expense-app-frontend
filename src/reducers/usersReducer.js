const userIntitialState = {}

const usersReducer = (state = userIntitialState, action) => {
    
    switch(action.type){
        case 'SET_USERS' : {
            return {...state, ...action.payload}
        }

        case 'LOGIN_USERS': {
            return {...state, ...action.payload}
        }

        case 'GET_ACCOUNT' : {
            return {...state, ...action.payload}
        }

        default : {
            return {...state}
        }
    }

}

export default usersReducer