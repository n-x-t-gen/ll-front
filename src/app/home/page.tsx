"use client";
const Calendar = dynamic(() => import("../../components/Calendar/Calendar"), {
  ssr: false,
});

import NavBar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";

import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Homepage Genérica</h1>
      <Calendar />
    </div>
  );
};

export default HomePage;
