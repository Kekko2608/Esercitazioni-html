
class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}  

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
console.log('PRODUCTID?', productId);

let productToModify ;

const getProductData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
headers: {
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8"
}
})
    .then((response) => {
      if (response.ok) {
        return response.json();
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
    .then((product) => {
      console.log('DETTAGLI RECUPERATI', product);
      document.getElementById('imageUrl').value = product.imageUrl;
      document.getElementById('name').value = product.name;
      document.getElementById('description').value = product.description;
      document.getElementById('price').value = product.price;
      document.getElementById('brand').value = product.brand;
      productToModify = product;
    })
    .catch((err) => {
      console.log('ERRORE!', err);
      alert(err);
    });
};

const deleteProduct = function () {
  const confirmation = confirm("Sei sicuro di voler eliminare tutti i campi?");
  if (confirmation) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8`,
      }
    })
      .then((response) => {
        if (response.ok) {
          alert('RISORSA ELIMINATA')
          location.assign('index.html') // Torna alla home
        } else {
          alert('ERRORE - RISORSA NON ELIMINATA')
        }
      })
      .catch((err) => {
        console.log('ERR', err)
      })
  } else {
    alert('Eliminazione annullata');
  }
}

const submitProduct = function (e) {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const descriptionInput = document.getElementById('description').value;
  const brandInput = document.getElementById('brand').value;
  const imageUrlInput = document.getElementById('imageUrl').value;
  const priceInput = document.getElementById('price').value;

  const productFromForm = new Product(nameInput, descriptionInput, brandInput, imageUrlInput, priceInput);

  let URL = `https://striveschool-api.herokuapp.com/api/product/`
  let methodToUse = 'POST'

  if (productId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${productId}`
    methodToUse = 'PUT'
  }

  fetch(URL, {
    method: methodToUse,
    body: JSON.stringify(productFromForm),
    headers: {
      'Content-type': 'application/json',
      Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGM5ZTgxODQ0MjAwMTUzNzU4OWMiLCJpYXQiOjE3MTUzMzAyMDYsImV4cCI6MTcxNjUzOTgwNn0.JPMgKFHsVxryyZ_rdxLiBkRwagknrjnRtS3YVFuCcb8"
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`Prodotto ${productToModify ? 'modificato' : 'creato'}!`);
        location.assign('index.html');
      } else {
        throw new Error('Errore nel salvataggio della risorsa');
      }
    })
    .catch((err) => {
      console.log('ERRORE', err);

    });
};


const reset = function () {
  const confirmation = confirm("Sei sicuro di voler azzerare tutti i campi?");
  if (confirmation) {
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('imageUrl').value = ''
  }
};

if (productId) {
  getProductData();
  let buttons = document.getElementById('buttons');

  const modButton = document.getElementById('first-button')
  modButton.innerText = 'MODIFICA';


  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'ms-1');
  deleteButton.innerText = 'CANCELLA';
  buttons.appendChild(deleteButton);

  const resetButton = document.createElement('button');
  resetButton.classList.add('btn', 'btn-warning', 'ms-3');
  resetButton.innerText = 'RESET';
  buttons.appendChild(resetButton);

  resetButton.addEventListener('click', reset);
  deleteButton.addEventListener('click', deleteProduct);
  modButton.addEventListener('click', submitProduct)
}


document.getElementById('product-form').addEventListener('submit', submitProduct);
