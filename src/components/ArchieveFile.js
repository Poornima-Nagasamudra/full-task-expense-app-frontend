import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  startListSoft,  startPermanentDelete, startGetRestore } from '../actions/expenseAction'
import {  Space, Table,  Button } from 'antd';


function ArchieveFile(props){
    const expense = useSelector((state) =>{
        return state.expense.restore
    })

    const category = useSelector((state) => {
        return state.category.data
   })

    function handleDelete(id){
        dispatch(startPermanentDelete(id))
    }

    function handleRestore(id){
        dispatch(startGetRestore(id))
    }

     const dispatch = useDispatch()

     useEffect(() => {
         dispatch(startListSoft())
     },[dispatch])

     const columns = [
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
          },
          {
            title: 'ExpenseDate',
            dataIndex: 'expensedate',
            key: 'expensedate',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render : (text, record) => (
                  <Space size="middle">
                   <Button onClick={() => {handleDelete(record.id)}}>Delete</Button>
                   <Button onClick={() => {handleRestore(record.id)}}>Restore </Button>
                  </Space>
            )
        }

      ];

     return (
        <div>
            <h1>Archieve - </h1>
      
            <Table dataSource={expense.map((ele, index) => {
             const result = category.find(cat => cat._id === ele.categoryId)
             const result2 = result ? result.name : 'N/A'

                return {
                    id : ele._id,
                    category: result2,
                    name : ele.name,
                    description : ele.description,
                    amount : ele.amount,
                    expensedate : ele.expensedate
                }

            })}
    
            columns = {columns}
            rowKey= "key"
            />
        </div>
     )

}

export default ArchieveFile