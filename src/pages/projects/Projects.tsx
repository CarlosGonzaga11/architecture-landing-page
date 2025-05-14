import "./project.scss";
import blackword from '../../assets/blackword.png'
export default function Projects() {
  return (
    <section className="container_section">
      <div className="container_sec">
        <div className="content">
          <span>Projects</span>
            <img src={blackword} alt="building made by words"/>
        </div>
        <div className="carrosel">
        <div className="corner-right"></div>
        carrosel</div>
      </div>
    </section>
  );
}
