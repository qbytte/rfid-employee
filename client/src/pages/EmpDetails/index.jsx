import { Header } from "../../components";
import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { AiFillEdit } from "react-icons/ai";
import { database } from "../../firebase/config";
import { ref, child, get } from "firebase/database";
import "./styles.css";

const EmpDetails = () => {
  const [employee, setEmployee] = useState({});

  const [_location, setLocation] = useLocation();

  const [_match, params] = useRoute("/details/:id");

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
      <Header />
      <div className="EmpDetail">
        <div className="EmpDetail-Photo">
          <img src={employee.imgUrl} />
        </div>
        <div className="EmpDetail-first">
          <div className="EmpDetail-firstName">{`${employee.firstName} ${employee.lastName}`}</div>
          <div className="EmpDetail-lastName">{params.id}</div>
        </div>
        <div className="EmpDetail-second">
          <div className="EmpDetail-label">Email:</div>
          <div className="EmpDetail-data">{employee.email}</div>
          <div className="EmpDetail-label">Phone number:</div>
          <div className="EmpDetail-data">{employee.phone}</div>
          <div className="EmpDetail-label">Start date:</div>
          <div className="EmpDetail-data">{employee.startDate}</div>
          <div className="EmpDetail-label">Department</div>
          <div className="EmpDetail-data">{employee.department}</div>
        </div>
        <button
          className="EmpDetail-edit"
          type="button"
          onClick={() => setLocation(`/edit/${params.id}`)}
        >
          <AiFillEdit size={40} color="#343633" />
        </button>
      </div>
    </>
  );
};

export default EmpDetails;
