import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form action="validationform.html">

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          required
        />

        <label>Gender</label>
        <div className="gender">
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
          <input type="radio" name="gender" value="Other" /> Other
        </div>

        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          required
        />

        <label>Course</label>
        <select name="course" required>
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
          <option value="B.Sc">B.Sc</option>
          <option value="M.Sc">M.Sc</option>
        </select>

        <label>Branch</label>
        <select name="branch" required>
          <option value="">Select Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">
            Information Technology
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Electrical">Electrical</option>
        </select>

        <label>Year</label>
        <select name="semester" required>
          <option value="">Select Year</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default App;