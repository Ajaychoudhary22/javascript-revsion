// ham ek libaray managament kaa micro project bana rhe hai


// ham ek libaray managament kaa micro project bana rhe hai


class libaray {
    constructor(){
        this.books = [];

    }
    addBooks(books){
        this.books.push(...books);
    }
    addlist(){
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. name: ${book.name}, Author: ${book.author}`);
        });
    }
}

    class book {
        constructor(name ,isbn ,author,price, status){ 
            this.name = name;
            this.isbn = isbn;
            this.author = author;
            this.price = price;
            this.status = false;
            
        }
        bookinfo(){
            return `${this.name} by ${this.author}, ISBN: ${this.isbn}, Price: $${this.price}, Read Status: ${this.status ? 'Read' : 'Not Read'}`;
        }
        readstatus(){
            this.status = !this.status;
        
        
        }

    }

    

let bhopallibaray = new libaray();
    let book1 = new book("JavaScript Basics", "1234567890", "John Doe", 29.99, false);
    let book2 = new book("HTML & CSS", "0987654321", "Jane Smith", 24.99, false);
    let book3 = new book("Web Development", "1122334455", "Alice Johnson", 39.99, false);
    bhopallibaray.addBooks([book1, book2, book3]);
    bhopallibaray.addlist();
    book1.readstatus();
    console.log(book1.bookinfo());