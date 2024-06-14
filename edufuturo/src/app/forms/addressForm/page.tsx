"use client";
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

interface State {
  sigla: string;
  nome: string;
}

interface Props {
  states: State[];
}

const ZIP_API_URL = (zip: string) => `https://viacep.com.br/ws/${zip}/json/`;

export default function AddressForm({ states }: Props) {
  const [address, setAddress] = useState<Address>({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    zip: '',
    complement: '',
    number: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | string, setter: (value: string) => void) => {
    if (typeof e === 'string') {
      setter(e);
    } else {
      setter(e.target.value);
    }
  };

  const setZip = (zip: string) => {
    setAddress(prevAddress => ({ ...prevAddress, zip }));
  };

  const setComplement = (complement: string) => {
    setAddress(prevAddress => ({ ...prevAddress, complement }));
  };

  const setNumber = (number: string) => {
    setAddress(prevAddress => ({ ...prevAddress, number }));
  };

  const setStreet = (street: string) => {
    setAddress(prevAddress => ({ ...prevAddress, street }));
  };

  const setNeighborhood = (neighborhood: string) => {
    setAddress(prevAddress => ({ ...prevAddress, neighborhood }));
  };

  const setCity = (city: string) => {
    setAddress(prevAddress => ({ ...prevAddress, city }));
  };

  const setState = (state: string) => {
    setAddress(prevAddress => ({ ...prevAddress, state }));
  };

  useEffect(() => {
    if (address.zip.length === 8) {
      fetch(ZIP_API_URL(address.zip))
        .then(response => response.json())
        .then(data => {
          setAddress(prevAddress => ({
            ...prevAddress,
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
          }));
        })
        .catch(console.error);
    }
  }, [address.zip]);

  return (
    <form>
      <input
        value={address.zip}
        onChange={e => handleInputChange(e.target.value, setZip)}
        placeholder="CEP"
      />
      <input
        value={address.complement}
        onChange={e => handleInputChange(e.target.value, setComplement)}
        placeholder="Complement"
      />
      <input
        value={address.number}
        onChange={e => handleInputChange(e.target.value, setNumber)}
        placeholder="Number"
      />
      <input
        value={address.street}
        onChange={e => handleInputChange(e.target.value, setStreet)}
        placeholder="Street"
      />
      <input
        value={address.neighborhood}
        onChange={e => handleInputChange(e.target.value, setNeighborhood)}
        placeholder="Neighborhood"
      />
      <input
        value={address.city}
        onChange={e => handleInputChange(e.target.value, setCity)}
        placeholder="City"
      />
      <select
        value={address.state}
        onChange={e => handleInputChange(e.target.value, setState)}
      >
        {states?.map(state => (
          <option key={state.sigla} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </select>
      <button type="submit">Salvar</button>
    </form>
  );
}