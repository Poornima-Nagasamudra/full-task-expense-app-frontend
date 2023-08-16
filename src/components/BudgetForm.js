import React, {useState} from 'react'
import { startBudgetUpdate } from '../actions/budgetAction'
import { useDispatch ,useSelector} from 'react-redux'
import {Button, Input, Form } from 'antd'


const BudgetForm = (props) => {
 
  const {handleEdit} = props
   const budget = useSelector((state)=>{
        return state.budget.budget
   })

   const [form] = Form.useForm()
   
   const[amount , setAmount] = useState(budget.amount ? budget.amount : '')
   
   const dispatch = useDispatch()

   function handleChange(e){
      setAmount(e.target.value)
   }

   function onFinish(values){
      const id = budget._id
      dispatch(startBudgetUpdate(values, id))
       handleEdit()
       form.resetFields()
   }
   
    return(
        <div>
            <Form  onFinish={onFinish} form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}}> 

                <Form.Item label="budget" name="amount" rules={[ { required: true,  message: 'Please input your amount!',}, ]}>
                    <Input placeholder="amount" value={amount} onChange={handleChange} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
                    <Button type="primary" htmlType="submit"> Update</Button>
                </Form.Item> 
            </Form>
        </div>
    )

}

export default BudgetForm