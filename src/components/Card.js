import { Card, Button } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import React, { useEffect } from "react";

const CardElement = ({ title, description }) => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px280" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardElement;
