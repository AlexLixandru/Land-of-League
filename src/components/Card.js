import { Card, Button } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import React, { useEffect } from "react";

const CardElement = ({ title, description, image, buttonText }) => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ overflow: "hidden" }} v>
        <Card.Img className="image-hover-zoom" variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ height: "10rem" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardElement;
