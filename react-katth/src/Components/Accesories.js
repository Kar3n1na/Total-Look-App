import React, {useEffect, useState} from 'react'
import Card from './Card.js'
import Home from './Home.js'
const Accessories = () => {

    
    const [accessories, setAccessories] = useState([])
    useEffect(()=> {
       getData ()
    }, [])

    const getData = async() => {
        const data= await fetch('https://apitotallook.herokuapp.com/accessories')
        const allproducts = await data.json()
        setAccessories(allproducts)
    }
    return (
        <div>
        {accessories && accessories.map ((product) => <Card 
            key={product.id} 
            price={product.price}
            image = {product.image}
            description = {product.description}
            name = {product.name}
         /> 
                    )
                }
      </div>
    )
}

export default Accessories