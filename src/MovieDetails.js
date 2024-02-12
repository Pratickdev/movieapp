import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Head from "./Head";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  let param = useParams();
  let [data, setData] = useState([]);
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${param.type}/${param.id}?api_key=6caab947140afec2fe6f804702380c15&language=en-US`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App bodycolor">
      <Head />
      <Container>
        <div className="container">
          <div className="card-image" style={{ padding: "9px" }}>
            <img
              src={
                data.poster_path ? `${img_300}${data.poster_path}` : unavailable
              }
              alt={data.original_title}
              style={{ borderRadius: "11px" }}
            />
          </div>
          <div className="card-right">
            <h5 className="item-title">{data.original_title}</h5>
            <p className="item-price">
              <b>$500.00</b>
            </p>
            <p className="item-desc">{data.overview}</p>
            <div>
              <p className="item-size-text">Rating : {data.vote_average}</p>
              <p className="item-size-star">
                Release Date:{" "}
                {data.release_date ? data.release_date : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
