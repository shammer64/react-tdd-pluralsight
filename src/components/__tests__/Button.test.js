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
  });

  it("calls a function when pressed", () => {
    const mockCallback = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallback} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});

describe("Button with Location provided", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1",
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it("displays name on button", () => {
    const locName = mountedButton.find(".location-button");
    expect(locName.text()).toEqual("Location1");
  });
});

// describe("Button with no Location provided", () => {
//   let mountedButton;
//   let props;

//   beforeEach(() => {
//     props = {
//       location: undefined,
//     };
//     mountedButton = shallow(<Button {...props} />);
//   });

//   it("displays default on button", () => {
//     const locName = mountedButton.find(".location-button");
//     expect(locName.text()).toEqual("All Locations");
//   });
// });

