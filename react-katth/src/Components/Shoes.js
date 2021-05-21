import React, {useEffect, useState} from 'react'

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
         <ul>
        {shoes.map (shoes => (
                   <Card
                    allproducts= {allallproducts}
                    />
                    ))
                }
            </ul>
      </div>
    )
}

export default Shoes;