
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Asset/css/card.css";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CountContext } from "../Home";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../redux/CartSlice";
import { Link } from "react-router-dom";
export default function Cards(props) {
  const { count, setCount, selected, setSelected } = useContext(CountContext);
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.Cart.value);
  function handelclick(data, clickedId) {
    setCount(count + 1);
    let cartArry = [];
    cartArry = [...catData, data];
    dispatch(cartData(cartArry));
    let clickedIndexArry = [];
    clickedIndexArry = [...selected, clickedId];
    setSelected(clickedIndexArry);
  }

  return (
    <div className="col-md-3 col-sm-12" style={{ padding: "10px" }} key={props.id}>
      
      <Card className="cardbody" style={{ width: "16rem" }}>
        <Badge className="badge" bg={props.vote > 7 ? "success" : "warning"}>
          {props.vote}
        </Badge>
        <Link to={`/details/${props.id}/${props.mediatype?props.mediatype:'tv'}`}>
        <Card.Img
          variant="top"
          src={props.poster ? `${img_300}${props.poster}` : unavailable}
        /></Link>
        <Card.Body>
          <Card.Title className="ellipsis-container">{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.mediatype === "movie" ? "Movie" : "Wed Series"}
            {selected.includes(props.id) ? (
              <Button
                variant="danger"
                style={{ marginLeft: "67px", marginTop: "-27px" }}
              >
                Added To Cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  let dta = {
                    id: props.id,
                    name: props.title,
                    pic: props.poster
                      ? `${img_300}${props.poster}`
                      : unavailable,
                  };

                  handelclick(dta, props.id);
                }}
                style={{ marginLeft: "67px", marginTop: "-3px" }}
              >
                Add To Cart
              </Button>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
