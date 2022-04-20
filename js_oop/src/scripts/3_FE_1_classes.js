
class Book {
  //Encapsulation 
  constructor(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;

  }

  getSummary() {

    // console.log(this)
    return `${this.title} was written by ${this.author} on ${this.year}`

  }

  static getTopBookStore() {

    return "Sapna Bookstore";
  }
}

// console.log(this);

const book1 = new Book("Book 1 ", "J Doe", "2011");;
console.log(book1.getSummary());
console.log(Book.getTopBookStore());
console.log(book1.author);
book1.author = "John";
console.log(book1.author);
