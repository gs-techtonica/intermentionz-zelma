import React from "react";

import { render } from "@testing-library/react";

import Home from "../App/Home";

it("Should display Loading text on initial render", () => {
  const { getByText } = render(<Home />);

  expect(getByText("Loading ...")).toBeInTheDocument();
});

// the reason it's so slow
// 'well, I know that when I'm trying to test something I need to set the state of my system to what I want to text
// how do I change the test to test when the page is not loading
// when you're rendering the home page you could pass
// you want to display a loading test when it's loading
// you want to pass a parameter to the function and then you can check if it's true or false - that way you can test something depending on whether the state of the function is true or false

// const { getByText } = render(<Home (isLoading = false) />);

// software engineer traits
//
// I'm successful if I'm learning and I'm growing, b/c that's the stage I'm in in my career
// and if my project is being used, then I'll consider it a success
