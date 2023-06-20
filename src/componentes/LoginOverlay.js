import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa'


const LoginOverlay = ({ onClose }) => {


//Codigo de validação de loguin do usuario
  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  //Codigo para fechar tela overlay caso cliques fora da tela
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

  //codigo usado nos botoes para fechar tela apos clique
  const handleButtonClick = () => {
    onClose();
  };
    // Redirecionar para a página Home
  const handleGoogleButtonClick = () => {  
    // Fechar a tela de login
    handleButtonClick();
  };
  return (
    <div className="login-overlay" >
      <div className="login-box">
        <h2>Login</h2>
        <Formik
          className="login-form"
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="Email" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
            {/*Outro campo*/}
            <div className="form-group">
              <Field name="password" className="form-field" placeholder="Senha" />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Entrar
            </button>
          </Form>
        </Formik>

        <div className="bttncadastro">
          <Link to="/cadastro" onClick={handleButtonClick}>
            NÃO POSSUI UMA CONTA? CADASTRE-SE
          </Link><br />

          <a className="google-btn" onClick={handleGoogleButtonClick}>
            <span className="icon"><FaGoogle size={20} /></span>
            <Link to="/" >Google</Link>
          </a><br />
          <a className="facebook-btn" onClick={handleGoogleButtonClick}>
            <span className="icon"><FaFacebook size={20} color="white" /></span>
            <Link to="/" >Facebook</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginOverlay;