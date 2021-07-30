import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const Mapx = () => {
  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB7VBY6KfTHo4p_O-Oo_R3KuIXVmktjbcY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export default Mapx;
