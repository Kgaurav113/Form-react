import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
  const [formdata, setformdata] = useState({ showpassword: false });
  const handleChange = (e) => {
    const inputName = e.target.name;
   // console.log(e.target.click);
    if (e.target.type === "checkbox") {
      setformdata({ ...formdata, [inputName]: e.target.checked });
    } else if (e.target.type === "file") {
      setformdata({ ...formdata, [inputName]: e.target.value });
    } else {
      setformdata({ ...formdata, [inputName]: e.target.value });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div className={styles.form}>
      <form onSubmit={handlesubmit}>
        <div className={styles.grid}>
          <label>username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className={styles.grid}>
          <label>password</label>
          <input
            type={formdata.showpassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="checkbox" name="showpassword" onChange={handleChange} />
          <label>showpassword</label>
        </div>

        <div className={styles.grid}>
          <label>age</label>
          <input type="number" name="age" onChange={handleChange} />
        </div>

        <div className={styles.grid}>
          <label>gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="M">male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className={styles.grid}>
          <label>Dob</label>
          <input type="date" onChange={handleChange} />
        </div>

        <div className={styles.grid}>
          <label>Resume</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>

        <div className={styles.grid}>
          <label>password</label>
          <input type="submit" name="submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
