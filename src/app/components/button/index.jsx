import styles from "./button.module.scss";

import { FaCheck } from "react-icons/fa6";

export default function Button({text = '', type, onClick}) {
  return (
    <>
      <button 
        className={styles[type]} 
        type={type}
        onClick={onClick}>
          {text}
          <FaCheck/>
      </button>
    </>
  );
}