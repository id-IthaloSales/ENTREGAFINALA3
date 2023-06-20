import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import '../css/footer.css';
import '../css/header.css';
import '../css/main.css';
import '../css/reset.css';

import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Footer() {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <div id="footer_content">
        <div id="footer_contacts">
          <h1>It's all about your dreams.</h1>
          <div id="footer_social_media">
            <a href="#" className="footer-link" id="instagram">
              <FaInstagram size={25} color="purple" />
            </a>
            <a href="#" className="footer-link" id="facebook">
              <FaFacebook size={25} color="blue" />
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <FaWhatsapp size={25} color="green" />
            </a>
          </div>
        </div>
        <ul className="footer-list">
          <li>
            <Link to="/"onClick={handleButtonClick} >INICIO</Link>
          </li>
          <li>
            <DropdownButton title="GÊNEROS">
              <Dropdown.Item as={Link} to="/pesquisar?q=Ação"onClick={handleButtonClick}>Ação</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Aventura"onClick={handleButtonClick}>Aventura</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pesquisar?q=Comédia"onClick={handleButtonClick}>Comédia</Dropdown.Item>
              {/* Adicione mais opções de gêneros aqui */}
            </DropdownButton>
          </li>
          <li>
            <a>
              <DropdownButton title="LISTAS">
                <Dropdown.Item as={Link} to="/listas?l=Minha lista" onClick={
                  
                }>Minha lista</Dropdown.Item>
                <Dropdown.Item as={Link} to="/listas?l=Favoritos" onClick={handleButtonClick}>Favoritos </Dropdown.Item>
                <Dropdown.Item as={Link} to="/listas?l=Assistidos" onClick={handleButtonClick}>Assistidos </Dropdown.Item>
                <Dropdown.Item as={Link} to="/listas?l=Lançamentos" onClick={handleButtonClick}>Lançamentos</Dropdown.Item>
              </DropdownButton>
            </a>
          </li>
          <li>

            <a>
              <DropdownButton title="PLATAFORMAS">
                <Dropdown.Item as={Link} to="/pesquisar?q=Netflix" onClick={handleButtonClick}>Netflix</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=Amazon Prime" onClick={handleButtonClick}>Amazon Prime</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=GloboPlay" onClick={handleButtonClick}>GloboPlay</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=HBO" onClick={handleButtonClick}>HBO</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=Disney" onClick={handleButtonClick}>Disney</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=Star+" onClick={handleButtonClick}>Star+</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=Apple TV" onClick={handleButtonClick}>Apple TV</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pesquisar?q=Crunchyroll" onClick={handleButtonClick}>Crunchyroll</Dropdown.Item>
              </DropdownButton>
            </a>
          </li>
          {/*<li>
              <a href="./perfil.html" className="footer-link">PERFIL</a>
              </li>*/}
        </ul>
        <div id="footer_subscribe">
          <h3>Subscribe</h3>
          <p>
            Digite seu e-mail para ser notificado sobre nossas notícias!
          </p>
          <div id="input_group">
            <input type="email" id="email" />
            <button>
              <MdMail size={25} />
            </button>
          </div>
        </div>
      </div>
      <div id="footer_copyright">
        &#169; 2023 all rights reserved
      </div>
    </footer>
  );
}

export default Footer;
