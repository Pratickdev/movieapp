import { useState } from "react";
import "../Asset/css/pagination.css";
export default function Pagination(props) {
  let [page, setPage] = useState(1);
  function handelPage(pageval) {
    setPage(pageval);
    props.page(pageval);
  }
  return (
    <div className="pagination">
      <span
        onClick={() => {
          handelPage(page - 1);
        }}
        className={page > 1 ? "" : "paginationDisable"}
      >
        «
      </span>
      {[...Array(props.totalPage)].map((_, i) => (
        <span
          className={page === i + 1 ? "pagination_selected" : ""}
          onClick={() => {
            handelPage(i + 1);
          }} key={i + 1}
        >
          {i + 1}
        </span>
      ))}
      <span
        onClick={() => {
          handelPage(page + 1);
        }}
        className={page < props.totalPage ? "" : "paginationDisable"}
      >
        »
      </span>
    </div>
  );
}
