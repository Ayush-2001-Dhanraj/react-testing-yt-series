import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders with Hello", () => {
    render(<Greet />);
    const greetEl = screen.getByTestId("greet-msg");
    expect(greetEl).toBeInTheDocument();
    expect(greetEl.textContent).toBe("Hello");
  });

  test("renders with name", () => {
    render(<Greet name="Ayush" />);
    const greetEl = screen.getByTestId("greet-msg");
    expect(greetEl).toBeInTheDocument();
    expect(greetEl.textContent).toBe("Hello Ayush");
  });
});
