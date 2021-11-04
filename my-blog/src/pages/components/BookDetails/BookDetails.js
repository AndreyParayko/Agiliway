import React from "react";
import { getBookById } from "../../../api/books";
import BookDetailsItem from "../BookDetailsItem";
import Loader from "../../../components/Loader"
import "./styles.scss"
import { connect } from "react-redux";

class BookDetais extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getData(id)
  }
  render() {
    const { data, isLoading } = this.props;
    return (
      <div className="details-container">
        {!isLoading && (
            <BookDetailsItem
              title={data.title}
              description={data.description}
              id={data.id}
              key={data.id}
              pageCount={data.pageCount}
              publishDate={data.publishDate}
              excerpt={data.excerpt}
            />
        )}
        {isLoading && <Loader/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.book.data,
    isLoading: state.book.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => {
      dispatch(getBookById(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetais);

