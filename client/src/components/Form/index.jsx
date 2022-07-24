import { FaCheckCircle } from "react-icons/fa";
import "./styles.css";

const Form = () => {
  return (
    <form className="Form">
      <label className="Form-label">
        <span>Employee name:</span>
        <div>
          <input className="Form-input" type="text" placeholder="First name" />
          <input className="Form-input" type="text" placeholder="Last name" />
        </div>
      </label>
      <label className="Form-label">
        <span>Employee ID and phone number:</span>
        <div>
          <input className="Form-input" type="text" placeholder="ID" />
          <input
            className="Form-input"
            type="text"
            placeholder="Phone number"
          />
        </div>
      </label>
      <label className="Form-label">
        <span>Employee email:</span>
        <input
          className="Form-input large"
          type="email"
          placeholder="mail@domain.com"
        />
      </label>
      <label className="Form-label">
        <span>Department and start date:</span>
        <div>
          <input className="Form-input" type="text" placeholder="Department" />
          <input className="Form-input" type="date" />
        </div>
      </label>
      <button className="Form-submit" type="submit">
        <FaCheckCircle color="#7692FF" />
      </button>
    </form>
  );
};

export default Form;
