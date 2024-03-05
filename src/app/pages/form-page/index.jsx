import styles from "./main-form.module.scss";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Form from "@/app/components/form";

export default function FormPage() {
  return (
    <div className={styles.formPage}>
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}