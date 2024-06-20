// hooks/useSchoolData.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSchoolData = (inep: string) => {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    if (inep) {
      axios.get(`https://brasilapi.com.br/api/educacao/v1/escolas/${inep}`)
        .then(response => {
          setSchoolData(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados da escola:', error);
        });
    }
  }, [inep]);

  return schoolData;
};