import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { InputGroup } from "../components/InputGroup";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
L.Icon.Default.imagePath =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/";

export const OrdersScreen = () => {
  const [items, setItems] = useState([]);

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [position, setPosition] = useState([47.9148155, 106.9108148]);
  const markerRef = useRef(null);

  useEffect(() => {
    console.log("position:", position);
  }, [position]);
  useEffect(() => {
    axios.get("/orders").then((res) => {
      setItems(res.data);
    });
  }, []);

  const newOrder = () => {
    axios
      .post("/orders", {
        location: { type: "Point", coordinates: [longitude, latitude] },
      })
      .then((res) => {
        setItems([...items, res.data]);
      });
  };

  return (
    <div className="">
      <form
        className="p-5 max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          newOrder();
        }}
      >
        <InputGroup label="latitude" value={latitude} onChange={setLatitude} />
        <InputGroup
          label="longitude"
          value={longitude}
          onChange={setLongitude}
        />
        <Button type="submit">submit new</Button>
      </form>
      <div style={{ width: 500, height: 500 }}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {items.map((item) => {
            const { coordinates } = item.location;
            return (
              <Marker
                key={item._id}
                position={[coordinates[1], coordinates[0]]}
              >
                <Popup>.</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};
