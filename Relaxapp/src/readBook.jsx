import React, {useState} from "react";
import FlipPage from "react-pageflip";
import { useSpeechSynthesis} from "react-speech-kit"
import "./booksCards.css";

const ReadBook = ({ onClose, pages, img }) => {

  const { speak, cancel } = useSpeechSynthesis();
   
  const readAloud = (content) => {
    speak({ text: content });
    console.log(content);
  };

  const stopReading = () => {
    cancel ();
  }


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
            <div>
               <div key={index} className="page">
              {index === 0 ? (
                <img src={img} alt="Cover" className="cover-image" />
              ) : (
                <div className="page-content">{page.content}</div>
              )}
              <div className="page-number">{page.pagenumber}</div>
            </div>
             <div className="d-flex justify-content-center m-2">
             <div className="ml-2 readLoud">
              { index === 0 ? ' ' :   <button className="readLoud-btn" onClick={() => readAloud(page.content)}>Read</button>}
             </div>
             <div className="mr-2 pause">
              { index === 0 ? ' ' :   <button  className="pause-btn" onClick={() => stopReading()}>Pause</button>}
             </div>
             </div>
            </div>
          ))}
        </FlipPage>
      </div>
    </div>
  );
};

export default ReadBook;
