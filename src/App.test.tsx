import React from "react";
import { getByTitle, render } from "@testing-library/react";
import App from "./App";

test("renders hello react", () => {
  const { getByText, getByTitle } = render(<App />);
  const linkElement = getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();
  const label = getByTitle("Current Count");
  expect(label).toBeInTheDocument();
  const counter = getByTitle("Current Count");
  expect(counter).toHaveTextContent("0");
});
