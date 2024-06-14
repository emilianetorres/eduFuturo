"use client";
import React, { useState } from 'react';

interface ClassForm {
  year: number;
  stage: string;
  className: string;
  shift: string;
  series: string;
  capacity: number;
}

interface Props {
  onSubmit: (classData: ClassForm) => void;
}

export default function ClassRegistrationForm({ onSubmit }: Props) {
  const [year, setYear] = useState(0);
  const [stage, setStage] = useState('');
  const [className, setClassName] = useState('');
  const [shift, setShift] = useState('');
  const [series, setSeries] = useState('');
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ year, stage, className, shift, series, capacity });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ano:
        <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} />
      </label>
      <label>
        Estágio:
        <input type="text" value={stage} onChange={e => setStage(e.target.value)} />
      </label>
      <label>
        Nome da Classe:
        <input type="text" value={className} onChange={e => setClassName(e.target.value)} />
      </label>
      <label>
        Turno:
        <input type="text" value={shift} onChange={e => setShift(e.target.value)} />
      </label>
      <label>
        Série:
        <input type="text" value={series} onChange={e => setSeries(e.target.value)} />
      </label>
      <label>
        Capacidade:
        <input type="number" value={capacity} onChange={e => setCapacity(Number(e.target.value))} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}