import { render, screen, fireEvent } from "../utils/test-utils"
import { Button } from "../components/Button/Button"

describe("Button", () => {
  it("calling method when click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press me</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("button when loading true", () => {
    render(<Button lable="Press me" loading={true}></Button>)
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  
});
