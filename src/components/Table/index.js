import styles from '../Table/Table.module.scss';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function createData(identificador, name, descricao, opcoes) {
  return {identificador, name, descricao, opcoes };
}

const rows = [
  createData('02262','Diego', "Atualizar aplicativo"),
  createData('01211', "Maria Eduarda", "Fazer teste automatizado" ),
  createData('35289', "Severino", "Desenvolver o site da empresa"),
  createData('74423', "Carlos", "Criar layout do site"),
  createData('00014', "Isabela", "Configurar banco de dados"),
  createData('02005', "Gustavo","Criar banner"),
];

const handleRemove = () =>{
  const {identificador} = this.props;
  this.props.remove(identificador);

}

export default function BasicTable( setDataEdit, identificador, name, descricao){


    
        return (
            <TableContainer component={Paper} className={styles.container} align="center">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.row}>Identificador</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Descrição</TableCell>
                    <TableCell align="center">Opções</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.identificador}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" >
                        {row.identificador}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center" >{row.descricao}</TableCell>
                      <TableCell align="center"  >{row.opcoes }
                      
                      <EditIcon className={styles.edit} onClick = {() => setDataEdit({identificador, name, descricao})} />
                      <DeleteForeverIcon className={styles.del} onClick = {() => handleRemove()}/>
                      
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    
  
}

