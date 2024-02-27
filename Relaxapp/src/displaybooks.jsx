import React, { useState } from "react";
import BooksCards from "./booksCard";
import "./books.css";
import "./booksCards.css";
import { booksList } from "./book";

const DisplayBooks = () => {
  const [searchBook, setSearchBokk] = useState("");
  const [filterBook, setFilterBook] = useState([]);

  const searchBookForRelaxation = (e) => {
    const books = e.target.value.toLowerCase();
    setSearchBokk(books);
    const filtered = booksList.filter(
      (book) =>
        book.bookName.toLowerCase().includes(books) ||
        book.author.toLowerCase().includes(books) ||
        book.genre.toLowerCase().includes(books)
    );
    setFilterBook(filtered);
  };

  return (
    <div>
      <div className="d-flex mb-4 justify-content-center">
        <div className="mt-4 search-width">
          <input
            placeholder="Search here for more books!"
            type="search"
            className="search-bar"
            value={searchBook}
            onChange={searchBookForRelaxation}
          ></input>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-12 dive-relax">
          Dive into Relaxation with Our Collection of Books
        </div>
      </div>
      <div className="featuresBox">
        <BooksCards booksList={searchBook.length ? filterBook : booksList} />
      </div>
    </div>
  );
};

export default DisplayBooks;
