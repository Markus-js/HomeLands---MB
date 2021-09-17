import { useState, useEffect } from "react";
import Geocode from "react-geocode";
import GoogleMaps from "simple-react-google-maps";



export const Maps = ({ houseData }) => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyB_I-sikdqMynGNXRgnNhmZvCgHLMPSdrY");
  Geocode.setLanguage("en");
  Geocode.setRegion("dk");
  Geocode.setLocationType("ROOFTOP");
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
      <GoogleMaps
      apiKey={process.env.GOOGLE_MAPS_API_KEY}
      style={{height: "100%", width: "100%"}}
      zoom={10}
      center={{lat: lat, lng: lng}}
      markers={{lat: lat, lng: lng}} 
    />
    </>
  ) : <p>Lokalisering indlæses...</p>;
};
