import axios from 'axios'

export function startGetProfile(){
    return (dispatch) => {
        axios.get(`http://localhost:3111/users/profile`, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
          .then((response) => {
              const result = response.data
              dispatch(getProfile(result[0]))
          })
          .catch((err) => {
              alert(err.message)
          })
    }
}

function getProfile(data){
    return {
        type: 'GET_PROFILE',
        payload: data
    }
}

export const startCreateProfile = (formData) => {
      return(dispatch) => {
         axios.post(`http://localhost:3111/users/profile`, formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
         })
         .then((response) => {
            const result = response.data 
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                } else {
                    dispatch(createProfile(result))

                }
         })
         .catch((err) => {
             console.log(err)
         })
      }
}

function createProfile(data) {
    return {
        type: 'CREATE_PROFILE',
        payload: data
    }
}

export function startUpdateProfile(formData, id){
    return(dispatch) => {
        axios.put(`http://localhost:3111/users/profile/${id}`, formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const result = response.data 
            dispatch(updateProfile(result))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

const updateProfile = (data) => {
    return {
       type : 'UPDATE_PROFILE',
       payload : data
   }
}

export function startUpdateProfileImage(data, id){
    return(dispatch)=>{
        axios.put(`http://localhost:3111/users/profilepic/${id}`, data, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const result = response.data 
            dispatch(updateImage(result))
         })
        .catch((err) => {
            console.log(err)
        })
    }
}

const updateImage = (data) => {
    return {
       type : 'UPDATE_IMAGE',
       payload : data
   }
}

export const reset_image = () => {
    return{
        type: 'RESET_IMAGE'
    }
}