import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      {!title && (
        <button className="Header-back">
          <IoIosArrowBack size={40} color={"#FFFDFD"} />
        </button>
      )}
      <h1 className="Header-title">{title}</h1>
    </div>
  );
};

export default Header;
