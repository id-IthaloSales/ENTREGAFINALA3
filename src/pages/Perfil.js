import React from 'react';

function Perfil() {
  return (
    <main>
      <section className="conteiner-perfil">
        <div className="box-usuario">
          <h1>Perfil</h1>
          <br />
          <a href="./favoritos.html">Minha Lista</a>
          <br />
          <a href="./favoritos.html">Favoritos</a>
          <br />
          <a href="./favoritos.html">Assistidos</a>
          <br />
          <a href="./telapesquisa.html">Plataforma</a>
          <br />
          <a href="./telapesquisa.html">Gêneros</a>
          <br />
        </div>
        <section className="conteiner avatar">
          <figure>
            <img src="./imagens/Perfil/avatar.svg" alt="Imagem do usuário" />
            <figcaption>Nome do usuário</figcaption>
          </figure>
        </section>
      </section>
    </main>
  );
}

export default Perfil;