import {
  Table, Input, Button, Space,
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMagazinesThunk } from '../Magazines/thunks/MagazinesThunks';
import { StyledWrapper } from '../Magazines/styled';
import { selectMagazinesData } from '../Magazines/selectors/magazines.selectors';

class Statistic extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  componentDidMount() {
    const { getMagazinesAction } = this.props;
    getMagazinesAction();
  }

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          key="input"
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            key="search"
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            key="reset"
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            key="filter"
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined key="outlined" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
      : ''),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    // eslint-disable-next-line react/destructuring-assignment
    render: (text) => (this.state.searchedColumn === dataIndex ? (
      <Highlighter
        key="highlighter"
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        // eslint-disable-next-line react/destructuring-assignment
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { data } = this.props;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
        ...this.getColumnSearchProps('name'),
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        width: '20%',
        ...this.getColumnSearchProps('author'),
        sorter: (a, b) => a.author.length - b.author.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        ...this.getColumnSearchProps('description'),
        sorter: (a, b) => a.description.length - b.description.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Publish date',
        dataIndex: 'createDate',
        width: '20%',
        key: 'createDate',
        ...this.getColumnSearchProps('createDate'),
      },
    ];
    return (
      <StyledWrapper>
        <Table
          // eslint-disable-next-line no-shadow
          rowKey={(data) => data.uuid}
          columns={columns}
          pagination={{ position: ['bottomCenter'] }}
          dataSource={data}
        />
      </StyledWrapper>
    );
  }
}

Statistic.propTypes = {
  getMagazinesAction: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    uuid: PropTypes.string,
  })),
};
Statistic.defaultProps = {
  getMagazinesAction: () => {},
  data: {},
};

const mapDispatchToProps = (dispatch) => ({
  getMagazinesAction: () => {
    dispatch(getMagazinesThunk());
  },
});
const mapStateToProps = (state) => ({
  data: selectMagazinesData(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
