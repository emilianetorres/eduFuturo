"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddressForm from "../addressForm/page";
import ContactForm from "../contactForm/page";
import ClassForm from "../classForm/page";
import { useSchoolData } from "../../utils/useSchoolData";

interface SchoolForm {
  inep: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface Props {
  onSubmit: (schoolData: SchoolForm) => void;
}

export default function SchoolRegistrationForm({ onSubmit }: Props) {
  const [inep, setInep] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const schoolData = useSchoolData(inep);

  useEffect(() => {
    if (schoolData) {
      setName(schoolData.name);
      setAddress(schoolData.address);
      setPhone(schoolData.phone);
      setEmail(schoolData.email);
    }
  }, [schoolData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ inep, name, address, phone, email });
  };

  return (
    <main>
    <h1>Formulário de Registro de Escola</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Inep da escola
        <input
          type="text"
          value={inep}
          onChange={(e) => setInep(e.target.value.replace(/\D/g, ""))}
          placeholder="Inep"
        />
      </label>
      <label>
        Nome da escola
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da escola"
        />
      </label>
      <label>
        Endereço da escola
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Endereço da escola"
        />
      </label>
      <AddressForm states={[]} />
      <ContactForm
        onSubmit={function (data: {
          numbers: string[];
          isWhatsApp: boolean;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ClassForm
        onSubmit={function (classData: ClassForm): void {
          throw new Error("Function not implemented.");
        }}
      />
      <button type="submit">Cadastrar escola</button>
    </form>
    </main>
  );
}
