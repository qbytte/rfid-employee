import "./styles.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      {!title && <button className="Header-back">Placeholder</button>}
      <h1 className="Header-title">{title}</h1>
    </div>
  );
};

export default Header;
