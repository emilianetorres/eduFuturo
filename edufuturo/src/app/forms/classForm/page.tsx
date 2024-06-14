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
  // ...
}