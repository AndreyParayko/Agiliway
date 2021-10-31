import React from "react";
import { Jumbotron } from "reactstrap";
import "./styles.scss"
const BookDetailsItem = ({
  title,
  id,
  description,
  pageCount,
  publishDate,
  excerpt,
}) => (
  <Jumbotron>
    <h1 key={id} className="display-1 text-center">
      Book Title: {title}
    </h1>
    <p className="display-5 text-center" key={id}>
      PublishDate: {publishDate}
    </p>
    <p className="display-5 text-center" key={id}>
      Number of pages: {pageCount}
    </p>
    <hr className="my-2" />
    <p className="lead text-center" key={id}>
      Description: {description}
    </p>

    <p className="display-8 text-center" key={id}>
      {excerpt}
    </p>
  </Jumbotron>

);

export default BookDetailsItem;
