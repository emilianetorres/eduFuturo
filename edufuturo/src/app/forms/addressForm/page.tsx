 "use client";
import React, { useState, useEffect } from "react";
import { fetchAddress } from "../../utils/fetchAddress";

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
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    zip: "",
    complement: "",
    number: "",
  });

  const handleInputChange = (
    value: string,
    setter: (value: string) => void
  ) => {
    setter(value);
  };

  const setZip = (zip: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, zip }));
  };

  const setComplement = (complement: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, complement }));
  };

  const setNumber = (number: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, number }));
  };

  const setStreet = (street: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, street }));
  };

  const setNeighborhood = (neighborhood: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, neighborhood }));
  };

  const setCity = (city: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, city }));
  };

  const setState = (state: string) => {
    setAddress((prevAddress) => ({ ...prevAddress, state }));
  };

  useEffect(() => {
    if (address.zip.length === 8) {
      fetchAddress(address.zip)
        .then((data) => {
          setAddress((prevAddress) => ({
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
  return(
  <form>
    <label>
      CEP:
      <input
        value={address.zip}
        onChange={(e) => handleInputChange(e.target.value, setZip)}
        placeholder="CEP"
      />
    </label>
    <label>
      Complemento:
      <input
        value={address.complement}
        onChange={(e) => handleInputChange(e.target.value, setComplement)}
        placeholder="Complemento"
      />
    </label>
    <label>
      Número:
      <input
        value={address.number}
        onChange={(e) => handleInputChange(e.target.value, setNumber)}
        placeholder="Número"
      />
    </label>
    <label>
      Rua:
      <input
        value={address.street}
        onChange={(e) => handleInputChange(e.target.value, setStreet)}
        placeholder="Rua"
      />
    </label>
    <label>
      Bairro:
      <input
        value={address.neighborhood}
        onChange={(e) => handleInputChange(e.target.value, setNeighborhood)}
        placeholder="Bairro"
      />
    </label>
    <label>
      Cidade:
      <input
        value={address.city}
        onChange={(e) => handleInputChange(e.target.value, setCity)}
        placeholder="Cidade"
      />
    </label>
    <label>
      Estado:
      <select
        value={address.state}
        onChange={(e) => handleInputChange(e.target.value, setState)}
      >
        {states?.map((state) => (
          <option key={state.sigla} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </select>
    </label>
    <button type="submit">Salvar</button>
  </form>
  )
}
