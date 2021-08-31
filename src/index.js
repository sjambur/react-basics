import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// setup vars
const books = [
  {
    author: "Bessels van der Kolk M.D.",
    title:
      "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
    img: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Brianna Wiest",
    title: "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
    img: "https://images-na.ssl-images-amazon.com/images/I/615NRk7ETOL._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Connor Boyack",
    title: "How to Not Suck at Life: 89 Tips for Teens",
    img: "https://images-na.ssl-images-amazon.com/images/I/61-btoaGcdL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
