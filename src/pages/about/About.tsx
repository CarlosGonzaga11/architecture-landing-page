import "./about.scss";
import city from "../../assets/city.svg";
import git from "../../assets/git.svg";
import insta from "../../assets/insta.svg";
import whats from "../../assets/whats.svg";
export default function About() {
  return (
    <div className="container_all">
      <div className="about">
        <p className="about_p">About</p>
        <article>
          <p className="text">
            We are dedicated to designing sophisticated nd innative bui ld We
            are dedicated to designing sophisticated n We are dedicated to
            designing sophis ld We are dedicated to designing sophisticated n We
            are dedicated to designing sophisticated nd innative build d
            innative build{" "}
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
        <div className="flex">
          <div className="list_itens">
            <div>
              <div className="list_services">
                <div className="ball"></div>interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
            </div>
            <div>
              <div className="list_services">
                <div className="ball"></div>interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
            </div>
            <div>
              <div className="list_services">
                <div className="ball"></div>interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
              <div className="list_services">
                <div className="ball"></div> interior perfonamece
              </div>
            </div>

            <div className="vision">
              <div className="v">Vision</div> <div className="e">&</div>{" "}
              <div className="p">Progress</div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="social">
          <img src={git} alt="github" />
          <img src={insta} alt="instagram" />
          <img src={whats} alt="whatszap" />
        </div>
      </footer>
    </div>
  );
}
