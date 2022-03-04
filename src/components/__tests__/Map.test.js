import React from "react";
import { shallow } from "enzyme";
import Map from "../Map.js";

describe("Map", () => {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imageName: "testmap.png",
    };
    mountedMap = shallow(<Map {...props} />);
  });

  it("renders without crashing", () => {
    // Moved to beforeEach
  });

  it("renders a map image", () => {
    const images = mountedMap.find("img");
    expect(images.length).toBe(1);
  });

  it("renders default map when no params are given", () => {
    mountedMap = shallow(<Map />);
    const mapImg = mountedMap.find('img[src="images/none.png"]');
    expect(mapImg.length).toBe(1);
  });

  it("displays the imageName passed to it", () => {
    const mapImg = mountedMap.find('img[src="images/testmap.png"]');
    expect(mapImg.length).toBe(1);
  });
});
