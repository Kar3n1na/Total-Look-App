import React, {useEffect, useState} from 'react'
import Card from './Card.js'

const Clothing = () => {



    const [clothing, setClothing] = useState([])


    useEffect(()=> {
       getData ()
    }, [])

    const getData = async() => {
        const data= await fetch('https://apitotallook.herokuapp.com/clothing')
        const allproducts = await data.json()
        setClothing(allproducts)
    }

    return (
      <div>
        {clothing && clothing.map ((product) => <Card 
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

export default Clothing;
