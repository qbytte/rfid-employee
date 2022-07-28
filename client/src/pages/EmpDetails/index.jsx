import { Header } from "../../components";
import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { database } from "../../firebase/config";
import { ref, child, get} from "firebase/database";

const EmpDetails = () => {

  const [employee, setEmployee] = useState({});
  const [_match, params] = useRoute("/edit/:id");

   useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `employees/${params.id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEmployee(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
      <p>{employee.firstName}</p>
      <p>{params.id}</p>
      </div>

      <div>
        <p>Email:</p>
        <h1/>
        <p>{employee.email}</p>
        <h1/>
        <p>Phone number: </p>
        <h1/>
        <p>{employee.phone}</p>
        <h1/>
        <p>Start date: </p>
        <h1/>
        <p>{employee.startDate}</p>
        <h1/>
        <p>Departament: </p>
        <p>{employee.department}</p>
      </div>
    </>
  )
}

export default EmpDetails

