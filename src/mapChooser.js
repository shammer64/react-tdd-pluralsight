function mapChooser(locationName) {
  const validLocations = ["Astoria", "Portland"];
  let mapName;
  if (locationName && validLocations.includes(locationName)) 
    mapName = locationName.toLowerCase() + ".png";
  else
    mapName = "all_locations.png";
  return mapName;
}

export default mapChooser;
