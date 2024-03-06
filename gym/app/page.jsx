"use client";
// App.js
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Body from "./components/Body";

const Principal = () => {
  return (
    <div className="grid grid-cols-6">
      <Header />
      <Sidebar />
      <Body />
    </div>
  );
};

export default Principal;
