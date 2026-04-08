import { FaAngleDown } from "react-icons/fa6";
import styles from "./select-form.module.scss";

export default function FormSelect({name, label, value, onChange}) {
  const handleChange = (e) => {
    onChange(e, label);
  }

  return (
    <div  className={styles.selectWithLabel}>
      <label className={styles.labelForm} htmlFor="">{label}</label>
      <select
        className={styles.selectForm} 
        name={name}
        defaultValue={!value ? "" : value}
        onChange={handleChange}
      >
        <option value="" disabled hidden>Selecione</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
      <FaAngleDown className={styles.chevronSelect}/>
    </div>
  );
}