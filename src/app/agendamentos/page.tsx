"use client";
import React from "react";
import styles from "./page.module.css";
import Calendar from "@/components/Calendar/Calendar";

const SchedulePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Calendar />
    </div>
  );
};

export default SchedulePage;
