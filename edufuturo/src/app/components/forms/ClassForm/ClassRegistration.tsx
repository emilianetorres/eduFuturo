// pages/RegisterClass.tsx

import React from 'react';
import ClassRegistrationForm, { ClassForm } from '../components/ClassRegistrationForm';

const RegisterClassPage: React.FC = () => {
  const handleClassRegistration = (classData: ClassForm) => {
    // Aqui você pode lidar com os dados do formulário.
    // Por exemplo, você pode enviá-los para uma API ou armazená-los em um estado.
    console.log(classData);
  };

  return (
    <div>
      <h1>Registro de Turma</h1>
      <ClassRegistrationForm onSubmit={handleClassRegistration} />
    </div>
  );
};

export default RegisterClassPage;