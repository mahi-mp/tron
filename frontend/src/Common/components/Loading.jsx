import React from "react";
import { Spin } from "antd";
import styles from "../style/Loading.module.css";

function Loading() {
  return (
    <div className={styles.spin}>
      <Spin size="large" />
    </div>
  );
}
export { Loading };
