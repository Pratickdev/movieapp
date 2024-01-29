import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Asset/css/card.css";
import Badge from "react-bootstrap/Badge";
export default function Cards(props) {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  return (
    <div className="col-md-3" style={{ padding: "10px" }} key={props.id}>
      <Card className="cardbody" style={{ width: "16rem" }}>
        <Badge className="badge" bg={props.vote > 7 ? "success" : "warning"}>
          {props.vote}
        </Badge>
        <Card.Img
          variant="top"
          src={props.poster ? `${img_300}${props.poster}` : unavailable}
        />
        <Card.Body>
          <Card.Title className="ellipsis-container">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.mediatype ==='movie' ? 'Movie' : 'Wed Series'}
          </Card.Subtitle>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
