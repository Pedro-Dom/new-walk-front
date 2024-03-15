"use client"

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import FormInput from "@/app/components/form-input";
import FormSelect from '../form-select';
import styles from "./form.module.scss";

export default function Form() {

  const [section, setSection] = useState(0); // Inicializando o estado de section com o valor 0
  const [formData, setFormData] = useState({
    Nome: '',
    Telefone: '',
    Idade: '',
    Casado: '',
    Filhos: '',
    Batizado: '',
    Igreja: '', 
    Jovem: ''
  });
  
  let formFields;

  switch(section) {
    case 0:
      formFields = [
        {
          label: 'Nome',
          type: 'text'
        },
        {
          label: 'Telefone',
          type: 'number'
        },
        {
          label: 'Idade',
          type: 'number'
        },
      ];
      break;
    case 1:
      formFields = [
        {
          name: 'Casado',
          label: 'É casado(a)?',
          type: 'select'
        },
        {
          name: 'Filhos',
          label: 'Possui filhos?',
          type: 'select'
        },
        {
          name: 'Batizado',
          label: 'É batizado(a)?',
          type: 'select'
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
    return formFields.map((field, f) => {
      if (field.type == 'select') {
        return renderSelect(field, f);
      } else {
        return renderInput(field, f);
      }
    });
  }

  const renderInput = (field, f) => {
    return (
      <FormInput 
        key={f} 
        type={field.type} 
        name={field.name ? field.name : undefined}
        label={field.label}
        value={formData[field.label]}
        onChange={handleInputChange}
      />
    )
  }

  const renderSelect = (field, f) => {
    return (
      <FormSelect 
        key={f} 
        label={field.label}
        value={formData[field.name]}
        onChange={handleInputChange}
        name={field.name ? field.name : undefined}
      />
    )
  }

  const saveData = async () => {
    try {
      console.log(formData)
      const response = await fetch('URL_DA_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envia os dados do formulário no estado formData
      });
  
      if (response.ok) {
        console.log('Dados salvos com sucesso!');
      } else {
        console.error('Erro ao salvar os dados.');
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
    }
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