import { DateTime } from './luxon.js';
import Book from './modules/Book.js';
import displayBooks from './modules/displayBooks.js';

const books = new Book();

displayBooks();

const button = document.getElementById('add');

button.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const message = document.getElementById('error-message');
  message.textContent = '';
  if (title.value === '' || author.value === '') {
    message.textContent = 'Please fill both the title and the author before adding.';
  } else if (!books.search(title.value, author.value)) {
    books.add(title.value, author.value);
    displayBooks();
    title.value = '';
    author.value = '';
    message.textContent = 'The book has been added successfully.';
    message.style.color = 'green';
  } else {
    const message = document.getElementById('error-message');
    message.textContent = 'The book has already been added.';
  }
  setInterval(() => {
    message.textContent = ' ';
  }, 1000);
});

const booksSection = document.getElementById('books');
const addSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');
document.getElementById('menu-list').addEventListener('click', () => {
  booksSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});
document.getElementById('menu-add-book').addEventListener('click', () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
});
document.getElementById('menu-contact').addEventListener('click', () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

const dateContainer = document.getElementById('date-time');
function myTimer() {
  const today = DateTime.now();
  const time = today.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateContainer.textContent = time;
}
myTimer();
setInterval(() => {
  myTimer();
}, 1000);
