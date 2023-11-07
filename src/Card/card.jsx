export function Card({ logo, title, link }) {
  return (
    <div className="border">
      <div className="title">{title} </div>
      <div>
        {" "}
        <a href={link} className="link">
          {" "}
          Link to React{" "}
        </a>{" "}
      </div>
    </div>
  );
}
