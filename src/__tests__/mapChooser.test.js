import mapChooser from '../mapChooser.js';

describe('mapChooser', function() {
  it("returns a portland.png base when portland is given to it", function() {
    let expected = "portland.png";
    let actual = mapChooser("Portland");
    expect(actual).toEqual(expected);
  });

  it("returns astoria.png base when astoria is given to it", function () {
    let expected = "astoria.png";
    let actual = mapChooser("Astoria");
    expect(actual).toEqual(expected);
  });

  it("returns all_locations.png when empty string is given to it", function () {
    let expected = "all_locations.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });

  it("returns all_locations.png when nothing is given to it", function () {
    let expected = "all_locations.png";
    let actual = mapChooser();
    expect(actual).toEqual(expected);
  });

  it("returns all_locations.png when anything else is given to it", function () {
    let expected = "all_locations.png";
    let actual = mapChooser("All Locations");
    expect(actual).toEqual(expected);
  });


})