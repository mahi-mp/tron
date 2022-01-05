import React, { useEffect, useState } from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { mapAction } from "./state/actions";
import styles from "./styles/Map.module.css";

function Map() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapAction.getData());
  }, [dispatch]);

  const { mapData } = useSelector((state) => state.map);

  const [markerData, setMarkerData] = useState([]);

  let updateMarker = (event) => {
    const getLatLng = event.target.getLatLng();
    const getMarkerIndex = event.target.options.marker_index;
    markerData[getMarkerIndex] = getLatLng;
    setMarkerData(markerData);
  };

  let addMarker = (event) => {
    console.log(event);
    const coords = event.latlng;
    setMarkerData({
      markerData: [...markerData, coords],
    });
  };

  return (
    <div className={styles.mapAlignment}>
      {mapData && (
        <MapContainer
          zoom={13}
          center={[53.54421, 9.91835]}
          style={{ height: "420px", width: "100%" }}
          onClick={addMarker}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {mapData.map((element, index) => (
            <Marker
              key={index}
              marker_index={index}
              position={[element.coordinates[1], element.coordinates[0]]}
              draggable={true}
              onDragend={updateMarker}
            >
              <Popup>
                {element.property}. <br /> {element.status}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export { Map };
