import React,{useState} from "react";
import './diary.css';

const DisplayDiary = ({ onClose }) => {
    const [memory, setMemory] = useState(""); 

    const handleMemoryChange = (event) => {
      setMemory(event.target.value);
    };
  return (
    <div className="m-4">
      <div className="d-flex justify-content-end">
        <button
          onClick={onClose}
          type="button"
          className="btn-close filterBtn"
          aria-label="Close"
          title="close the diary"
        ></button>
      </div>
      <div className="d-flex justify-content-center text">
           Put your memories here!
      </div>
      <div className="d-flex justify-content-center text">
        <textarea
          value={memory}
          onChange={handleMemoryChange}
          className="memory-input"
          placeholder="Write your memories here..."
        ></textarea>
      </div>
    </div>
  );
};

export default DisplayDiary;
