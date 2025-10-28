import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Coffee } from "lucide-react";

export default function ButtonPage() {
  const [isLoading, setLoading] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        size="medium"
        onClick={() => setLoading(!isLoading)}
        loading={isLoading}
        className=""
        type="submit"
      >
        Container medim
      </Button>

      <Button variant="contained" size="medium" disabled>
        Container medim
      </Button>

      <Button
        size="medium"
        variant="outlined"
        endIcon={<Coffee size={20} />}
      >
        End Icon
      </Button>
    </div>
  );
}
