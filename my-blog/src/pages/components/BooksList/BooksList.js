import React from "react";
import "./styles.scss";
import { getBooks } from "../../../api/books";
import Pagination from "../Pagination/Pagination";
import BooksItem from "../BooksItem/BooksItem";
import Loader from "../../../components/Loader";
import { Row, Col, CardDeck } from "reactstrap";
import { connect } from "react-redux";

const POSTS_PER_PAGE = 18;

class BooksList extends React.Component {
  state = {
    currentPageNumber: 1,
  };

  componentDidMount() {
    this.props.getData()
  }
  paginationHandler = (number) => {
    this.setState({
      currentPageNumber: number,
    });
  };

  render() {
    const { isLoading, data } = this.props;
    const indexOfLastPost = this.state.currentPageNumber * POSTS_PER_PAGE;
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
const mapStateToProps = (state) => {
  return {
    data: state.books.data,
    isLoading: state.books.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getBooks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

