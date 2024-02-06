import React from "react";
import "./booksCards.css";

const BooksCards = ({ booksList }) => {
  return (
    <div className="books-container">
      {booksList.map((books, index) => (
        <div className="book-card">
          <div key={index}>
            <div>
              <img className="book-img" src={books.img}></img>
            </div>
            <div>{books.bookName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCards;
