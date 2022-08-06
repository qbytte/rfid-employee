import { useState, useEffect } from "react";
import { Header, Employee, Footer } from "../../components";
import { database } from "../../firebase/config";
import { ref, onValue } from "firebase/database";
import "./styles.css";

const ActiveEmployees = () => {
  const [emps, setEmps] = useState([]);
  const [exist, setExist] = useState(false);

  const fetchData = () => {
    const employeesRef = ref(database, "employees/");
    onValue(employeesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const array = [];

        for (const [key, value] of Object.entries(data)) {
          array.push({
            id: key,
            firstName: value.firstName,
            lastName: value.lastName,
            atWork: value.atWork,
            imgUrl: value.imgUrl,
          });
        }
        array.sort((a, b) => +b.atWork - a.atWork);
        setEmps(array);
        setExist(true);
      } else {
        setExist(false);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Active employees" />
      <div className="ActiveEmps-list">
        {exist ? (
          emps.map((emp) => {
            return (
              <Employee
                id={emp.id}
                firstName={emp.firstName}
                lastName={emp.lastName}
                atWork={emp.atWork}
                imgUrl={emp.imgUrl}
                key={emp.id}
              />
            );
          })
        ) : (
          <div className="ActiveEmps-create-emp">
            Create your first employee
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ActiveEmployees;
