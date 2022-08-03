import { useLocation } from "wouter";
import "./style.css";

const Employee = ({ imgUrl, atWork, firstName, lastName, id }) => {
  const [_location, setLocation] = useLocation();

  return (
    <div
      onClick={() => setLocation(`/details/${id}`)}
      className={atWork ? "Employee Employee-online" : "Employee"}
    >
      <div className="Employee-first">
        <div className="Employee-photo">
          <img src={imgUrl} />
        </div>
        <p className="Employee-status">
          Status: {atWork ? "Online" : "Offline"}
        </p>
      </div>
      <div className="Employee-second">
        <p className="Employee-name">{`${firstName} ${lastName}`}</p>
        <p className="Employee-id">{id}</p>
      </div>
    </div>
  );
};

export default Employee;
