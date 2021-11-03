import React from "react";

import { cleanup, fireEvent, render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import App from "../index";

it("App", () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText("About"));

  expect(getByText("About")).toBeInTheDocument();
});
