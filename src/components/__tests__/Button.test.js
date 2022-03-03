import React from "react";
import { shallow } from "enzyme";
import Button from "../Button.js";

describe("Button", () => {

  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashing", () => {
    // Moved to beforeEach()
  });

  it("renders a button", () => {
    const buttons = mountedButton.find('button');
    expect(buttons.length).toBe(1);
  })

});

