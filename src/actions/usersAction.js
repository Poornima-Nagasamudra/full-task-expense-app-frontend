import axios from 'axios'

 export function startGetRegister(values, props){
   
     return (dispatch) => {
        axios.post('http://localhost:3111/users/register',  values)            
           .then((response) => {
              const users = response.data 
              if(users.hasOwnProperty('errors')){
                 alert(users.errors)
              } else {
                  alert('succefully registered')
                  props.history.push('./login')
                  dispatch(setUsers(users))
              }
              
           })
           .catch((err) => {
              alert(err.message)
           })
     }
}

 function setUsers(users){
    return {
        type: 'SET_USERS',
        payload : users
    } 
    
 }

 export function startGetLogin(values, props){
      return (dispatch) => {
         axios.post('http://localhost:3111/users/login',   values)
            .then((response) => {
                const result = response.data 
                  if(result.hasOwnProperty('errors')){
                     alert(result.errors)
                  } else {
                     alert('succesfully loggedin')
                     localStorage.setItem('token', result.token)
                     props.history.push('/')
                     dispatch(loginUsers(result))
                  }
              
            })
            .catch((err)=> {
                alert(err.message)
            })
      }
 }

  function loginUsers(users){
        return {
          type: 'LOGIN_USERS',
          payload: users
        }
 }

export const startGetAccount = () => {
   return(dispatch) => {
      axios.get('http://localhost:3111/users/account', {
         headers : {
               'Authorization' : localStorage.getItem('token')
         }
      })
      .then((response) => {
         const result = response.data 
         dispatch(getAccount(result))
      })
      .catch((err) => {
         alert(err.message)
      })
   }
}

function getAccount(users){
   return {
      type: 'GET_ACCOUNT',
      payload: users
   }
}

