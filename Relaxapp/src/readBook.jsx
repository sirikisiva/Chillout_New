import React, { useEffect } from "react";
import "./booksCards.css";

const ReadBook = ({ onClose, pages }) => {
  // useEffect(() => {  
  //   $("#flipbook").turn({
  //     width: 400,
  //     height: 300,
  //     display: "double",
  //     autoCenter: true,
  //     acceleration: true,
  //   });
  
  //   return () => {
  //     $("#flipbook").turn("destroy");
  //   };
  // }, []);
  

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

      <div className="d-flex justify-content-center" id="flipbook">
        {pages.map((page, index) => (
          <div key={index} className="page">
            {page.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadBook;
