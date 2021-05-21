

// eslint-disable-next-line no-unused-vars
function App() {

    
    // eslint-disable-next-line no-unused-vars
    let getData = async() => {
      const url = `http://localhost:8000/clothing`
      const getFetchData = await fetch(url).then(result => result.json())
      console.log(getFetchData)
    }

}