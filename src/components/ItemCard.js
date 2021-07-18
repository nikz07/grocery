import React from 'react'
import ItemService from '../services/ItemService'

export default function ItemCard({item}) {
    function deleteItem(event){
        event.preventDefault()
        let id = event.target.getAttribute('id')
        console.log(id)
       ItemService.delete(id)
    }

    return (
        <div className="container">
            <div className="Card">
                <h2> {item.itemName} {item.itemPrice} <button id={item.index} onClick={deleteItem}>-</button></h2>
            </div>
        </div>
    )
}
