import React, {useEffect } from 'react'
import { startGetAccount } from '../actions/usersAction'
import { useDispatch, useSelector } from 'react-redux'

function Account(props){
    const dispatch = useDispatch()

     const users = useSelector((state) =>{
        return state.users
     })
       
    useEffect(()=>{
        dispatch(startGetAccount())
    }, [dispatch])

    return(
        <div>
            {Object.keys(users).length !== 0 &&  (
                <div>
                    <h3 style={{ color: "navy" }}>User Name:</h3>
                    <h4>{users.username}</h4>

                    <h3 style={{ color: "navy" }}>Email Id :</h3>
                    <h4>{users.email}</h4>
                </div>
            )}
           
        </div>
    )
}

export default Account