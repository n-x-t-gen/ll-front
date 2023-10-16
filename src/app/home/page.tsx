"use client";
const Calendar = dynamic(() => import("../../components/Calendar/Calendar-2"), {
  ssr: false,
});

import dynamic from "next/dynamic";

import React from "react";
import styles from "./page.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Calendar />
    </div>
  );
};

export default HomePage;
