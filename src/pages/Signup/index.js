import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "../Signup/Signup.module.scss";

import img from "../../Assets/img/register.svg";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <section className={styles.container}>
      <img src={img} />
      <div className={styles.content}>
       <div className={styles.containerInput}> 
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className={styles.error}>{error}</label>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <div className={styles.entrar}>
          Já tem uma conta?
          <div >
            <Link to="/" className={styles.link}>&nbsp;Entre</Link>
          </div>
        </div>
        </div>        
      </div>
    </section>
  );
};

export default Signup;
