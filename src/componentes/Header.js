
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import '../css/header.css';
import '../css/main.css';
import '../css/reset.css';

import { FiLogIn } from 'react-icons/fi';
import { BiSearchAlt2 } from "react-icons/bi";

import logo from '../assets/logo.png';
import LoginOverlay from './LoginOverlay';

function Header() {

  const toggleSidebar = () => {
    // Lógica para alternar a barra lateral
  };
  //////////////////////////////////////////////////////////////////////////////

  // Lógica para Tela Overlay
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };
  /////////////////////////////////////////////////////////////

  const [pesquisar, setpesquisar] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pesquisar) return;

    navigate(`/pesquisar?q=${pesquisar}`, { replace: true });
    setpesquisar("");
  };
  ////////////////////////////////////////////////////////////////////

  return (
    <header>
      
      <div className="header" id="header">
        <button onClick={toggleSidebar} className="btn_icon_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="logo_header">
          <img src={logo} alt="Logo" className="img_logo_header" />
        </div>

        <div className="navigation_header" id="navigation_header">
          <button onClick={toggleSidebar} className="btn_icon_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <a>
            <Button as={Link} to="/" >INICIO</Button>
          </a>

          <a>
            <DropdownButton title="GÊNEROS">
              <Dropdown.Item as={Link} to="/pesquisar?q=Ação">Ação</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Aventura">Aventura</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Comédia">Comédia</Dropdown.Item>
              {/* Adicione mais opções de gêneros aqui */}
            </DropdownButton>
          </a>
          <a>
            <DropdownButton title="LISTAS">
              <Dropdown.Item as={Link} to="/listas?l=Minha lista">Minha lista</Dropdown.Item>
              <Dropdown.Item as={Link} to="/listas?l=Favoritos" >Favoritos </Dropdown.Item>
              <Dropdown.Item as={Link} to="/listas?l=Assistidos" >Assistidos </Dropdown.Item>
              <Dropdown.Item as={Link} to="/listas?l=Lançamentos" >Lançamentos</Dropdown.Item>
            </DropdownButton>
          </a>
          <a>
            <DropdownButton title="PLATAFORMAS">
              <Dropdown.Item as={Link} to="/pesquisar?q=Netflix">Netflix</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Amazon Prime">Amazon Prime</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=GloboPlay">GloboPlay</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=HBO">HBO</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Disney">Disney</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Star+">Star+</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Apple TV">Apple TV</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Crunchyroll">Crunchyroll</Dropdown.Item>
            </DropdownButton>
          </a>
          {/**/}
        </div>

        <div className="login_button_header">
          <a href="#" onClick={handleLoginClick}><FiLogIn size={25} /></a>

          <a href="#" onClick={handleLoginClick}>
            Entrar
          </a>
          
          {isLoginOpen && <LoginOverlay onClose={handleCloseLogin} />}

        </div>
      </div>
      <nav className="container-pesquisar">
        <button type="submit" className="btxbusca">
          <BiSearchAlt2 />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="form-pesquisa">
            <input
              type="text"
              id="txtBusca"
              placeholder="Pesquisar..."
              onChange={(e) => setpesquisar(e.target.value)}
              value={pesquisar}
            />
          </div>
        </form>
      </nav>
    </header>
  );
}

export default Header;