import styles from "./input-form.module.scss";

export default function FormInput({type, label}) {

  return (
    <div  className={styles.inputWithLabel}>
      <label className={styles.labelForm} htmlFor="">{label}</label>
      <input className={styles.inputForm} type={type} placeholder={label}/>
    </div>
  );
}