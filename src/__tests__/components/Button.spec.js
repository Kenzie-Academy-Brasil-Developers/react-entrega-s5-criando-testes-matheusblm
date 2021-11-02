import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Input component", () => {
  test("should be able to render the input", () => {
    render(<Search />);
    expect(screen.getByText("Buscar pelo CEP")).toBeTruthy();
  });
});
