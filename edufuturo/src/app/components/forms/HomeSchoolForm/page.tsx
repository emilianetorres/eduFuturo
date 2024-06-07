interface HomeSchoolForm {
  inep: string;
  manager: string;
  schoolSecretary: string;
  administrativeTechnicians: string[];
}

interface Props {
  onSubmit: (schoolData: HomeSchoolForm) => void;
}

export default function SchoolRegistrationForm({ onSubmit }: Props) {
  import React, { useState } from 'react';

  const [inep, setInep] = useState('');
  const [manager, setManager] = useState('');
  const [schoolSecretary, setSchoolSecretary] = useState('');
  const [administrativeTechnicians, setAdministrativeTechnicians] = useState(['']);

  useEffect(() => {
    if (inep) {
      axios.get(`https://api.example.com/schools/${inep}`)
        .then(response => {
          const school = response.data;
          setManager(school.manager);
          setSchoolSecretary(school.schoolSecretary);
          setAdministrativeTechnicians(school.administrativeTechnicians);
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
    onSubmit({ inep, manager, schoolSecretary, administrativeTechnicians });
  }

  return (
    // ... rest of the component ...
  );
}