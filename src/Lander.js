import { useEffect, useState, createContext } from "react";
import Cards from "./UIcomponents/Cards";
import Container from "react-bootstrap/Container";
import axios from "axios";
import MuiPagination from "./UIcomponents/MuiPagination";
export default function Lander() {
  let [allData, setAllData] = useState([]);
  let [error, setError] = useState(false);
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  function getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=6caab947140afec2fe6f804702380c15&page=${page}`
      )
      .then((res) => {
        setAllData(res.data.results);
        setTotalPage(Math.round(res.data.total_pages / 50));
      })
      .catch((err) => {
        setError(err);
      });
  }
  function handelPage(pageval) {
    setPage(pageval);
  }
  useEffect(() => {
    getData();
  }, [page]);

  if (error) return <>{error}</>;
  return (
    <Container>
      <div className="row wraper">
        {allData &&
          allData.map((trend) => (
            <Cards
              key={trend.id}
              id={trend.id}
              poster={trend.poster_path}
              title={trend.title || trend.name}
              mediatype={trend.media_type}
              date={trend.release_date || trend.fisrt_air_date}
              vote={trend.vote_average.toFixed(1)}
            />
            
          ))}
        {totalPage > 1 && (
          // <Pagination totalPage={totalPage} page={handelPage} />
          <MuiPagination setPage={setPage} setCount={totalPage}/>
        )}
      </div>
    </Container>
  );
}
