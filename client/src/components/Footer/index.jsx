import { BsPeopleFill, BsBarChartFill, BsPlusLg } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { useLocation } from "wouter";
import "./styles.css";

const Footer = () => {
  const [match, setLocation] = useLocation();

  return (
    <footer className="Footer">
      <nav>
        <ul>
          <li>
            <button className="Footer-btn" onClick={() => setLocation("/")}>
              <BsPeopleFill
                size={38}
                color={match === "/" ? "#343633" : "#8E8E8E"}
              />
            </button>
          </li>
          <li>
            <button className="Footer-btn" onClick={() => setLocation("logs")}>
              <FaDatabase
                size={28}
                color={match === "/logs" ? "#343633" : "#8E8E8E"}
              />
            </button>
          </li>
          <li>
            <button
              className="Footer-btn"
              onClick={() => setLocation("/register")}
            >
              <BsPlusLg
                size={26}
                color={match === "/register" ? "#343633" : "#8E8E8E"}
              />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
