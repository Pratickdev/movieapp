
import Pagination from "@mui/material/Pagination";
export default function MuiPagination({ setPage, setCount = 10 }) {
  const handelPagecgange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
      }}
    >
      <Pagination
        onChange={(e) => handelPagecgange(e.target.textContent)}
        count={setCount}
        color="primary"
      />
    </div>
  );
}
