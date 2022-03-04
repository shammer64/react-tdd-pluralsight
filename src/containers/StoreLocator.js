import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";

function StoreLocator(props) {
  const locations = [
    {
      location: "Portland",
      address: "123 Portland Ave",
    },
    {
      location: "Astoria",
      address: "123 Astoria Dr",
    },
    {
      location: "All Locations",
      address: "",
    },
  ];
  // this.chooseMap = this.chooseMap.bind(this);

  const [currentMap, setCurrentMap] = useState("all_locations.png");

  function chooseMap(e) {
    console.log("I've been clicked!");
    console.log(e);
    setCurrentMap(mapChooser(e.target.innerText));
  }

  let locationButtons = locations.map((shop, id) => {
    return (
      <Button
        key={id}
        handleClick={chooseMap}
        location={shop.location}
      />
    );
  });

  return (
    <div>
      <Header />
      <div>{locationButtons}</div>
      <Map imageName={currentMap} location={props.location} />
    </div>
  );

}

export default StoreLocator;
