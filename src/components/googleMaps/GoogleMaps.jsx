import { useState, useEffect } from "react";
import Geocode from "react-geocode";

export const GoogleMaps = ({ houseData }) => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyB_I-sikdqMynGNXRgnNhmZvCgHLMPSdrY");

  Geocode.setLanguage("en");
  Geocode.setRegion("dk");
  Geocode.setLocationType("ROOFTOP");

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();

  // Get latitude & longitude from address.
 useEffect(() => {
    Geocode.fromAddress(`${houseData.item.address}`).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setLat(lat);
          setLng(lng);
        },
        (error) => {
          console.error(error);
        }
      );
 }, [])

  return lat ? (
    <>
      <h4>
        {houseData.item.address} <br /> latgitude:  {lat} <br />longitude: {lng}
      </h4>
      <p>Address to lat, lng</p>
    </>
  ) : <p>Lokalisering indlæses...</p>;
};
