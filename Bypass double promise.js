const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(responce => responce.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )

getData('https://jsonplaceholder.typicode.com/todos/1') // You can paste your link
   .then(data => console.log(data))
   .catch(error => console.log(error.message))
