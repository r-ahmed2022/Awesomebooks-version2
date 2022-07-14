/* eslint-disable no-restricted-globals */
class Books {
    booklist = [];

    addBooks() {
      const name = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.booklist.push({ title: name, author });
      localStorage.setItem('books', JSON.stringify(this.booklist));
      history.back();
      location.reload();
    }
}

export default Books;