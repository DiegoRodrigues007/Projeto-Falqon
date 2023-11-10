import IconLabelButtons from "../ButtonSend/index";
import styles from "../Header/Header.module.scss";
import React from "react";



const handleSave = () => {
    console.log("salvou")
}

const Header = () => {

    return(

        <header className={styles.container}>
            <h1>Lista de tarefas</h1>
            <div>
                <label>Identificador:</label>
                <input type="text" placeholder="Digite o identificador"></input>
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome"></input>
                <label>Descrição:</label>
                <input type="text" placeholder="Digite a tarefa"></input>
                <button type="Submit"  onClick = { handleSave}>Enviar</button>
                
            </div>
        </header>




    )
    
}

export default Header;
