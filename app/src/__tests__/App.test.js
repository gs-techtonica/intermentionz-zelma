import React from "react";

import { cleanup, fireEvent, render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import Home from "../App/Home";

it("App", () => {
  const { getByText } = render(<Home />);

  // fireEvent.click(getByText("About"));

  expect(getByText("Loading ...")).toBeInTheDocument();
});
