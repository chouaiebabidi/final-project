import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L ,{marker}from 'leaflet';

var icon = L.icon({
  iconUrl: 'https://img.icons8.com/plasticine/2x/marker.png',
  iconSize: [38, 45],
  iconAnchor: [19, 40],
  popupAnchor: [0, -30]

})


function Map() {
  const position =[33.865171, 10.103871]

  return (
    <div className="App" >

      <MapContainer style={{widht:"20vw",height:"80vh"}} center={position} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
            <Popup>
              <h1>Talel</h1>
            <img src='https://mir-s3-cdn-cf.behance.net/user/276/d4ba0d210843599.5ba2fa72c65d7.jpg' alt="Talel"/>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </MapContainer>

    </div>
  );
}

export default Map