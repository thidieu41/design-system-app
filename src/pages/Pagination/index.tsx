import { CircleArrowLeft, Scale } from "lucide-react";
import Pagination from "../../components/Pagination/Pagination";
import { PaginationItem } from "../../components/Pagination/PaginationItem";

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
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        shape="circular"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              last: <CircleArrowLeft style={{ transform: "rotate(180deg)" }} />,
              first: <CircleArrowLeft />,
            }}
            slotProps={{
              first: {
                sx: { color: "red", height: 100, transform: "scale(1.4)" },
              },
              last: { style: { color: "green", transform: "scale(1.4)" } },
            }}
          />
        )}
      />
    </div>
  );
}
