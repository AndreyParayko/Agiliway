import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { Card, Button, CardTitle, CardText, CardBody, Col } from "reactstrap";

const BookItem = ({ title, id, description }) => (
  <Col sm="2" md="3" lg="4">
    <Card>
      <CardBody>
        <CardTitle tag="h5" >
          Book Title: {title}
        </CardTitle>
        <CardText >Description : {description.slice(0,125)}...</CardText>
        <Button color="primary">
          <NavLink className="text-white" to={`/book-details/${id}`}>
            View more
          </NavLink>
        </Button>
      </CardBody>
    </Card>
  </Col>
);

export default BookItem;
