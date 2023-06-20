import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../css/reset.css';

//codigo para abertura da tela cadastro confirmado
const CadastroConfirma = ({ onClose }) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.login-overlay') === null) {
                onClose();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    const handleButtonClick = () => {
        onClose();
    };

    return (
        <div className="login-overlay" >
            <div className="login-box">
                <h2>Enviamos um pedido de confirmação para o seu e-mail.
                    Este procedimento de verificação é importante para
                    garantir a segurança dos seus dados.</h2>
                <div className="bttconfirma">
                    <a href="#">Não recebeu o e-mail?</a><br />
                    <a href="#">Reenviar Email</a>
                    <a href="/" onClick={handleButtonClick} >
                        <button className="google-btn"><Link to="/" >Inicio</Link></button>
                        
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CadastroConfirma;