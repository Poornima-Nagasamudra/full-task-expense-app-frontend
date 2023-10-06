import axios from 'axios'

export const startGetCategory = () => {
      return (dispatch) => {
          axios.get('http://localhost:3111/users/category', {
             headers : {
                'Authorization' :  localStorage.getItem('token')
             }
          })          
             .then((response)=>{
                 const result = response.data 
                 dispatch(getCategory(result))
                 dispatch(setIsLoading(false))
             })
             .catch((err)=>{
                console.log(err)
             })
            
      }
}
const getCategory = (data) => {
    return {
        type: 'GET_CATEGORY',
        payload: data
    }
}
const setIsLoading = (status) => {
    return {
        type: 'SET_LOADING',
        payload: status
    }
}

export const startCreateCategory = (formData) => {
    return (dispatch) => {
        axios.post('http://localhost:3111/users/category', formData, {
            headers : {
               'Authorization' :  localStorage.getItem('token')
            }
         })
         .then((response)=> {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                dispatch(createCategory(result))

            }
         })
         .catch((err) => {
            console.log(err)
         })
    }
}
const createCategory = (data) => {
    return {
        type: 'CREATE_CATEGORY',
        payload: data
    }
}

export const startDeleteCategory = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3111/users/category/${id}`, {
            headers : {
                'authorization' :  localStorage.getItem('token')
             }
        })
        .then((response) => {
            const result = response.data 
            console.log(result)
            dispatch(deleteCategory(result))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
const deleteCategory = (id) => {
     return {
        type : 'DELETE_CATEGORY',
        payload: id
     }
}