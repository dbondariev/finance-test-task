import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import test from "jest";
import expect from "jest";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
