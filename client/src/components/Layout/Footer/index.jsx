import { BsPeopleFill, BsBarChartFill, BsPlusLg } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <nav>
        <ul>
          <li>
            <button className="Footer-btn">
              <BsPeopleFill size={38} color={"#8E8E8E"} />
            </button>
          </li>
          <li>
            <button className="Footer-btn">
              <BsBarChartFill size={32} color={"#8E8E8E"} />
            </button>
          </li>
          <li>
            <button className="Footer-btn">
              <FaDatabase size={28} color={"#8E8E8E"} />
            </button>
          </li>
          <li>
            <button className="Footer-btn">
              <BsPlusLg size={26} color={"#8E8E8E"} />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
