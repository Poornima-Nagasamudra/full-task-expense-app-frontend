import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { startGetCategory } from '../actions/categoryAction'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

const CategoryContainer = (props) =>{

    const category = useSelector((state)=> {
         return state.category
    })

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetCategory())
    },[dispatch])

    return(
        <div>
            <h1>Category - {category.data.length} </h1>
            
            <CategoryForm />
            <CategoryList data={category.data} />

        </div>
    )
}

export default CategoryContainer