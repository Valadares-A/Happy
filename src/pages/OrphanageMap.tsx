import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../images/map-marker.svg";
import { Aside, LinkWrapper, PageMap } from "../styles/pages/orphanages-map";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
// tive um problema com mapa que so resolveu no que manda fazer nesse post
// https://github.com/facebook/create-react-app/issues/9468#issuecomment-694191642
// basicamente ir no package.json em browserslist
// tranformar esse cara em uma lista
// e os itens da listão são os que estavam na parte de production
// apagar a node modules, limpar cache e instalar tudo de novo

function OrphanageMap() {
  return (
    <PageMap className="d-flex">
      <Aside className="d-flex flex-column justify-content-between">
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um Orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer className="d-flex flex-column">
          <strong>São Paulo</strong>
          <span>Jacareí</span>
        </footer>
      </Aside>
      <MapContainer
        center={[-23.293883, -45.9324992]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <LinkWrapper
        to=""
        className="d-flex align-items-center justify-content-center"
      >
        <FiPlus size={32} color="#FFF" />
      </LinkWrapper>
    </PageMap>
  );
}

export default OrphanageMap;
