import React from "react";
import "./styles.scss";
import { getBooks } from "../../../api/books";
import Pagination from "../Pagination/Pagination";
import BookItem from "../BookItem/BookItem";
import Loader from "../../../components/Loader";
import { Row, Col, CardDeck } from "reactstrap";

const POSTS_PER_PAGE = 18;

class BookList extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isError: false,
    currentPageNumber: 1,
  };

  componentDidMount() {
    getBooks()
      .then((response) =>
        this.setState(
          {
            data: response.data,
            isLoading: false,
          },
          () => {
            console.log(this.state.data);
          }
        )
      )
      .catch((rej) => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }
  paginationHandler = (number) => {
    this.setState({
      currentPageNumber: number,
    });
  };

  render() {
    const { isLoading, data } = this.state;
    const indexOfLastPost = this.state.currentPageNumber * POSTS_PER_PAGE;
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
                    paginationHandler={this.paginationHandler}
                    pageNumber={this.state.currentPageNumber}
                  />
                </Col>
              </Row>
            </div>
          </CardDeck>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default BookList;
