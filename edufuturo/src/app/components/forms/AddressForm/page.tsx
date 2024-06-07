import React, { useState, useEffect } from 'react';

interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  complement: string;
  number: string;
}

interface Props {
  onSubmit: (address: Address) => void;
}

export default function AddressForm({ onSubmit }: Props) {
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => setStates(data));
  }, []);

  useEffect(() => {
    if (zip.length === 8) {
      fetch(`https://viacep.com.br/ws/${zip}/json/`)
        .then(response => response.json())
        .then(data => {
          setStreet(data.logradouro);
          setNeighborhood(data.bairro);
          setCity(data.localidade);
          setState(data.uf);
        });
    }
  }, [zip]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const address = { street, neighborhood, city, state, zip, complement, number };
    fetch('http://localhost:5000/api/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(address),
    })
      .then(response => response.json())
      .then(data => {
        onSubmit(data);
        setStreet('');
        setNeighborhood('');
        setCity('');
        setState('');
        setZip('');
        setComplement('');
        setNumber('');
      });
  };

  const handleInputChange = (value: string, setter: (value: string) => void) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (regex.test(value)) {
      setter(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={street}
        onChange={e => handleInputChange(e.target.value, setStreet)}
        placeholder="Rua"
      />
      <input
        value={neighborhood}
        onChange={e => handleInputChange(e.target.value, setNeighborhood)}
        placeholder="Bairro"
      />
      <input
        value={city}
        onChange={e => handleInputChange(e.target.value, setCity)}
        placeholder="Cidade"
      />
      <select value={state} onChange={e => setState(e.target.value)}>
        {states.map((state) => (
          <option key={state.sigla} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </select>
      <input
        value={zip}
        onChange={e => setZip(e.target.value)}
        placeholder="CEP"
      />
      <input
        value={complement}
        onChange={e => handleInputChange(e.target.value, setComplement)}
        placeholder="Complemento"
      />
      <input
        value={number}
        onChange={e => handleInputChange(e.target.value, setNumber)}
        placeholder="Número"
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
