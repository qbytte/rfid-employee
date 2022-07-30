import "./styles.css";

const LogComponent = ({ id, shiftstart, shiftend, date }) => {
  return (
    <div className="LogComponent">
      <p>{id}</p>
      <span className="LogComponent-span">•</span>
      <p>{shiftstart} </p>
      <span className="LogComponent-span">•</span>
      <p>{shiftend}</p>
      <span className="LogComponent-span">•</span>
      <p>{date} </p>
    </div>
  );
};

export default LogComponent;
