import { useState, useEffect } from "react";
import { Header, Employee, Footer } from "../../components";
import { database } from "../../firebase/config";
import { ref, onValue, set } from "firebase/database";
import "./styles.css"

const ActiveEmployees = () => {
  const [emps, setEmps] = useState([]);

  const fetchData = () => {
    const employeesRef = ref(database, "employees/");
    onValue(employeesRef, (snapshot) => {
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
      setEmps(array);
    });
  };

  useEffect(() => {
    fetchData();
    console.log(emps);
  }, []);

  return (
    <div>
      <Header title="Acttive employees" />
      <div className="ActiveEmps-list">
        {emps.map((emp) => {
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
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ActiveEmployees;
