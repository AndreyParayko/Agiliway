import { Descriptions, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import StyledWrapper from '../Home/styled';
// import getMagazineByIdThunk from '../Magazines/thunks/MagazineThunks';
import Loader from '../../components/Loader';
import * as selectors from './selectors/magazine.selectors';
import {getMagazineStartAction} from '../Magazines/actions/actions';

class MagazineDetails extends React.Component {
  componentDidMount() {
    const {
      getMagazineById,
      match: { params },
    } = this.props;
    getMagazineById(params.id);
  }

  render() {
    const { data, isLoading } = this.props;
    const date = moment(data.publishDate).format('LT dddd MMM Mo YYYY NNNN');
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
  data: PropTypes.shape({
    name: PropTypes.string,
    uuid: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    publishDate: PropTypes.string,
  }),
  id: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
MagazineDetails.defaultProps = {
  getMagazineById: () => {},
  isLoading: true,
  data: {},
  id: '',
  match: {},
};

const mapStateToProps = (state) => ({
  data: selectors.selectData(state),
  isLoading: selectors.selectIsLoading(state),
});

const mapDispatchToProps = {
  // getMagazineById: getMagazineByIdThunk,
  getMagazineById: getMagazineStartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MagazineDetails);
