import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "../components/Footer";

test("displays the footer text", () => {
  render(<Footer />);
  expect(screen.queryByText("Built with ❤️ by Adrian")).toBeInTheDocument();
});
