import React from "react";
import AppLogo from "./appLogo";
import BooksCards from "./booksCard";

const DisplayBooks = () => {

    const booksList = [
        {
            id: 1,
            img: "bookOne.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
          {
            id: 2,
            img: "bookTwo.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
          {
            id: 3,
            img: "bookThree.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
          {
            id: 4,
            img: "bookFour.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
          {
            id: 5,
            img: "bookFive.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
          {
            id: 6,
            img: "bookOne.jpg",
            bookName: "Think Like a Monk",
            author : "Jay Shetty"
          },
    ]


  return (
    <div>
      <div>
        {/* <AppLogo></AppLogo> */}
      </div>
      <div>
        <BooksCards booksList = {booksList}></BooksCards>
      </div>
    </div>
  );
};

export default DisplayBooks;
