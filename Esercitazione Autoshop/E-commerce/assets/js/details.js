
const addressBarContent = new URLSearchParams(location.search) 
console.log(addressBarContent)
const productId = addressBarContent.get('productId')

const getProductData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8"
    }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        if (response.status === 404) {  
          throw new Error("Errore, risorsa non trovata");
        }
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Errore lato Client");
        }
        if (response.status >= 500 && response.status < 600) {
          throw new Error("Errore lato Server")
        }
     }
    })
    .then((product) => {
      console.log('DETTAGLI RECUPERATI', product)
      document.getElementById('imageUrl').src = product.imageUrl
      document.getElementById('name').innerText = product.name
      document.getElementById('description').innerText = product.description
      document.getElementById('brand').innerText = product.brand
      document.getElementById('price').innerText = product.price + '€'
    })
    .catch((err) => {
      console.log('ERRORE!', err);
      alert(err);
    })
}

getProductData()



