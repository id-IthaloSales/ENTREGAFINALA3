
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

import '../css/cadastro.css';

import React, { useState, useEffect } from 'react';


import CadastroConfirma from "../componentes/CadastroConfirma";

function Cadastro() {

  // Lógica para Tela Overlay
  const [isCadOpen, setIsCadOpen] = useState(false);
  const handlecadClick = () => {
    setIsCadOpen(true);
  };
  const handlecadCloseLogin = () => {
    setIsCadOpen(false);
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/cadastro", {
      email: values.email,
      password: values.password,

    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({

    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <main>
      <section className="conteiner-cadastro container">
        <h1>CADASTRE-SE</h1>
        <br />
        <Formik
          initialValues={{}}
          onSubmit={handleRegister}
          validationSchema={validationsRegister}
        >
          <Form className="register-form">
            <div className="register-form-group">
              <Field name="email" className="form-field" placeholder="Email" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
            <div className="form-group">
              <Field name="password" className="form-field" placeholder="Senha" />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
            <div className="form-group">
              <Field
                name="confirmation"
                className="form-field"
                placeholder="Confirmar senha"
              />
              <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error"
              />
            </div>

            <div className="login_button_header">

              <a href="#" onClick={handlecadClick}>
                <button className="button" id="bttcadastrar" type="submit">
                  Cadastrar
                </button>
                {isCadOpen && <CadastroConfirma onClose={handlecadCloseLogin} />}
              </a>
            </div>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
export default Cadastro;