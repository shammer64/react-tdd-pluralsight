import React from "react";
import { shallow } from "enzyme";
import Map from "../Map.js";

describe("Map", () => {

  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  it("renders without crashing", () => {
    // Moved to beforeEach
  });

  it("renders a map image", () => {
    const images = mountedMap.find("img");
    expect(images.length).toBe(1);
  })
});
