import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

import SerieCard from "../componentes/SerieCard";

import netflix from '../assets/netflix.jpg';
import amazonprime from '../assets/AmazonPrime.jpg';
import globoPlay from '../assets/GloboPlay.jpg';
import disney from '../assets/Disney.jpg';
import hbomax from '../assets/AmazonPrime.jpg';
import appletv from '../assets/AppleTV.jpg';
import crunchroll from '../assets/Crunchroll.jpg';
import starplus from '../assets/Starplus.jpg';
import telecine from '../assets/TeleCine.jpg';


function Serie() {


    const query = "Batgirl"; // Codifica o nome da série para evitar erros na URL

    const [isLiked, setIsLiked] = useState(false);
    const [isWatchlist, setIsWatchlist] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isAddlist, setAddlist] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleWatchlist = () => {
        setIsWatchlist(!isWatchlist);
    };

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleAddlist = () => {
        setAddlist(!isAddlist);
    };


    return (
        <>
            <section className="container-telaserie">
                <section className="container-gridcaract">
                    <section className="serie-card">
                        <h1 style={{ color: 'black', textAlign: 'center' }}><SerieCard /></h1>
                    </section>
                    <h1>TITULO SÉRIE</h1>
                    <p id="genero">Genêro</p>
                    <p id="tempo">🎞️Duração</p>
                    <p id="ano">📆Ano</p>
                    <br />
                    <h4>Diretor</h4>
                    <p>Diretores</p>
                    <br />
                    <h4>Elenco</h4>
                    <p>Elenco</p>
                    <br />
                    <h5>Temporadas</h5>
                    <p>X</p>
                    <h5>Episodios</h5>
                    <p>Y</p>
                </section>
                <section className="container-gridtrailer">
                    <section className="container-trailer">
                        <div>
                            <h2  style={{ color: 'aqua' }}>{query}</h2>
                            <a href={`https://www.youtube.com/results?search_query=${query}`}
                                target="_blank" rel="noopener noreferrer">
                                <IoLogoYoutube size={80} color="red" />
                            </a>
                        </div>
                    </section>
                    <h1>Sinopse</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitationLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </p>
                </section>
                <section className="conteiner-gridcategorizar">
                    <section className="container-gridopcoes">
                        <h1>ONDE ASSISTIR</h1>
                        <div>
                            <a href="{plataforma}">
                                <img src={amazonprime} alt="Nome plataforma" />
                            </a>
                            <a href="{netflix}">
                                <img src={netflix} alt="Nome plataforma" />
                            </a>
                            <a href="{glogoplay}">
                                <img src={globoPlay} alt="Nome plataforma" />
                            </a>
                        </div>
                    </section>

                    <div className="serie-actions" >
                        <button id="bttcategorizar" className={`serie-actions__button ${isLiked ? 'active' : ''}`} onClick={handleLike}>
                            {isLiked ? 'Gostei' : 'Não Gostei'}
                        </button>
                        <button id="bttcategorizar" className={`serie-actions__button ${isWatchlist ? 'active' : ''}`} onClick={handleWatchlist}>
                            {isWatchlist ? ' Assistido' : 'NãoAssistido'}
                        </button>
                        <button id="bttcategorizar" className={`serie-actions__button ${isFavorited ? 'active' : ''}`} onClick={handleFavorite}>
                            <FaStar className="serie-actions__icon" style={{ color: isFavorited ? 'gold' : 'inherit' }} />
                        </button>

                    </div>
                    <br />
                    <button id="btt-adcionar" className={`serie-actions__button ${isAddlist ? 'active' : ''}`} onClick={handleAddlist}>
                        {isAddlist ? 'Adcionar na lista' : 'X Retirar da lista'}
                    </button>
                </section>
            </section>
            <section className="container-relacionados">
                <h1>Relacionados</h1>
                <section className="bloco-listRelacionados">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <section key={index}></section>
                    ))}
                </section>
            </section>
        </>
    );
}
export default Serie;