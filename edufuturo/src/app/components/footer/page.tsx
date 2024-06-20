"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Informações de contato:</h3>
                <p>Endereço: 123 Rua Fictícia, Cidade Fictícia</p>
                <p>Telefone: (00) 1234-5678</p>
                <p>Email: exemplo@ficticio.com</p>
            </div>
            <div>
                <h3>Redes sociais:</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/ficticio">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/ficticio">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ficticio">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;