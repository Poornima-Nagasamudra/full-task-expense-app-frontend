import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startCreateCategory } from '../actions/categoryAction'
import {Button, Input, Form } from 'antd'

const CategoryForm = (props) => {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const category = useSelector((state)=> {
        return state.category
    })
    
    const [form] = Form.useForm()

    function handleName(e){
        setName(e.target.value)
    }

    function onFinish(values){
        const id = category._id
        dispatch(startCreateCategory(values, id))
        form.resetFields()
    }

    useEffect(()=>{
        setName('')
    }, [category])

    return(
        <div>
            <Form onFinish={onFinish} form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}}>
             
                <Form.Item  name="name" rules={[ { required: true,  message: 'Please input your category name!',}, ]}>
                    <Input value={name} onChange={handleName} placeholder="name" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
                    <Button type="primary" htmlType="submit"> Add</Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default CategoryForm