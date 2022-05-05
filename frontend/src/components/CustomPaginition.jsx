import { Pagination } from "@mui/material";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        count={numberOfPages}
        onChange={(e) => handlePageChange(parseInt(e.target.textContent, 10))}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
};

export default CustomPagination;
