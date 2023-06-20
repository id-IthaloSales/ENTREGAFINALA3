import React from 'react';
import { Link } from 'react-router-dom';

import netflix from '../assets/netflix.jpg';
import amazonprime from '../assets/AmazonPrime.jpg';
import globoPlay from '../assets/GloboPlay.jpg';
import disney from '../assets/Disney.jpg';
import hbomax from '../assets/AmazonPrime.jpg';
import appletv from '../assets/AppleTV.jpg';
import crunchroll from '../assets/Crunchroll.jpg';
import starplus from '../assets/Starplus.jpg';
import telecine from '../assets/TeleCine.jpg';
import Recomendados from '../componentes/Recomendados';

import '../css/reset.css';
import SerieCard from '../componentes/SerieCard';

function Home() {

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>

      <section className="container">
        <h1>Recomendados</h1>
        <section className="blococard">
          {Array.from({ length: 4 }).map((_, index) => (
            <Recomendados />))}
        </section>
        <section className="container-minhalista">
          <h1>Minha Lista</h1>
          <Link to="/listas?l=Minha Lista" className="bt_vermais" onClick={handleButtonClick}>
            Ver mais
          </Link>
          <section className="bloco-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <section key={index}><SerieCard /></section>
            ))}
          </section>
        </section>

        <section className="container-lancamento ">
          <h1>Lançamentos</h1>
          <Link to="/listas?l=Lançamentos" className="bt_vermais" onClick={handleButtonClick}>
            Ver mais
          </Link>
          <section className="bloco-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <section key={index}><SerieCard /></section>
            ))}
          </section>
        </section>

        <section className="container-porplat ">
          <h1>Encontre séries por plataforma</h1>
          <br />
          <section className="bloco-listplat">
            <section>
              <Link to="/pesquisar?q=Netflix" onClick={handleButtonClick}>
                <img src={netflix} alt="Netflix" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=AmazonPrime" onClick={handleButtonClick}>
                <img src={amazonprime} alt="AmazonPrime" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=GloboPlay" onClick={handleButtonClick}>
                <img src={globoPlay} alt="GloboPlay" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=Disney" onClick={handleButtonClick}>
                <img src={disney} alt="Disney" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=HboMax" onClick={handleButtonClick}>
                <img src={hbomax} alt="HboMax" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=Starplus" onClick={handleButtonClick}>
                <img src={starplus} alt="Starplus" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=TeleCine" onClick={handleButtonClick}>
                <img src={telecine} alt="TeleCine" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=Crunchroll" onClick={handleButtonClick}>
                <img src={crunchroll} alt="Crunchroll" />
              </Link>
            </section>
            <section>
              <Link to="/pesquisar?q=AppleTV" onClick={handleButtonClick}>
                <img src={appletv} alt="AppleTV" />
              </Link>
            </section>
          </section>
        </section>
        <section className="container-porgenero ">
          <h1>Encontre séries por gênero</h1>
          <br />
          <section className="bloco-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <section key={index}><SerieCard /></section>
            ))}
          </section>
        </section>

        <section className="container-favoritos ">
          <h1>Favoritos</h1>
          <Link to="/listas?l=Favoritos" className="bt_vermais" onClick={handleButtonClick}>
            Ver mais
          </Link>
          <section className="bloco-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <section key={index}><SerieCard /></section>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;