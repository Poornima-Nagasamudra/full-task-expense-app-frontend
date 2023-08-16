import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from 'antd'
import { startGetProfile, startUpdateProfile, startUpdateProfileImage } from "../actions/profileAction"

const Profile = (props) => {

    const profile = useSelector((state) => {
        return state.profile.data
    })

    const [modal, setModal] = useState(false)
    const [name, setName] = useState(profile.name ? profile.name : '')
    const [age, setAge] = useState(profile.age ? profile.age : '')
    const [occupation, setOccupation] = useState(profile.occupation ? profile.occupation : '')
    const [file, setFile] = useState(profile.avatar ? profile.avatar : {})
    const [formError, setFormError] = useState({})

    const errors = {}

    const runValidation = () => {
        if (name.trim().length === 0) {
            errors.name = "Name is required"
        } else if (age.trim().length === 0) {
            errors.age = "Age is required"
        } else if (occupation.trim().length === 0) {
            errors.occupation = "Occupation is required"
        } 
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetProfile())
    }, [dispatch])

    const showModal = () => {
        setModal(!modal)
    }

    const handleOk = () => {
        setModal(false)
    }

    const handleCancel = () => {
        setModal(false)
    }

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === "name") {
            setName(e.target.value)
        } else if (attr === "age") {
            setAge(e.target.value)
        } else if (attr === "occupation") {
            setOccupation(e.target.value)
        }  else if (attr === "file") {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const formData = {
                name: name,
                age: age,
                occupation: occupation              
            }
            dispatch(startUpdateProfile(formData, profile._id))
        } 
        else {
            setFormError(errors)
        }
    }

    const handlePicSubmit = (e) => {
       e.preventDefault()
        const formData = new FormData()
        formData.append("avatar", file)
        dispatch(startUpdateProfileImage(formData, profile._id))
    }

    useEffect(() => {
        setName(profile.name)
        setAge(profile.age)
        setOccupation(profile.occupation)
        setFile(profile.avatar)
    }, [profile.name, profile.age, profile.occupation,  profile.avatar])

    return (
        <div>
            <Modal
                visible={modal}
                isOpen={modal}
                onOk={handleOk}
                handleOk={handleCancel}
            >

           <form onSubmit={handleSubmit}>
                <h1>Profile</h1>
                   <label> Name </label>
                   <input type="text" name="name" value={name}  onChange={handleChange}  /><br/>
               
                   <labell> Age </labell>
                   <input type="text" name="age" value={age} onChange={handleChange}/><br/>
                
                   <label> Occupation </label>
                   <input  type="text" name="occupation" value={occupation}  onChange={handleChange} /><br/>

                   <input type="submit" value="submit"/>
                  
            </form><br />

            <form onSubmit={handlePicSubmit}>
                    <input type="file" placeholder="Choose file" name="file" onChange={handleChange} /><br />
                    <input type="submit" value="upload"  />
            </form>
            </Modal>

            <h3><button onClick={showModal}> Edit</button> </h3>
            {
                Object.keys(profile).length !== 0  &&
                <div>
                    <h2>Name-{profile.name}</h2>
                    <h2>Age-{profile.age}</h2>
                    <h2>Occupation-{profile.occupation}</h2>
                    {
                        profile.avatar ? (
                            <img width="200x" src={`http://localhost:3111/${profile.avatar}`} alt="" />
                        ) : (
                            <img width="200x" src={'https://i.stack.imgur.com/l60Hf.png'} alt="" />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Profile