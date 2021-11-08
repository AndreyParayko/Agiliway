import { useEffect, useState } from "react";
import { getBookById } from "../../../api/books";
import BookDetailsItem from "../BookDetailsItem";
import Loader from "../../../components/Loader";
import "./styles.scss";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const BookDetailsFunctional = () => {
  const { data, isLoading } = useSelector((state) => state.book);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      {!isLoading && (
        <BookDetailsItem
          title={data.title}
          description={data.description}
          id={data.id}
          pageCount={data.pageCount}
          publishDate={data.publishDate}
          excerpt={data.excerpt}
        />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default BookDetailsFunctional;
