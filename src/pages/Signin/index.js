import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import styles from "../Signin/Signin.module.scss";
import img from "../../Assets/img/Login-amico.svg";



const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <section className={styles.container}>
      <img src={img}/>
      <div className={styles.content}>

      
      <label className={styles.title}>SISTEMA DE LOGIN</label>
      <div className={styles.containerInput}>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label>{error}</label>
        <Button Text="Entrar" onClick={handleLogin} />
        <label>
          Não tem uma conta?
          <strong>
            <Link to="/signup" className={styles.link}>&nbsp;Registre-se</Link>
          </strong>
        </label>
      </div>
      </div>  
    </section>
  );
};

export default Signin;
