// utils/fetchAddress.ts
export const fetchAddress = async (zip: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${zip}/json/`);
    const data = await response.json();
    return data;
  };