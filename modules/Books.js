 class Books {
    booklist = [];

     addBooks() {
        const name = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        this.booklist.push({ title: name, author: author });
        localStorage.setItem('books', JSON.stringify(this.booklist));
        history.back();
        location.reload();
    }

    deleteBook(i) {
        // eslint-disable-next-line no-use-before-define
        this.booklist.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(this.booklist));
        location.reload();
   
        
}
 }

export const book = new Books();