import { Header } from "../../components";
import { useState, useEffect, memo } from "react";
import { useRoute, useLocation } from "wouter";
import { AiFillEdit } from "react-icons/ai";
import { database } from "../../firebase/config";
import { ref, child, get } from "firebase/database";
import moment from "moment";
import "./styles.css";

const EmpDetails = () => {
  const [employee, setEmployee] = useState({});
  const [hoursWorked, setHoursWorked] = useState("00:00:00");
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

    get(child(dbRef, "logs/")).then((snapshot) => {
      if (snapshot.exists()) {
        let hrs = moment("00:00:00", "HH:mm:ss");
        for (const [_key, value] of Object.entries(snapshot.val())) {
          let logDate = moment(value.date).format("YYYY-MM-DD");
          let startWeek = moment().startOf("week");
          let endWeek = moment().endOf("week");

          if (
            moment(logDate).isSameOrAfter(startWeek) &&
            moment(logDate).isSameOrBefore(endWeek)
          ) {
            if (value.id === params.id) {
              hrs.add({
                hours: moment(value.hrsWorked, "HH:mm:ss").hours(),
                minutes: moment(value.hrsWorked, "HH:mm:ss").minutes(),
                seconds: moment(value.hrsWorked, "HH:mm:ss").seconds(),
              });
            }
          }
        }
        setHoursWorked(hrs.format("HH:mm:ss"));
      }
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
          <div className="EmpDetail-label">Hours worked this week</div>
          <div className="EmpDetail-data">{hoursWorked}</div>
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
