import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SerieCard from '../componentes/SerieCard';

function Listas() {  

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lista = searchParams.get('l');
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Lógica para buscar as séries da categoria selecionada do servidor
    // Você pode fazer uma requisição ao servidor e atualizar o estado com os dados retornados
    
    const buscarlista = async () => {
      try {
        // Fazer a requisição ao servidor para obter as séries da categoria selecionada
        const response = await fetch(`/api/series?categoria=${lista}`);
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error('Vazio:', error);
      }
    };

    buscarlista();
  }, [lista]);

  return (
    <main>
      <br />
      <br />
      <h1>{lista}</h1>
      <br />
      <br />
      <section className="bloco-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <section key={index}><SerieCard /></section>
            ))}
          </section>
    </main>
  );
}

export default Listas;