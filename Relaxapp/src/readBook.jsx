import React from "react";
import FlipPage from "react-pageflip";
import "./booksCards.css";

const ReadBook = ({ onClose, pages, img }) => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          onClick={onClose}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>

      <div className="d-flex justify-content-center">
        <FlipPage
          width={400}
          height={450}
          showCover={true}
          className="flip-page"
        >
         {pages.map((page, index) => (
            <div key={index} className="page">
              {index === 0 ? (
                <img src={img} alt="Cover" className="cover-image" />
              ) : (
                <div className="page-content">{page.content}</div>
              )}
              <div className="page-number">{page.pagenumber}</div>
            </div>
          ))}
        </FlipPage>
      </div>
    </div>
  );
};

export default ReadBook;
