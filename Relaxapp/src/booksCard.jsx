import React, { useState, useRef, useEffect } from "react";
import "./booksCards.css";
import BookSummaryList from "./bookSummaryList";

const BooksCards = ({ booksList }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const summaryListRef = useRef(null);

  useEffect(() => {
    if (selectedBook && summaryListRef.current) {
      summaryListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBook]);



  const onSelectedBook = (index) =>{
    setSelectedBook(booksList[index]);
  
  }

  const handleCloseSummaryList = () => {
    setSelectedBook(null);
  };


  return (
    <div className="cards-container-wrapper">
      <div
        className={`books-container ${isHovered ? "stop-movement" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {booksList.map((books, index) => (
          <div
            key={index}
            onClick={ () =>onSelectedBook(index) }
            className={`card-box ${isHovered ? "stop-movement" : ""}`}
          >
            <div className="img-card-div">
              <img
                className="book-img-width"
                src={books.img}
                alt={books.bookName}
              />
            </div>
            <div className="book-card-name">{books.bookName}</div>
          </div>
        ))}
      </div>

      {selectedBook && (
          <div ref={summaryListRef}>
          <BookSummaryList
            summary={selectedBook.summery}
            pages = {selectedBook.page}
            imgList={selectedBook.img}
            bookName={selectedBook.bookName}
            author={selectedBook.author}
            genres={selectedBook.genre}
            onClose = {handleCloseSummaryList}
          />
        </div>
      )}

    </div>
  );
};

export default BooksCards;
