"use client";
import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          <li>
            <Link href="/forms/classForm">Formulário de Classe</Link>
          </li>
          <li>
            <Link href="/forms/schoolRegistrationForm">Formulário de Registro Escolar</Link>
          </li>
          <li>
            <Link href="/forms/homeSchoolForm">Formulário de Registro de Escola Origem</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};