import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import List from "./components/List";
import Advlist from "./components/Advlist";
import BasicForm from "./components/forms"; 

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("list")}>list</button>
        <button onClick={() => setActiveTab("Advlist")}>Advlist</button>
        <button onClick={() => setActiveTab("form")}>Form</button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <List />}
        {activeTab === "Advlist" && <Advlist />}
        {activeTab === "form" && <BasicForm />}
      </div>
    </div>
  );
}

export default App;
