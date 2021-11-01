import { useEffect, useState } from "react";
import { getBookById } from "../../../api/books";
import BookDetailsItem from "../BookDetailsItem";
import Loader from "../../../components/Loader";
import "./styles.scss";
import { useParams } from "react-router";

const BookDetailsFunctional = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getBookById(id)
      .then((response) => setData(response.data), setIsLoading(false))
      .catch((rej) => {
        console.log("Error in parsing module", rej, isError);
        setIsError(true);
      });
  }, [id, isError]);

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
