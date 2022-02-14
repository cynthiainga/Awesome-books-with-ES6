class Book {
  constructor() {
    if (localStorage.getItem("books")) {
      this.list = JSON.parse(localStorage.getItem("books"));
    } else {
      this.list = [];
    }
  }

  populateStorage() {
    localStorage.setItem("books", JSON.stringify(this.list));
  }

  add(bookTitle, bookAuthor) {
    const book = {
      title: bookTitle,
      author: bookAuthor,
    };
    this.list.push(book);
    this.populateStorage();
  }

  remove(index) {
    this.list.splice(index, 1);
    this.populateStorage();
  }

  search(title, author) {
    const book = this.list.filter(
      (book) =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.author.toLowerCase() === author.toLowerCase()
    );
    if (book.length > 0) return true;
    return false;
  }

  refresh() {
    if (localStorage.getItem("books")) {
      this.list = JSON.parse(localStorage.getItem("books"));
    }
  }

  getList() {
    return this.list;
  }
}

const books = new Book();
