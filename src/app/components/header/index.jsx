import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h3>Something</h3>

        <div className={styles.menuNav}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </header>
    </>
  );
}