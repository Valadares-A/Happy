import {
  ContentWrapper,
  LandingPageContainer,
  Location,
  LinkWrapper,
} from "../styles/pages/landing-page";
import logoImg from "../images/logo.svg";
import { FiArrowRight } from "react-icons/fi";

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>;
}

function Landing() {
  return (
    <LandingPageContainer className="d-flex justify-content-center align-items-center">
      <ContentWrapper className="d-flex align-items-start flex-column justify-content-between">
        <img src={logoImg} alt="Happy" />
        <main>
          <Title text="Leve felicidade para o mundo"></Title>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <Location className="d-flex flex-column">
          <strong>São Paulo</strong>
          <span>Jacareí</span>
        </Location>
        <LinkWrapper
          to="/app"
          className="d-flex align-items-center justify-content-center"
        >
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </LinkWrapper>
      </ContentWrapper>
    </LandingPageContainer>
  );
}

export default Landing;
