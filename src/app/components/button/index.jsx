import styles from "./button.module.scss";

import { FaCheck } from "react-icons/fa6";

export default function Button({text = '', type}) {
  return (
    <>
      <button className={styles[type]} type={type}>
        {text}
        <FaCheck/>
      </button>
    </>
  );
}