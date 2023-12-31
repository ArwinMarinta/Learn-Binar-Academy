import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Student = ({ name, className }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{className}</Card.Text>
        <Button>Connect</Button>
      </Card.Body>
    </Card>
  );
};

Student.propTypes = {
  class: PropTypes.string,
  className: PropTypes.string,
};

export default Student;
