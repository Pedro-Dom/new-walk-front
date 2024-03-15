import styles from "./input-form.module.scss";

export default function FormInput({name = '', type, label, value, onChange}) {
  const handleChange = (e) => {
    onChange(e, label);
  }

  return (
    <div  className={styles.inputWithLabel}>
      <label className={styles.labelForm} htmlFor="">{label}</label>
      <input 
        className={styles.inputForm} 
        name={name ? name : label} 
        type={type} 
        placeholder={name ? name : label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}