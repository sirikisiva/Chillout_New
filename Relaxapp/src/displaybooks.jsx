
import React, { useState } from "react";
import BooksCards from "./booksCard";

const DisplayBooks = () => {

  const booksList = [
    {
        id: 1,
        img: "bookOne.jpg",
        bookName: "The Alchemist",
        author : "Paulo Coelho",
        genre : "Mind Relaxing",
        summery :[
          
           {
             summeryId : 1, 
             summaryPoint : "The Alchemist by Paulo Coelho explores several profound themes and philosophical ideas"
            },
            { summeryId:2,
              summaryPoint : "Personal Legend : The concept of a Personal Legend is central to the book. It refers to an individuals unique and fulfilling destiny. Santiagos journey is about discovering and pursuing his Personal Legend, which is often aligned with one's passions and dreams."
            },
            {
              summeryId:3,
              summaryPoint : "Following Dreams: The novel encourages readers to pursue their dreams despite challenges and setbacks. Santiago's journey serves as an allegory for the importance of listening to one's heart and following the path that resonates with their true desires."
            } ,
            {
              summeryId:4,
              summaryPoint : "Language of the World:  Coelho introduces the idea of the Language of the World, suggesting that everything in the universe is interconnected and communicates in a universal language. It reflects the idea of understanding the signs and omens that guide one toward their destiny."
            },
            {
              summeryId:5,
              summaryPoint :"Alchemy and Transformation:  The Alchemist in the story teaches Santiago about the principles of alchemy, both in terms of transforming base metals into gold and the spiritual transformation of oneself. The novel explores the idea that the journey itself is as important as the destination."
            }
          
        ]
      },
      {
        id: 2,
        img: "bookTwo.jpg",
        bookName: "Meditations",
        author : "Marcus Aurelius",
        genre : "Mind Relaxing",
        summery :[
          
          {
            summeryId : 1, 
            summaryPoint : "The Alchemist by Paulo Coelho explores several profound themes and philosophical ideas"
           },
           { summeryId:2,
             summaryPoint : "Personal Legend : The concept of a Personal Legend is central to the book. It refers to an individuals unique and fulfilling destiny. Santiagos journey is about discovering and pursuing his Personal Legend, which is often aligned with one's passions and dreams."
           },
           {
             summeryId:3,
             summaryPoint : "Following Dreams: The novel encourages readers to pursue their dreams despite challenges and setbacks. Santiago's journey serves as an allegory for the importance of listening to one's heart and following the path that resonates with their true desires."
           } ,
           {
             summeryId:4,
             summaryPoint : "Language of the World:  Coelho introduces the idea of the Language of the World, suggesting that everything in the universe is interconnected and communicates in a universal language. It reflects the idea of understanding the signs and omens that guide one toward their destiny."
           },
           {
             summeryId:5,
             summaryPoint :"Alchemy and Transformation:  The Alchemist in the story teaches Santiago about the principles of alchemy, both in terms of transforming base metals into gold and the spiritual transformation of oneself. The novel explores the idea that the journey itself is as important as the destination."
           }
         
       ]
      },
      {
        id: 3,
        img: "bookThree.jpg",
        bookName: "The Power of Your Subconsious Mind",
        author : "Joseph Murphy",
        genre : "Mind Relaxing",
      },
      {
        id: 4,
        img: "bookFour.jpg",
        bookName: "Ikigai",
        author : "Héctor García and Francesc Miralles",
        genre : "Mind Relaxing",
      },
      {
        id: 5,
        img: "bookFive.jpg",
        bookName: "Big Magic",
        author : "Elizabeth Gilbert",
        genre : "Mind Relaxing",
      },
      {
        id: 6,
        img: "bookFour.jpg",
        bookName: "Ikigai",
        author : "Héctor García and Francesc Miralles",
        genre : "Mind Relaxing"
      },
      {
        id: 7,
        img: "bookTwo.jpg",
        bookName: "Meditations",
        author : "Marcus Aurelius",
        genre : "Mind Relaxing",
      },
      {
        id: 8,
        img: "bookThree.jpg",
        bookName: "The Power of Your Subconsious Mind",
        author : "Joseph Murphy",
        genre : "Mind Relaxing",
      },
]

  
  return (
    <div>
      <div className="d-flex">
        <div className="col-12 dive-relax">
          Dive into Relaxation with Our Collection of Books
        </div>
      </div>
      <div className="featuresBox">
        <BooksCards booksList = {booksList} />
      </div>
    </div>
  );
};

export default DisplayBooks;