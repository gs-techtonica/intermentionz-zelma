import React from "react";

import { render } from "@testing-library/react";

import Home from "../App/Home";

it("Should display Loading text on initial render", () => {
  const { getByText } = render(<Home />);

  expect(getByText("Loading ...")).toBeInTheDocument();
});
