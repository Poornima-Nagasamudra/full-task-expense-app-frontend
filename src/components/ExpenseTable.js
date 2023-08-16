import React, { useState} from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import {   startDeleteExpense, startGetExpense } from '../actions/expenseAction'
import ExpenseForm from './ExpenseForm'
import {  Space, Table,  Button } from 'antd';
import { searchExpense } from '../actions/expenseAction';



function ExpenseTable(props){
    const {data} = props
    const[toggle, setToggle] = useState(false)
    const [record, setRecord] = useState({})
    const[ isEditClick, setIsEditClick] = useState(false)
    const[search, setSearch] = useState('')


    const dispatch = useDispatch()

    const category = useSelector((state) => {
          return state.category.data
    })
        
    function handleEdit(record){
         setToggle(true)
         setRecord(record)
         setIsEditClick(true)
    }

    function handleDelete(id){
        dispatch(startDeleteExpense(id, props))
    }

    function handleSearch(e){
        const result = e.target.value
        setSearch(result)
        if(result){
          const result1 = category.filter((ele) =>{
            return ele.name.toLowerCase().includes(result.toLowerCase())
          })
          dispatch(searchExpense(result1))
        } else if(result){
          dispatch(startGetExpense())
        }
    }

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
                    <Button onClick={() => {handleEdit(record)}}>Edit</Button>
                    <Button onClick={() => {handleDelete(record.id)}}>Delete</Button>
                  </Space>
            )
        }

      ];

    const pagination = {
        pageSize : 4,
        total : data.length,
        onChange: (page) => {
            console.log('Page changed to:', page)
        },
      }

    return(        
       <> 
          <div>
            <input type="search" value={search} placeholder="search here..." onChange={handleSearch}  />
          </div>
          <div>
          <Table 
              dataSource={data.map((ele, index) => {
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
            pagination = {pagination}
            />

            { toggle && (
                  <ExpenseForm record={record}  handleModalCancel={() => setToggle(false)} 
                            isEditClick={isEditClick}  setIsEditClick={setIsEditClick} />)
            }
          </div>        
        </>     
    )
}

export default ExpenseTable