import { Descriptions, Button } from "antd";
import React from "react";
import StyledWrapper from "../Home/styled";
import { connect } from "react-redux";
import getMagazineByIdThunk from "../Magazines/thunks/MagazineThunks";
import Loader from "../../components/Loader";
import moment from "moment";
import PropTypes from "prop-types";
import * as selectors from "./selectors/magazine.selectors";

class MagazineDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getMagazineById(id);
  }

  render() {

    const { data, isLoading } = this.props;
    const date = moment(data.publishDate).format("LT dddd MMM Mo YYYY NNNN");
    console.log(data);
    return (
      <Loader isLoading={isLoading}>
        <StyledWrapper>
          <Descriptions
            title="Magazine Details"
            extra={<Button type="primary">Edit</Button>}
            bordered="true"
          >
            <Descriptions.Item label="Magazine Name">
              {data.name}
            </Descriptions.Item>
            <Descriptions.Item label="Author">{data.author}</Descriptions.Item>
            <Descriptions.Item label="Date posted">{date}</Descriptions.Item>
            <Descriptions.Item label="Description">
              {data.description}
            </Descriptions.Item>
          </Descriptions>
        </StyledWrapper>
      </Loader>
    );
  }
}

MagazineDetails.propTypes = {
  getMagazineById: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  id: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    data: selectors.selectData(state),
    isLoading: selectors.selectIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMagazineById: (id) => {
      dispatch(getMagazineByIdThunk(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MagazineDetails);
