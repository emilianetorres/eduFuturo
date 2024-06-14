"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddressForm from  '../addressForm/page';
import ContactForm from '../contactForm/page';
import ClassForm from '../classForm/page';
interface SchoolForm {
  inep: string;
}

interface Props {
  onSubmit: (schoolData: SchoolForm) => void;
}

export default function SchoolRegistrationForm({ onSubmit }: Props) {
  const [inep, setInep] = useState('');

  useEffect(() => {
    if (inep) {
      axios.get(`https://api.example.com/schools/${inep}`)
        .then(response => {
          const school = response.data;
          // ... definir outros estados com dados da escola ...
          // set other states with school data
          // for example:
          // setOtherState(school.otherData);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da escola:', error);
        });
    }
  }, [inep]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ inep });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inep}
        onChange={e => setInep(e.target.value.replace(/\D/g, ''))}
        placeholder="Inep da escola"
      />
      <AddressForm />
      <ContactForm />
      <ClassForm />
      <button type="submit">Cadastrar escola</button>
    </form>
  );
}