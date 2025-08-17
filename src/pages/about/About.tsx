import "./about.scss";
import city from "../../assets/city.svg";
import git from "../../assets/git.svg";
import insta from "../../assets/insta.svg";
import whats from "../../assets/whats.svg";

const architectureServices = [
  "Residential Design",
  "Commercial Architecture",
  "Urban Planning & Masterplanning",
  "Landscape Architecture",
  "Interior Architecture & Design",
  "Sustainable & Green Building Design",
  "3D Visualization & Rendering",
  "Project Management",
  "Restoration & Conservation",
];

export default function About() {
  return (
    <section className="container_all">
      <div className="about">
        <p className="about_p">About</p>
        <article>
          <p className="text">
            We are dedicated to designing sophisticated nd innative bui ld We
            are dedicated to designing sophisticated n We are dedicated to
            designing sophis le We are dedicated to designing sophisticated n We
            are dedicated to designing sophisticated nd innative build d
            innative build
          </p>
        </article>
        <div className="container_img">
          <img src={city} alt="city" />
        </div>
      </div>
      <div className="services">
        <div className="services_p">
          <p>Services</p>
        </div>

        <div className="list_itens">
          <ul>
            {architectureServices.map((element) => {
              return (
                <li key={element} className="list_services">
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer>
        <div className="social">
          <img src={git} alt="github" />
          <img src={insta} alt="instagram" />
          <img src={whats} alt="whatszap" />
        </div>
      </footer>
    </section>
  );
}
