import "./header.scss";

export function Header() {
  return (
    <div className="container">
      <div className="container_header">
        <div className="logo"></div>
        <div>
          <span className="name_arc">Carlos Gonzaga</span>
        </div>
        <div className="links_container flex">
          <span className="links">About</span>
          <span className="links">Project</span>
        </div>
      </div>
    </div>
  );
}
