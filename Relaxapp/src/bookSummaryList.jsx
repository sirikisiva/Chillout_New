import React, { useState, useEffect } from "react";
import "./booksCards.css";

const BookSummaryList = ({ summary, imgList, bookName, author, onClose, genres }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSummaryIndex, setCurrentSummaryIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const displayNextSummaryPoint = () => {
    setCurrentSummaryIndex((prevIndex) =>
      Math.min(prevIndex + 1, summary.length - 1)
    );
  };

  const displayPreviousSummaryPoint = () => {
    setCurrentSummaryIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  if (!summary || !Array.isArray(summary) || summary.length === 0) {
    return (
      <div className="m-4 book-list">
        <div className="d-flex justify-content-center book-name">
          {bookName}
        </div>
        <div className="d-flex justify-content-center">
          No summary available
        </div>
      </div>
    );
  }

  const isPreviousButtonDisabled = currentSummaryIndex === 0;

  const isNextButtonDisabled = currentSummaryIndex === summary.length - 1;

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className="d-flex flex-row-reverse book-list">
      <div className="d-flex col-1 justify-content-end close-button">
        <button
          onClick={handleClose}
          type="button"
          class="btn-close"
          aria-label="Close"
        ></button>
      </div>
      <div className="d-flex col-11">
        <div className="col-7 p-4">
          <div className="book-name">{bookName}</div>
          <div className="selected-book-author">{author}</div>
           <div className="d-flex justify-content-center mt-4"><p className="genre">Genre :  {genres}</p></div>

          <div className="d-flex justify-content-between m-4">
            <div
              className="d-flex justify-content-center align-items-center"
              onClick={displayPreviousSummaryPoint}
            >
              <img
                className={`previou-move-img ${
                  isPreviousButtonDisabled ? "disable" : ""
                }`}
                src="./move.png"
              ></img>
            </div>
            <div>
              <div className="summary-point">
                {summary[currentSummaryIndex].summaryPoint}
              </div>
            </div>
            <div
              className="d-flex justify-content-end align-items-center"
              onClick={displayNextSummaryPoint}
            >
              <img
                className={`move-img ${isNextButtonDisabled ? "disable" : ""}`}
                src="./move.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="col-5 d-flex justify-content-center align-items-center">
          <img className="selected-book-img" src={imgList} alt={bookName} />
        </div>
      </div>
    </div>
  );
};

export default BookSummaryList;
