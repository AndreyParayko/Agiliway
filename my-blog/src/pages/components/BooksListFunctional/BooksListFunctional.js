import { useEffect, useState } from "react";
import "./styles.scss";
import { getBooks } from "../../../api/books";
import Pagination from "../Pagination/Pagination";
import BooksItem from "../BooksItem/BooksItem";
import Loader from "../../../components/Loader";
import { Row, Col, CardDeck } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const POSTS_PER_PAGE = 18;

const BooksListFunctional = () => {
  const { data, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const indexOfLastPost = currentPageNumber * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="list-container">
      {!isLoading && (
        <CardDeck>
          <Row>
            {currentPosts.map((item, index) => (
              <BooksItem
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

export default BooksListFunctional;
