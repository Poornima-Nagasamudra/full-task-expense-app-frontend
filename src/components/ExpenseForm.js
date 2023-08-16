import React, {useState, useEffect} from 'react'
import {Button, Input, Form, Select, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { startGetCategory } from '../actions/categoryAction'
import { startCreateExpense, startUpdateExpense } from '../actions/expenseAction'
import moment from 'moment'
import TextArea from 'antd/es/input/TextArea'
const { Option } = Select


function ExpenseForm(props){
    const {record, isEditClick, setIsEditClick} = props

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [form] = Form.useForm()

    const {category} = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(startGetCategory())
    }, [dispatch])
    
    useEffect(()=>{
        if(isEditClick){
            setIsModalVisible(true)
        }
    }, [isEditClick])

    const[name, setName] = useState('')
    const[amount, setAmount] = useState('')
    const[expensedate, setExpensedate] = useState('')
    const[description, setDescription] = useState('')

    function handleName(e){
        setName(e.target.value)
    }
    function handleAmount(e){
        setAmount(e.target.value)
    }
    function handleExpenseDate(e){
        setExpensedate(e.target.value)
    }
    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handleButtonClick(){
        setIsModalVisible(true)
    }
    
    function handleModalCancel(){
        setIsModalVisible(false)
    }

    useEffect(()=>{
        if (record){
            form.setFieldValue({
                name: record.Name,
                amount: record.Amount,
                expenseDate : moment(record.ExpenseDate,  "YYYY-MM-DD"),
                categoryId: record.category,
            })
        }
    }, [form, record])

    function handleSubmit(values){
        form.resetFields()
        if(record){
            dispatch(startUpdateExpense(record._id, values))
        } else {
            dispatch(startCreateExpense(values))
        }
        setIsModalVisible(false)
        setIsEditClick(false)
        
    } 

    return(
        <div>
            <Button type="primary" htmlType="submit" onClick={handleButtonClick}>Add Expense</Button>

            <Modal 
            title="Form" 
            open={isModalVisible} 
            onCancel={handleModalCancel} 
            footer={[    
                <Button  key="cancel" onClick={handleModalCancel}> Cancel</Button>,             
                <Button type="primary" key="submit"  htmlType="submit" form="expenseForm"> Save</Button>
                 ]} >
                    
            <Form onFinish={handleSubmit} id="expenseForm" form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}} > 
              
                <Form.Item label="name" name="name" rules={[ { required: true,  message: 'Please input your  name!',}, ]}>
                    <Input type="text" value={name} onChange={handleName}  />
                </Form.Item>
                
                <Form.Item  label="amount" name="amount" rules={[ { required: true,  message: 'Please input your amount!',}, ]}>
                    <Input type="number" value={amount} onChange={handleAmount}  />
                </Form.Item>

                <Form.Item label="expensedate" name="expensedate" rules={[ { required: true,  message: 'Please input your date!',}, ]}>
                    <Input type="date" />
                </Form.Item>
            
                <Form.Item label="description" name="description" rules={[ { required: true,  message: 'Please input your description!',}, ]}>
                    <TextArea type="text" value={description} onChange={handleDescription} />
                </Form.Item>

                <Form.Item name="categoryId">                   
                    <Select label="name" defaultValue="default">
                        <Option value="default" disabled> select </Option>
                        { category.data.map(function(ele){
                            return <Option key={ele._id} value={ele._id} > {ele.name} </Option> 
                        })}
                    </Select>
                </Form.Item>             
                
            </Form>
            </Modal>

        </div>
    )
}

export default ExpenseForm