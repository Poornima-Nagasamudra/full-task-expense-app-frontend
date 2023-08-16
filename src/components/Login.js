import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startGetLogin } from '../actions/usersAction'
import {Button, Input, Form } from 'antd'

const Login = (props) =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()
    const [form] = Form.useForm()

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function onFinish(values){
        dispatch(startGetLogin(values, props))       
    }

    return(
        <div>
            <Form onFinish={onFinish} form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}}>
            
                <Form.Item label="email" name="email" rules={[ { required: true,  message: 'Please input your email!',}, ]}>
                    <Input placeholder="email" value={email} onChange={handleEmail} />
                </Form.Item>

                <Form.Item label="password" name="password" rules={[ { required: true,  message: 'Please input your password!',}, ]}>
                  <Input.Password placeholder="password" value={password} onChange={handlePassword} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item> 
            </Form>    

        </div>
    )
}

export default Login