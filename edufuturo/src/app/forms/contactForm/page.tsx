"use client";
import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: (data: { numbers: string[], isWhatsApp: boolean }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [numbers, setNumbers] = useState(['']);
  const [isWhatsApp, setIsWhatsApp] = useState(false);

  const handleNumberChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      setNumbers(numbers.map((number, i) => (i === index ? value : number)));
    }
  };

  const addNumber = () => {
    setNumbers([...numbers, '']);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ numbers, isWhatsApp });
  };

  return (
    <form onSubmit={handleSubmit}>
      {numbers.map((number, index) => (
        <input
          key={index}
          type="text"
          value={number}
          onChange={e => handleNumberChange(index, e.target.value)}
          placeholder="Contact Number"
        />
      ))}
      <button type="button" onClick={addNumber}>
        Add Number
      </button>
      <label>
        <input
          type="checkbox"
          checked={isWhatsApp}
          onChange={e => setIsWhatsApp(e.target.checked)}
        />
        WhatsApp
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;