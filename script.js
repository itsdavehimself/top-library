let myLibrary = [];

function Book(title, author, pages, rating, read, data) {
  this.title = title
  this.author = author
  this.pages = pages
  this.rating = rating
  this.read = read
  this.data = data
  this.displayBook = function () {
    const booksDiv = document.querySelector('.books');
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookRating = document.createElement('p');
    const bookRead = document.createElement('p');
    const removeBook = document.createElement('button');
    const changeRead = document.createElement('button');
    bookCard.classList.add('book-card');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookRating.classList.add('book-rating');
    bookRead.classList.add('book-read');
    removeBook.classList.add('remove-book');
    changeRead.classList.add('change-read');
    bookTitle.textContent = `${this.title}`;
    bookAuthor.textContent = `${this.author}`;
    bookPages.textContent = "Pages: " + `${this.pages}`;
    bookRating.textContent = "Rating: " + `${this.rating}`;
    bookRead.textContent = `${this.read}`;
    removeBook.textContent = "Remove Book";
    changeRead.textContent = "Read";
    booksDiv.appendChild(bookCard);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRating);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(removeBook);
    bookCard.appendChild(changeRead);

    removeBook.addEventListener('click', () => {
      booksDiv.removeChild(bookCard);
      const indexOfBook = myLibrary.findIndex(object => {
        return object.data === this.data;
      })
      myLibrary.splice(indexOfBook, 1);
    });

    changeRead.addEventListener('click', () => {
      if (this.read === 'read') {
        this.read = 'not read';
      } else {
        this.read = 'read';
      };
      bookRead.textContent = `${this.read}`;
    });
    };
};

let data = 0;
function addBookToLibrary (event) {
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('author-name').value;
  let pages = document.getElementById('number-pages').value;
  let rating = document.getElementById('rating-score').value;
  let read = document.querySelector('input[name="read-status"]:checked').value;
  data++;
  const newBook = new Book(title, author, pages, rating, read, data);
  myLibrary.push(newBook);
  newBook.displayBook();
  resetForm();
  event.preventDefault();
};


function resetForm () {
  document.getElementById('book-title').value = '';
  document.getElementById('author-name').value = '';
  document.getElementById('number-pages').value = '';
  document.getElementById('rating-score').value = '';
  document.getElementById('read-status-no').checked = false;
  document.getElementById('read-status-yes').checked = false;
};
