import Book from './Book.js';

const books = new Book();

const displayBooks = () => {
  const booksContainer = document.getElementById('books-list');
  books.refresh();
  const booksList = books.getList();
  booksContainer.innerHTML = '';
  for (let i = 0; i < booksList.length; i += 1) {
    const book = document.createElement('li');
    book.innerHTML = `<h3 class="book">"${booksList[i].title}" by ${booksList[i].author}</h3>
                      <button id="book${i}" type="button">Remove</button>`;
    booksContainer.appendChild(book);
    document.getElementById(`book${i}`).addEventListener('click', () => {
      books.remove(i);
      displayBooks();
    });
  }
};

export default displayBooks;
