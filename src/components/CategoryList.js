import React from 'react'
import { useDispatch } from 'react-redux' 
import { startDeleteCategory } from '../actions/categoryAction'
import { Space, Table, Button } from 'antd'

const CategoryList = (props) => {
    const {data} = props 
    const dispatch = useDispatch()

        function handleDelete(id){
            dispatch(startDeleteCategory(id))
        }

        const columns = [
            {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            },
            {
                title: 'Actions',
                dataIndex: 'actions',
                key: 'actions',
                render : (text, record) => (
                    <Space>
                        <Button onClick={() => {handleDelete(record._id)}}> Delete</Button>
                    </Space>)
            }

        ];

        const pagination = {
            pageSize : 5,
            total : data.length,
            onChange: (page) => {
                console.log('Page changed to:', page)
            },
        }

        const dataSource =  data.map((ele) => ({
             id : ele._id, 
             name : ele.name
            
         }))
       
     
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} rowKey="id"  pagination={pagination} />
        </div>
    )
}
export default CategoryList