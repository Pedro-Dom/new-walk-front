import styles from "./form.module.scss";

import FormInput from "@/app/components/form-input";

export default function Form() {
  return (
    <main className={styles.formTemplate}>
      <FormInput type='text' label='Nome'/>
      <FormInput type='number' label='Telefone'/>
    </main>
  );
}