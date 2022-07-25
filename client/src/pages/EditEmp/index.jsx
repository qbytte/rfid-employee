import { Header, EditPhoto } from "../../components";
import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { database } from "../../firebase/config";
import { ref, child, get } from "firebase/database";
import { storage } from "../../firebase/config";
import {
  getDownloadURL,
  ref as refStorage,
  uploadBytes,
} from "firebase/storage";

const EditEmp = () => {
  const [employee, setEmployee] = useState({});
  const [match, params] = useRoute("/edit/:id");

  const onSubmitImg = (file) => {
    const storageRef = refStorage(storage, "employeePictures");
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(file)
        console.log("Uploaded file");
      })
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            console.log(url);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  };

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
      <EditPhoto imgUrl={employee.imgUrl} onSubmitImg={onSubmitImg} />
    </>
  );
};

export default EditEmp;
