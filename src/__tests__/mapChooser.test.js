import mapChooser from '../mapChooser.js';

describe('mapChooser', function() {
  it("returns a portland.jpg base when portland is given to it", function() {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns astoria.jpg base when astoria is given to it", function () {
    let expected = "astoria.jpg";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });

  it("returns default.jpg when empty string is given to it", function () {
    let expected = "default.jpg";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });

  it("returns default.jpg when nothing is given to it", function () {
    let expected = "default.jpg";
    let actual = mapChooser();
    expect(actual).toEqual(expected);
  });


})