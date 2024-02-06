import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { useContext } from "react";
import { CountContext } from "./Home";
export default function Geners(props) {
  const [gener, setGener] = useState([]);
  // const [selectedGener, setSelectedGener] = useState([]);
  const {  selectedGener, setSelectedGener } = useContext(CountContext);
  function fetchGeners() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${props.type}/list?api_key=6caab947140afec2fe6f804702380c15&language=en`
      )
      .then((res) => {
        setGener(res.data.genres);
      })
      .catch((err) => {});
  }
  const handleClick = (gnr) => {
    setSelectedGener([...selectedGener, gnr]);
    setGener(gener.filter((g)=>(g.id !== gnr.id)));
    props.setPage(1);

  };
  const handleDelete = (gnr) => {
    setGener([...gener,gnr]);
    setSelectedGener(selectedGener.filter((g)=>(g.id!==gnr.id)))
    props.setPage(1);
  };
  useState(() => {
    fetchGeners();
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGener &&
        selectedGener.map((slgnr) => (
          <Chip
            label={slgnr.name}
            key={slgnr.id}
            color="success"
            style={{ margin: 2 }}
            onDelete={()=>handleDelete(slgnr)}
          />
        ))}

      {gener &&
        gener.map((gnr) => (
          <Chip
            label={gnr.name}
            key={gnr.id}
            color="primary"
            style={{ margin: 2 }}
            onClick={() => handleClick(gnr)}
          />
        ))}
    </div>
  );
}
