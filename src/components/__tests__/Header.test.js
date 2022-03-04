import React from "react";
import { shallow } from "enzyme";
import Header from "../Header.js";

describe("Header", () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {});

  it("renders the logo image", () => {
    const logoImg = mountedHeader.find(
      'img[src="images/wired-brain-coffee-logo.png"]'
    );
    expect(logoImg.length).toBe(1);
  });
});
