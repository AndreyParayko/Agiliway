import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Card, Col, Menu, Dropdown,
} from 'antd';
import { EllipsisOutlined, FileMarkdownOutlined } from '@ant-design/icons';
import { FlexButton, FlexCenter } from '../styled';
import magazine from '../../../assets/images/magazine.jpg';

const { Meta } = Card;
const MagazineItem = ({
  name,
  description,
  id,
  openEditModal,
  getData,
  openDeleteModal,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <FlexButton
          onClick={() => {
            openEditModal();
            getData(id);
          }}
        >
          Edit
        </FlexButton>
      </Menu.Item>
      <Menu.Item key="1">
        <FlexButton
          onClick={() => {
            openDeleteModal(id, name);
          }}
        >
          Delete
        </FlexButton>
      </Menu.Item>
    </Menu>
  );

  return (
    <Col span={8}>
      <FlexCenter>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={magazine} />}
          actions={[
            <NavLink to={`/details/${id}`}>
              <FileMarkdownOutlined style={{ fontSize: '20px' }} key="open" />
              {' '}
              OPEN
            </NavLink>,
            <Dropdown overlay={menu} trigger={['click']} key="drop">
              <EllipsisOutlined />
            </Dropdown>,
          ]}
        >
          <Meta title={name} description={description} />
        </Card>
      </FlexCenter>
    </Col>
  );
};

MagazineItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  openEditModal: PropTypes.func,
  getData: PropTypes.func,
  openDeleteModal: PropTypes.func,
};

MagazineItem.defaultProps = {
  openEditModal: () => {},
  name: '',
  openDeleteModal: () => {},
  description: '',
  id: '',
  getData: () => {},
};

export default MagazineItem;
