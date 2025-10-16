import React, { useState } from "react";

 const BasicForm=() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirm_password: "",
    age: "",
    dob: "",
    department: "",
    address: "",
    video: null,
    file: null,
    rating: "",
    color: "#ff0000",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      confirm_password: "",
      age: "",
      dob: "",
      department: "",
      address: "",
      video: null,
      file: null,
      rating: "",
      color: "#ff0000",
      terms: false,
    });
  };

  return (
    <div style={{ backgroundColor: "aquamarine", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <nav>
        <ul>
          <li>
            <a href="forms.html" target="_blank" rel="noreferrer">Forms</a>
          </li>
          <li>
            <a href="../day1/HTML/table.html">Table</a>
          </li>
        </ul>
      </nav>

      <h1 style={{
        textAlign: "center",
        color: "rgb(19, 203, 99)",
        backgroundColor: "rgb(14, 150, 150)"
      }}>
        Basic Form
      </h1>

      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        style={{
          padding: "50px",
          margin: "50px",
          backgroundColor: "yellowgreen",
          fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        }}
      >
        <label className="dell" htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required placeholder="enter your name"
          value={formData.name} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="enter your mail id"
          value={formData.email} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="enter your phone number"
          value={formData.phone} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male"
          checked={formData.gender === "male"} onChange={handleChange} />
        <label htmlFor="male" className="dell">Male</label>

        <input type="radio" id="female" name="gender" value="female"
          checked={formData.gender === "female"} onChange={handleChange} />
        <label htmlFor="female" className="dell">Female</label><br /><br />

        <label className="dell" htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required placeholder="enter your password"
          value={formData.password} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required placeholder="re-enter your password"
          value={formData.confirm_password} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required min="1" max="120"
          value={formData.age} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob"
          value={formData.dob} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="department">Department:</label>
        <select id="department" name="department" value={formData.department} onChange={handleChange}>
          <option value="">--Select Department--</option>
          <option value="cse">CSE</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          <option value="mech">MECH</option>
          <option value="civil">CIVIL</option>
          <option value="ise">ISE</option>
        </select><br /><br />

        <label className="dell" htmlFor="address">Address:</label><br />
        <textarea id="address" name="address" rows="4" cols="50" placeholder="enter your address"
          value={formData.address} onChange={handleChange}></textarea><br /><br />

        <label className="dell" htmlFor="video">Upload your video:</label>
        <input type="file" id="video" name="video" accept="video/*" onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="file">Upload your file:</label>
        <input type="file" id="file" name="file" accept=".pdf, .doc, .docx" onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="rating">Give your rating:</label>
        <input type="range" id="rating" name="rating" min="1" max="10"
          value={formData.rating} onChange={handleChange} /><br /><br />

        <label className="dell" htmlFor="color">Choose your favorite color:</label>
        <input type="color" id="color" name="color"
          value={formData.color} onChange={handleChange} /><br /><br />

        <h3>
          Terms and Conditions
          <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
          <label className="dell" htmlFor="terms">I agree to the terms and conditions</label>
        </h3>
        <br />

        <input className="dell" type="submit" value="Submit" />
        <input className="dell" type="reset" value="Reset" />
      </form>

      <style>{`
        .dell {
          padding: 10px;
          margin: 10px;
          border: 2px solid black;
        }
      `}</style>
    </div>
  );
}
export default BasicForm;
