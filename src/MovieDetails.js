import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Head from "./Head";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  let param = useParams();
  console.log(param);
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
                <div className="card-image">
                  <img
                    src={data.backdrop_path ? `${img_300}${data.backdrop_path}` : unavailable}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="card-right">
                  <h5 className="item-title">title</h5>
                  <p className="item-price">
                    <b>$5.00</b>
                  </p>
                  <p className="item-desc">desc</p>
                  <br></br>
                  <div>
                    <p className="item-size-text">SIZE</p>
                    <p className="item-size-star">*</p>
                    <p className="item-size-selected"></p>
                  </div>
                </div>
        </div>
      </Container>
    </div>
  );
}
