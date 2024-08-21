import { useMemo, useState } from 'react';
import './App.css';
import {
  FeatureGroup,
  MapContainer,
  Popup,
  Rectangle,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CustomModal from './Components/Modal';

function App() {
  // const [innerBounds, setsetBounds] = useState<any>([
  //   [51.505, -0.09],
  //   [51.55, -0.18],
  // ]);
  // const innerHandlers = useMemo(
  //   () => ({
  //     click() {
  //       setsetBounds(innerBounds);
  //     },
  //   }),
  //   [innerBounds],
  // );
  // return (
  //   <div className="App">
  //     <MapContainer
  //       center={[51.505, -0.09]}
  //       zoom={12}
  //       scrollWheelZoom={true}
  //       style={{ height: '500px' }}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       <FeatureGroup pathOptions={{ color: 'red' }}>
  //         <Popup>Coordinates: {innerBounds[0] + innerBounds[1]}</Popup>
  //         <Rectangle bounds={innerBounds} eventHandlers={innerHandlers} />
  //       </FeatureGroup>
  //     </MapContainer>

  const [bounds, setBounds] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        if (!bounds) {
          setBounds([[e.latlng.lat, e.latlng.lng]]);
          // setIsModalOpen(true);
        } else {
          setBounds([...bounds, [e.latlng.lat, e.latlng.lng]]);
          setIsModalOpen(true);
        }
      },
    });

    return null;
  };

  const handlCloseModal = () => {
    setIsModalOpen(false);
    setBounds(null);
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '70vh' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {bounds?.length === 2 && <Rectangle bounds={bounds} />}
        <MapEvents />
      </MapContainer>
      <CustomModal isOpen={isModalOpen} onRequestClose={handlCloseModal} bounds={bounds} />
    </div>
  );
}

export default App;
