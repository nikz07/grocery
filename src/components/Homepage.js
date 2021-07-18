import React, {useEffect, useState} from 'react'
import AddItem from './AddItem'
import ItemService from '../services/ItemService'
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom'

function Homepage() {
    const [items, setitems] = useState()
    useEffect(() => {
        const db = ItemService.getAll();
        db.on('value',(snapshot)=>{
            console.log(snapshot.val())
            const DBItems = snapshot.val()
            const items = []
            for(let index in DBItems){
                items.push({ index, ...DBItems[index]})
            }
         setitems(items)
        })
    }, [])

    return (
        <div>
            <AddItem></AddItem>
            {items ? items.map((item, index) => <ItemCard item={item} key={index}></ItemCard>):''}
            <Link to="/login">Logout</Link>
        </div>
    )
}

export default Homepage

