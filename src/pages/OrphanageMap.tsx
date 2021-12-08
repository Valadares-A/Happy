import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../images/map-marker.svg";
import { Aside, LinkWrapper, PageMap } from "../styles/pages/orphanages-map";

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
      <div id="mapa"></div>
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
