/* eslint-disable no-unused-vars */
import Books from './Books.js';
import { DateTime } from './luxon.min.js';
import showBookList from './Display.js';

const book = new Books();
const button = document.getElementById('addbook');
button.addEventListener('click', () => {
  book.addBooks();
});

window.deleteBook = (i) => {
  // eslint-disable-next-line no-use-before-define
  book.booklist.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(book.booklist));
  window.location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
  showBookList(book);
});

const now = DateTime.now().toJSDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[now.getMonth()];
setInterval(() => {
  document.getElementById('datefield').innerHTML = now;
}, 1000);
