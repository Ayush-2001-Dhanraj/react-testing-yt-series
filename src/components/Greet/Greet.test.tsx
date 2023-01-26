import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders with Hello", () => {
  render(<Greet />);
  const greetEl = screen.getByTestId("greet-msg");
  expect(greetEl).toBeInTheDocument();
  expect(greetEl.textContent).toBe("Hello");
});

test("Greet renders with name", () => {
  render(<Greet name="Ayush" />);
  const greetEl = screen.getByTestId("greet-msg");
  expect(greetEl).toBeInTheDocument();
  expect(greetEl.textContent).toBe("Hello Ayush");
});
