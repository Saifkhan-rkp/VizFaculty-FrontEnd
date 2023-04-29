import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      Day: "",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    }
  );

  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.Day &&
      formState["10:30-11:30"] &&
      formState["11:30-12:30"] &&
      formState["1:00-2:00"] &&
      formState["2:00-3:00"] &&
      formState["3:15-4:15"] &&
      formState["4:15-5:15"]
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      {" "}
      <div className="modal">
        <form>
          {/* <div className="form-group">
            <label htmlFor="Day">Day</label>
            <input name="Day" onChange={handleChange} value={formState.Day} />
          </div> */}
          <div className="form-group">
            <label htmlFor="10:30-11:30">10:30-11:30</label>
            <input
              name="10:30-11:30"
              onChange={handleChange}
              value={formState["10:30-11:30"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="11:30-12:30">11:30-12:30</label>
            <input
              name="11:30-12:30"
              onChange={handleChange}
              value={formState["11:30-12:30"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="1:00-2:00">1:00-2:00</label>
            <input
              name="1:00-2:00"
              onChange={handleChange}
              value={formState["1:00-2:00"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="2:00-3:00">2:00-3:00</label>
            <input
              name="2:00-3:00"
              onChange={handleChange}
              value={formState["2:00-3:00"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="3:15-4:15">3:15-4:15</label>
            <input
              name="3:15-4:15"
              onChange={handleChange}
              value={formState["3:15-4:15"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="4:15-5:15">4:15-5:15</label>
            <input
              name="4:15-5:15"
              onChange={handleChange}
              value={formState["4:15-5:15"]}
            />
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}

          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
