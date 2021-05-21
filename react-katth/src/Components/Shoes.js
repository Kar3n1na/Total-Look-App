import React, {useEffect, useState} from 'react'
import Card from './Card.js'
// import Home from './Home.js'
const Shoes = () => {

    const [shoes, setShoes] = useState([])


    useEffect(()=> {
       getData ()
    }, [])

    const getData = async() => {
        const data= await fetch('http://localhost:8000/shoes')
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
/*                 <div className="Card">
                  <img className="Card_img">{shoe.image}</img> 
                  <p>{shoe.description}</p>            
                  <p><b>{shoe.price}</b></p>               
                  <p>Tallas</p>
                  <span class="material-icons">add_box</span>
               </div> */
                    )
                }
      </div>
    )
}

export default Shoes;