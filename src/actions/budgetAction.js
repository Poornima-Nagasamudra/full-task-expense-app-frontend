import axios from 'axios'

export function startGetBudget() {
                return (dispatch) => {
                    axios.get('http://localhost:3111/users/budget', {
                        headers : {
                            'Authorization' : localStorage.getItem('token')
                        }
                    })
                        .then((response) => {
                            const result = response.data 
                            dispatch(addBudget(result))
                        })
                        .catch((err)=> {
                            alert(err)
                        })
                }
        }

function addBudget(data) {
            return {
                type: 'ADD_BUDGET',
                payload : data
            }
        }

export function startBudgetUpdate( formData, id){
    return (dispatch) => {
       axios.put(`http://localhost:3111/users/budget/${id}`, formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
            .then((response)=>{
               const result = response.data 
               dispatch(updateBudget(result))
            })
            .catch((err)=>{
                alert(err)
            })
   }
}

const updateBudget = (data) => {
     return {
        type : 'UPDATE_BUDGET',
        payload : data
    }
}