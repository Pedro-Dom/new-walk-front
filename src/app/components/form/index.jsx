"use client"

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import FormInput from "@/app/components/form-input";
import styles from "./form.module.scss";

export default function Form() {

  const [section, setSection] = useState(0); // Inicializando o estado de section com o valor 0
  const [formData, setFormData] = useState({
    Nome: '',
    Telefone: '',
    Batizado: '',
    Email: '',
    Casada: '',
    Igreja: '', 
    Jovem: ''
  });
  
  let formFields;

  switch(section) {
    case  0:
      formFields = [
        {
          label: 'Nome',
          type: 'text'
        },
        {
          label: 'Telefone',
          type: 'number'
        },
      ];
      break;
    case 1:
      formFields = [
        {
          label: 'Batizado',
          type: 'text'
        },
        {
          label: 'Email',
          type: 'text'
        },
        {
          label: 'Casada',
          type: 'text'
        }
      ];
      break;
    case 2:
      formFields = [
        {
          label: 'Igreja',
          type: 'text'
        },
        {
          label: 'Jovem',
          type: 'text'
        }
      ];
      break;
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const renderForms = () => {
    return formFields.map((field, f) => (
      <FormInput 
        key={f} 
        type={field.type} 
        label={field.label}
        value={formData[field.label]}
        onChange={handleInputChange}
      />
    ));
  }

  const saveData = () => {
    console.log(formData);
  }

  const beforeSection = () => {
    if (!section) return;
    setSection(section - 1);
  }

  const nextSection = () => {
    if (section == 2) return;
    saveData();
    setSection(section + 1);
  }

  return (
    <main className={styles.formTemplate}>
      {renderForms()}
      <div className={styles.chevronControllers}>
        <FaAngleLeft onClick={beforeSection} className={!section ? styles.disabled : ''}/>
        <FaAngleRight onClick={nextSection} className={section == 2 ? styles.disabled : ''}/>
      </div>
    </main>
  );
}