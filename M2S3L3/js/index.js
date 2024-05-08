
  const generateList = function (books) {
    const list = document.getElementById('books-list');

    books.forEach((book) => {
        const newLi = document.createElement('div');
        newLi.classList.add('card', 'col-2','mx-5', 'my-2','position-relative');
        newLi.innerHTML = `
        <img src=${book.img} class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Prezzo ${book.price}</p>
          <button type="button" class="btn btn-primary tasto " onclick="removeBook(this)">Scarta</button>
          <button type="button" class="btn btn-success tasto " onclick="addBook()">Compra ora</button>
          
        </div>
      `;
        list.appendChild(newLi);
    });
};

const getBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 404) {
                    throw new Error('La risorsa richiesta non è stata trovata');
                } else if (response.status === 500) {
                    throw new Error('La risposta del server è stata negativa');
                }
            }
        })
        .then((books) => {
            console.log('Ho estratto il body dalla Response! Ecco il risultato:', books);
            generateList(books); // Passiamo 'books' invece di 'arrayOfBooks'
        })
        .catch((err) => {
            console.log('ERRORE', err);
        });
};

const removeBook = function (button) {
    const card = button.closest('.card');
    if (card) {
        card.remove();
    }
};

getBooks();

