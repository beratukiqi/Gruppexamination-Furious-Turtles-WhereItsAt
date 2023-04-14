import "../Styles/LandingPage.css";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <article className="wrapper">
      <section className="landingPage">
        <img
          className="landingPage__image"
          src={"src/assets/LandingPage-image.png"}
          alt="Welcoming image of Where Its At application"
        />
        <h1 className="landingPage__header">Where it's @</h1>
        <h2 className="landingPage__sub-header">Ticketing made easy</h2>
        <section className="landingPage__btn">
        <Link to="/events">
          <PrimaryButton title="Continue" />
        </Link>
        </section>

      </section>
    </article>
  );
}

export default LandingPage;
