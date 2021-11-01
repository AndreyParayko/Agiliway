import React from "react";
import { getBookById } from "../../../api/books";
import BookDetailsItem from "../BookDetailsItem";
import Loader from "../../../components/Loader"
import "./styles.scss"

class BookDetais extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isError: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getBookById(id)
      .then(response =>
        this.setState({
          data: response.data,
          isLoading: false
        })
      )
      .catch(rej => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }
  render() {
    const { data, isLoading } = this.state;
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
        {isLoading && setTimeout(null,2000) && <Loader/>}
      </div>
    );
  }
}

export default BookDetais;
