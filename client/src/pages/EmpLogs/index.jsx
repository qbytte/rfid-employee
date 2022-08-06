import { useState, useEffect } from "react";
import { Header, LogComponent, Footer } from "../../components";
import { database } from "../../firebase/config";
import { ref, child, get } from "firebase/database";
import "./styles.css";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [exist, setExist] = useState(false);

  const fetchData = () => {
    const logsRef = ref(database);
    get(child(logsRef, "logs/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const array = [];

          for (const [key, value] of Object.entries(data)) {
            array.push({
              id: value.id,
              shiftstart: value.start,
              shiftend: value.finish,
              date: value.date,
              key: key,
            });
          }
          console.log(data);
          array.reverse();
          setLogs(array);
          setExist(true);
        } else {
          setExist(false);
          console.log("no hay logs");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {exist ? (
          logs.map((log) => {
            return (
              <LogComponent
                id={log.id}
                shiftstart={log.shiftstart}
                shiftend={log.shiftend}
                date={log.date}
                key={log.key}
              />
            );
          })
        ) : (
          <div className="ActiveEmps-create-emp">No logs yet</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Logs;
