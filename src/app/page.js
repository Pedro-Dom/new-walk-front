import styles from "./page.module.css";

import FormPage from "./pages/form-page";

export default function Home() {
  return (
    <div className={styles.app}>
      <FormPage/>
    </div>
  );
}
