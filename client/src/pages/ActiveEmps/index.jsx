import { useState, useEffect } from "react";
import { Footer } from "../../components";
import { database } from "../../firebase/config";
import { ref, onValue } from "firebase/database";

const ActiveEmployees = () => {
  const [emps, setEmps] = useState([]);
  const fetchData = () => {
    const employeesRef = ref(database, "employees/");
    onValue(employeesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const array = Object.entries(data).map(entry => {
        return { [entry[0]]: entry[1] };
      });
      setEmps(array);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      { emps.map((emp) => { 
        console.log(emp)
      })}
      <Footer />
    </div>
  )
}

export default ActiveEmployees