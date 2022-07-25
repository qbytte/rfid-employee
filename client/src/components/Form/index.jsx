import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { database } from "../../firebase/config";
import { set, ref } from "firebase/database";
import "./styles.css";

const Form = () => {
  const [_location, setLocation] = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.table(values);

    set(ref(database, `employees/${values.id}`), {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      department: values.department,
      startDate: values.startDate,
      imgUrl: "https://imgur.com/pUHx2hC",
      start: "",
      finish: "",
      date: "",
      atWork: false
    })
    .then(() => {
      setLocation(`details/${values.id}`)
    })

  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
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
        {errors.email && (
          <strong>
            Please enter a valid email.
          </strong>
        )}
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
          />
        </div>
      </label>
      <button className="Form-submit" type="submit">
        <FaCheckCircle size={40} color="#7692FF" />
      </button>
    </form>
  );
};

export default Form;
