
import styles from "../Header/Header.module.scss";
import React from "react";



const handleSave = () => {
    console.log("salvou")
}

const Header = () => {

    return(

        <header className={styles.container}>
            <h1>Lista de tarefas</h1>
            <div className={styles.containerInput}>
                <div className={styles.input}>
                    <label>Identificador</label>
                    <input type="text" placeholder="Digite o identificador"></input>
                </div>
                <div className={styles.input}>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div className={styles.input}>
                    <label>Descrição</label>
                    <input type="text" placeholder="Digite a tarefa"></input>
                </div>
            </div>
            <div className={styles.btn}>
                    <a type="Submit"  onClick = { handleSave}>Enviar</a>
                </div>
        </header>




    )
    
}

export default Header;
