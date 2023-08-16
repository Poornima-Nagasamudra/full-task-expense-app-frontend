import axios from 'axios'

export const startGetExpense = () => {
    return (dispatch) => {
        axios.get('http://localhost:3111/users/expense', {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(getExpense(result))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

const getExpense = (data) => {
    return {
        type: 'GET_EXPENSE',
        payload : data
    }
}

export const startCreateExpense = (formData) => {
     return (dispatch) => {
        axios.post(`http://localhost:3111/users/expense`, formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                console.log(result.message)
            } else {
               dispatch(createExpense(result))
            }
        })
        .catch((err) => {
            console.log(err)
        })
     }

}

const createExpense = (data) => {
    return {
        type: 'CREATE_EXPENSE',
        payload : data
    }
}

export const startUpdateExpense = (formData) =>{
    return (dispatch) => {
        axios.put(`http://localhost:3111/users/budget/${formData._id}`, formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(updateExpense(result))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

const updateExpense = (data) => {
    return {
        type : 'UPDATE_EXPENSE',
        payload : data
    }
}

export const startDeleteExpense = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3111/users/expense/${id}`, {
            headers : {
                'authorization' :  localStorage.getItem('token')
             }
        })
        .then((response) => {
            const result = response.data 
            alert('succefully delted')
            dispatch(deleteExpense(result._id))
            dispatch(startGetExpense())
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
const deleteExpense = (id) => {
     return {
        type : 'DELETE_EXPENSE',
        payload: id
     }
}

export const startListSoft = () => {
    return (dispatch) => {
        axios.get('http://localhost:3111/users/expensesoft', {
            headers : {
                'authorization' :  localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(deleteSoftExpense(result))
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}
const deleteSoftExpense = (id) => {
    return {
        type: 'DELETE_SOFT_DELETE',
        payload: id
    }
}

export function startPermanentDelete(id){
    return (dispatch) => {
        axios.delete(`http://localhost:3111/users/permanentDelete/${id}`,  {
            headers : {
                'authorization' :  localStorage.getItem('token')
             }
        })
        .then((response) => {
            const result = response.data 
            alert('succefully delted')
            dispatch(deletePermanent(result._id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

const deletePermanent = (id) => {
    return {
        type: 'DELETE_PERMANENT',
        payload: id
    }
}

export const startGetRestore = (id) => {
   // console.log('id', id)
    return (dispatch) => {
        axios.get(`http://localhost:3111/users/restore/${id}`, {
            headers : {
                'authorization' :  localStorage.getItem('token')
             }
        })
        .then((response) => {
            const result = response.data 
            dispatch(setSoftRestore(id))
            dispatch(startGetExpense())
            dispatch(setSoftRestoreDelete(id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
const setSoftRestoreDelete = (id) => {
    return {
       type : 'SOFT_REDELETE',
       payload: id
    }
}

const setSoftRestore = (id) => {
    return{
        type: 'SOFT_RESTORE',
        payload: id
    }
}

export const searchExpense = (arr) => {
    return {
      type: "SEARCH_EXPENSE",
      payload: arr,
    };
  };