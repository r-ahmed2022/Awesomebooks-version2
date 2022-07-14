import Books from './modules/Books.js';
import { DateTime } from './modules/luxon.min.js';
import showBookList from './modules/Display.js';

const book = new Books();
const button = document.getElementById('addbook');
button.addEventListener('click', () => {
  book.addBooks();
});

window.deleteBook = (i) => {
  book.booklist.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(book.booklist));
  window.location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
  showBookList(book);
});

const now = DateTime.now().toJSDate();
setInterval(() => {
  document.getElementById('datefield').innerHTML = now;
}, 1000);
