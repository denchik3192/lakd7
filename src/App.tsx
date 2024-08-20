import { useMemo, useState } from 'react';
import './App.css';
import { FeatureGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const [innerBounds, setsetBounds] = useState<any>([
    [51.505, -0.09],
    [51.55, -0.18],
  ]);
  const innerHandlers = useMemo(
    () => ({
      click() {
        setsetBounds(innerBounds);
      },
    }),
    [innerBounds],
  );
  return (
    <div className="App">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '500px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup pathOptions={{ color: 'red' }}>
          <Popup>Coordinates: {innerBounds[0] + innerBounds[1]}</Popup>
          <Rectangle bounds={innerBounds} eventHandlers={innerHandlers} />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
}

export default App;
