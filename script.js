let myLibrary = [];

class Book {
  constructor(title, author, pages, rating, read, data) {
    this.title = title
    this.author = author
    this.pages = pages
    this.rating = rating
    this.read = read
    this.data = data
  }
  
  displayBook() {
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
  }
}

let data = 0;
function addBookToLibrary(e) {
  console.log('???')
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
  e.preventDefault();
};


function resetForm() {
  document.getElementById('book-title').value = '';
  document.getElementById('author-name').value = '';
  document.getElementById('number-pages').value = '';
  document.getElementById('rating-score').value = '';
  document.getElementById('read-status-no').checked = true;
  document.getElementById('read-status-yes').checked = false;
};

const submitBtn = document.querySelector('.book-submit');
const form = document.getElementById('form');

submitBtn.addEventListener('click', formValidation)
form.addEventListener('submit', addBookToLibrary);

function formValidation(e) {
  const title = document.getElementById('book-title');
  const author = document.getElementById('author-name');
  const pages = document.getElementById('number-pages');
  const rating = document.getElementById('rating-score');

  if (title.validity.valueMissing) {
    title.setCustomValidity('Please enter the book title');
  } else {
    title.setCustomValidity('');
  };
  if (author.validity.valueMissing) {
    author.setCustomValidity('Please enter the author of the book');
  } else {
    author.setCustomValidity('');
  };
  if (pages.validity.valueMissing) {
    pages.setCustomValidity('Please enter the number of pages');
  } else if (pages.validity.rangeUnderflow) {
    pages.setCustomValidity('Please enter a number other than 0.');
  } else {
    pages.setCustomValidity('');
  };
  if (rating.validity.valueMissing) {
    rating.setCustomValidity('Please enter a rating.');
  } else if (rating.validity.rangeUnderflow || rating.validity.rangeOverflow) {
    rating.setCustomValidity('Please enter a number 1-5');
  } else {
    rating.setCustomValidity('');
  };
}