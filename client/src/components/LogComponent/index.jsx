import { useLocation } from "wouter";
import "./styles.css";

const LogComponent = ({ id, shiftstart, shiftend, date }) => {
  const [_location, setLocation] = useLocation();

  return (
    <div onClick={() => setLocation(`/details/${id}`)} className="LogComponent">
      <div>{id}</div>
      <div className="LogComponent-span">•</div>
      <div>{shiftstart}</div>
      <div className="LogComponent-span">•</div>
      <div>{shiftend}</div>
      <div className="LogComponent-span">•</div>
      <div>{date}</div>
    </div>
  );
};

export default LogComponent;
