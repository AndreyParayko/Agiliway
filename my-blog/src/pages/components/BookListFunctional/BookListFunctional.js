import { useEffect, useState } from "react";
import "./styles.scss";
import { getBooks } from "../../../api/books";
import Pagination from "../Pagination/Pagination";
import BookItem from "../BookItem/BookItem";
import Loader from "../../../components/Loader";
import { Row, Col, CardDeck } from "reactstrap";

const POSTS_PER_PAGE = 18;

const BookListFunctional = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    getBooks()
      .then((response) => setData(response.data), setIsLoading(false))
      .catch(
        (rej) => console.log("Error in parsing module", rej, isError),
        setIsError(true)
      );
  }, [isError]);

  const indexOfLastPost = currentPageNumber * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="list-container">
      {!isLoading && (
        <CardDeck>
          <Row>
            {currentPosts.map((item, index) => (
              <BookItem
                title={item.title}
                description={item.description}
                id={item.id}
                key={index}
              />
            ))}
          </Row>
          <div className="pagination-container">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Pagination
                  dataPerPage={POSTS_PER_PAGE}
                  totalDataCount={data.length}
                  paginationHandler={setCurrentPageNumber}
                  pageNumber={currentPageNumber}
                />
              </Col>
            </Row>
          </div>
        </CardDeck>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default BookListFunctional;
