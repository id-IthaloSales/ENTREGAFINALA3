import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SerieCard from '../componentes/SerieCard';
function Pesquisar() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const pesquisa = searchParams.get('q');
  //const [series, setSeries] = useState([]);

  useEffect(() => {
    // Lógica para buscar a série de no/categoria/plataforma selecionada 
    // Você pode fazer uma requisição ao servidor e atualizar o estado com os dados retornados e enviar para pesquisa q vai imprimir
    //na tela 

    /*const buscarpesquisa = async () => {
      try {
        // Fazer a requisição ao servidor para obter as séries da categoria selecionada
        const response = await fetch(`/api/series?categoria=${pesquisa}`);
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error('Vazio:', error);
      }
    };

    buscarpesquisa();*/
  }, [pesquisa]);

  return (
    <main>
      <br />
      <br />
      <h1>Resultado por: {pesquisa}</h1>
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

export default Pesquisar;