import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Asset/css/card.css"
export default function Cards(props) {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  return (
    <div className="col-md-3" style={{ padding: "10px" }} key={props.id}>
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={props.poster ? `${img_300}${props.poster}` : unavailable}
        />
        <Card.Body className="ellipsis-container">
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.mediatype}</Card.Subtitle>
          <Card.Text>{props.overview}</Card.Text>
          <Card.Text><b>IMDB Rating- {props.vote} Date- {props.date}</b></Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
