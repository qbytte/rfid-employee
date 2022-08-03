import { Header, LogComponent, Footer } from "../../components";
import "./styles.css";

const Logs = () => {
  return (
    <div>
      <Header title="Employee logs" />
      <div className="Emp-Logs-header">
        <div>ID</div>
        <div>Shift start</div>
        <div>Shift end</div>
        <div>Date</div>
      </div>
      <div className="EmpLogs-container">
        
      </div>
      <Footer />
    </div>
  );
};

export default Logs;
