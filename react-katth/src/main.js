const getData = async () => {
  const urls = [
    `http://localhost:8000/clothing`,
    `http://localhost:8000/shoes`,
    `http://localhost:8000/accessories`
  ];
  
  let requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => {
      return responses;
    }).then(responses => Promise.all(responses.map(r => r.json())))
    .then((response) => {
      let mergedArray = response.reduce((acc, category) => acc.concat(category), []);
      console.log(mergedArray);
      return mergedArray;
    })
}

export default getData;