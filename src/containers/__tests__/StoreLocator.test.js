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

  it("renders two buttons", () => {
    const headers = mountedStoreLocator.find("Button");
    expect(headers.length).toBe(2);
  });

  it("renders a map", () => {
    const headers = mountedStoreLocator.find("Map");
    expect(headers.length).toBe(1);
  });

});

