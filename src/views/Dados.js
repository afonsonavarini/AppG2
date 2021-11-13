import React, { useState, useLayoutEffect } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { deleteContato, getContato, saveContato } from '../services/Firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";


export default function Dados() {

    const [contato, setContato] = useState([])

    useLayoutEffect(() => {
        pegarContato()
    }, [])


    const pegarContato = async () => {
        let dados = await getContato()
        setContato(dados)
    }

    const deletar = async (id) => {
        await deleteContato(id)
        await pegarContato()
    }

    const save = async (nome, email, assunto, mensagem) => {

        let objeto = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        }
        try {
            await saveContato(objeto)
            history.push("/contato")
        } catch (error) {
            console.log(error)
        }
    }

    const redirect = async () => {
        await history.push("/home")
      }
    
      let history = useHistory();

    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
            <Grid item xs={6} md={12}>
            <div className="titulo">
                <h1>Dados Cadastrados</h1>
            </div>
            <div style={{height: 20}} />
            </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Nome</TableCell>
                                    <TableCell align="left">E-mail</TableCell>
                                    <TableCell align="left">Assunto</TableCell>
                                    <TableCell align="left">Mensagem</TableCell>
                                    <TableCell align="left">Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contato.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.nome}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.assunto}</TableCell>
                                        <TableCell align="left">{row.mensagem}</TableCell>
                                        <TableCell align="left">
                                            <Button color="error" onClick={() => deletar(row.id)}>REMOVER</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{height: 20}} />
                    <Button color="warning" variant="contained" onClick={redirect}>Voltar</Button>
                </Grid>
            </Grid>
        </div>
    )
}
