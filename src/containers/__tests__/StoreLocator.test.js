import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator.js";

describe("StoreLocator", () => {

  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders without crashing", () => {
    // Moved to beforeEach()
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  // it("renders two buttons", () => {
  //   const headers = mountedStoreLocator.find("Button");
  //   expect(headers.length).toBe(2);
  // });

  it("renders a map", () => {
    const headers = mountedStoreLocator.find("Map");
    expect(headers.length).toBe(1);
  });

});

// describe("chooseMap", () => {
//   it("updates currentMap using the location passed to it", () => {
//     const mountedStoreLocator = shallow(<StoreLocator />);
//     const setCurrentMap = jest.fn();
//     const handleClick = jest.spyOn(React, "useState");
//     handleClick.mockImplementation((currentMap) => [currentMap, setCurrentMap]);
//     const button = mountedStoreLocator.find('Button[location="Astoria"]');
//     const nativeButton = button.find('button');
//     nativeButton.simulate("click");
//     expect(setCurrentMap).toBeCalled();
//   });
// });

