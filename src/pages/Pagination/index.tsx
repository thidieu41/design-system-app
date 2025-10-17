import Pagination from "../../components/Pagination/Pagination";

export default function PaginationComp() {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Pagination Component
      </h3>
      <Pagination count={10} hideNextButton variant="outlined"/>
    </div>
  );
}
