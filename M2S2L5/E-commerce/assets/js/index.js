window.addEventListener('load', function() {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.display = 'block';
});

const generateProductCards = function (productsArray) {
  const row = document.getElementById('products-row')
  productsArray.forEach((product) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src=${product.imageUrl}>  
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}€</p>
          <div class="d-flex justify-content-between">
          <a href="backoffice.html?productId=${product._id}" class="btn btn-danger">Modifica</a>
            <a href="details.html?productId=${product._id}" class="btn btn-danger">Scopri di più</a>
          </div>
        </div>
      </div>
      `
    row.appendChild(newCol)
  })
}

const getProducts = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8"
}
})
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        if (response.status === 404) {
          throw new Error("Errore, risorsa non trovata");
        }
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Errore lato Client");
        }
        if (response.status >= 500 && response.status < 600) {
          throw new Error("Errore lato Server");
        }
      }
    })
    .then((array) => {
      console.log('ARRAY!', array)
      // creiamo le card per la landing page
      generateProductCards(array);
      const loadingIndicator = document.getElementById('loading-indicator'); // nasconso indicatore
  loadingIndicator.style.display = 'none';
    })
    .catch((err) => {
      console.log('ERRORE!', err);
      alert(err);
    })
}

getProducts()

//token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8
