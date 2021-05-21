import React, {useEffect, useState} from 'react'
import Card from './Card.js'

const Shoes = () => {

    const [shoes, setShoes] = useState([])


    useEffect(()=> {
       getData ()
    }, [])

    const getData = async() => {
        const data= await fetch('https://apitotallook.herokuapp.com/shoes')
        const allproducts = await data.json()
        setShoes(allproducts)
    }

    return (
      <div>
        {shoes && shoes.map ((product) => <Card 
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

export default Shoes;