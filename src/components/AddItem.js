import React, { useState } from 'react'
import ItemService from '../services/ItemService'

function AddItem() {

    const [itemName, setitemName] = useState('')
    const [itemPrice, setitemPrice] = useState(0)

    function handleItemNameChange(event) {
        setitemName(event.target.value)
    }

    function handleItemPriceChange(event) {
        setitemPrice(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let name = event.target.itemName.value
        let price = event.target.itemPrice.value
        let data = {
            
            itemName: name,
            itemPrice: price
        }
        try {
            ItemService.create(data).then(() => {
                console.log("crea1ted")
            })
        } catch (e) {
            console.log("Error Occured" + e)
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="itemName" placeholder="Item Name" onChange={handleItemNameChange}></input>
                <input type="text" name="itemPrice" placeholder="Item Price" onChange={handleItemPriceChange}></input>
                <button type="submit" >Add Item</button>
            </form>
        </div>
    )
}

export default AddItem
