import React from "react";
import profilePic from "../assets/photo 1.jpg";

const ProfileCard = () => { 
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "200px", textAlign: "center" }}>
      <img src={profilePic} alt="Profile" style={{ width: "100px", borderRadius: "50%" }} />
      <h3>John Doe</h3>
      <p>Software Engineer</p>
    </div>
  );
};

export default ProfileCard;
