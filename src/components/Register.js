import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startGetRegister } from '../actions/usersAction'
import { Button,  Form, Input } from 'antd';

const Register =(props) =>{
    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()
    const [form] = Form.useForm()

    function handleUsername(e){
       setUserName(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function runValidation(){
        if(username.trim().length === 0){
            errors.username = 'username is required'
        }
        if(email.trim().length === 0){
            errors.email = 'email is required'
        }
        if(password.trim().length === 0){
            errors.password = 'password is 1 uppercase 1 lowercase 1 symbol 1 number'
        }

    }

    function onSubmit(values){
        runValidation()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            dispatch(startGetRegister(values,props))
            form.resetFields()
        } else {
            setFormErrors(errors)
        }
       
    }

    return (
      <div>
         <Form onFinish={onSubmit} form={form}  name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}} >

            <Form.Item label="username" name="username" rules={[ { required: true,  message: 'Please input your username!',}, ]} >
                 <Input placeholder="user name" value={username} onChange={handleUsername} />
                 {formErrors.username && <span> {formErrors.username} </span>}
            </Form.Item>

            <Form.Item label="email" name="email" rules={[ { required: true,  message: 'Please input your email!',}, ]}>
                <Input placeholder="email" value={email} onChange={handleEmail} />
                {formErrors.email && <span> {formErrors.email} </span>}
            </Form.Item>

            <Form.Item label="password" name="password" rules={[ { required: true,  message: 'Please input your password!',}, ]}>
                <Input.Password placeholder="password" value={password} onChange={handlePassword} />
                {formErrors.password && <span> {formErrors.password} </span>}
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
               <Button type="primary" htmlType="submit"> Register </Button> 
            </Form.Item>
         </Form>

    
      </div>
    )
}

export default Register