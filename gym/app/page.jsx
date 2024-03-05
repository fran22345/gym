"use client";
// App.js
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Principal = () => {
  return (
    <div className="grid grid-cols-2">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Principal;
