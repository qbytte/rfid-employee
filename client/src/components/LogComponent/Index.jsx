import "./styles.css";

const LogComponent = ({ id, shiftstart, shiftend, date }) => {
  return (
    <div className="LogComponent">
      <div>{id}</div>
      <div className="LogComponent-span">•</div>
      <div>{shiftstart} </div>
      <div className="LogComponent-span">•</div>
      <div>{shiftend}</div>
      <div className="LogComponent-span">•</div>
      <div>{date} </div>
    </div>
  );
};

export default LogComponent;
