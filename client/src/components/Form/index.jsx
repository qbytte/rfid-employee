import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { database } from "../../firebase/config";
import { set, ref, update } from "firebase/database";
import moment from "moment";
import "./styles.css";

const Form = ({ edit, employee, id }) => {
  const [_location, setLocation] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (employee) {
      reset({
        firstName: employee.firstName,
        lastName: employee.lastName,
        id: id,
        phone: employee.phone,
        email: employee.email,
        department: employee.department,
        startDate: employee.startDate,
      });
    }
  }, [employee]);

  const onSubmit = (values) => {
    console.table(values);

    set(ref(database, `employees/${values.id}`), {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      department: values.department,
      startDate: values.startDate,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/rfid-empoyee.appspot.com/o/placeholder.png?alt=media&token=6a9e0143-c51d-4e0e-93cc-9bbf9d5aac3c",
      start: "",
      finish: "",
      date: "",
      atWork: false,
    }).then(() => {
      setLocation(`details/${values.id}`);
    });
  };

  const onUpdate = (values) => {
    console.table(values);
    update(ref(database, `employees/${values.id}`), {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      department: values.department,
      startDate: values.startDate,
    }).then(() => {
      setLocation(`details/${values.id}`);
    });
  };

  return (
    <form
      className="Form"
      onSubmit={edit ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}
    >
      <label className="Form-label">
        <span>Employee name:</span>
        <div>
          <input
            {...register("firstName", { requiered: true })}
            className="Form-input"
            type="text"
            placeholder="First name"
            required
          />
          <input
            {...register("lastName", { requiered: true })}
            className="Form-input"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
      </label>
      <label className="Form-label">
        {errors.id && <strong>Please enter a valid ID.</strong>}
        {errors.phone && <strong>Please enter a valid phone number.</strong>}
        <span>Employee ID and phone number:</span>
        <div>
          <input
            {...register("id", { requiered: true, minLength: 8 })}
            className="Form-input"
            type="text"
            placeholder="ID"
            required
            maxLength={8}
            disabled={edit}
          />
          <input
            {...register("phone", {
              requiered: true,
              maxLength: 10,
              pattern:
                /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gi,
            })}
            className="Form-input"
            type="text"
            placeholder="Phone number"
            maxLength={10}
          />
        </div>
      </label>
      <label className="Form-label">
        {errors.email && <strong>Please enter a valid email.</strong>}
        <span>Employee email:</span>
        <input
          {...register("email", {
            requiered: true,
            pattern: /\b[\w-]+@[\w-]+\w{2,4}\b/gi,
          })}
          className="Form-input large"
          type="email"
          placeholder="mail@domain.com"
          required
        />
      </label>
      <label className="Form-label">
        <span>Department and start date:</span>
        <div>
          <input
            {...register("department", { requiered: true })}
            className="Form-input"
            type="text"
            placeholder="Department"
            required
          />
          <input
            {...register("startDate", { requiered: true })}
            className="Form-input"
            type="date"
            required
            defaultValue={!edit && moment().format("YYYY-MM-DD")}
          />
        </div>
      </label>
      <button className="Form-submit" type="submit">
        <FaCheckCircle size={40} color="#7692FF" />
      </button>
      <button type="button">fuder</button>
    </form>
  );
};

export default Form;
