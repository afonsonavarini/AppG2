import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { saveCarro } from '../services/Firebase';
import { useHistory } from "react-router-dom";

export default function Carros() {
    let history = useHistory();
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState()


    const save = async () => {

        let objeto = {
            nome: nome,
            descricao: descricao,
            preco: preco
        }
        try {
            await saveCarro(objeto)
            history.push("/loja")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
                <Grid item xs={6} md={12}>
                    <div className="titulo">
                        <h1>Crie seu anúncio aqui</h1>
                    </div>
                </Grid>
        </Grid>
            <div style={{height: 20}} />
            <Grid container rowSpacing={3} spacing={2} style={{justifyContent: 'center'}}>
                <Grid item xs={0}>
                    <Grid container spacing={1} style={{justifyContent: 'center'}}>
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Nome do Veículo"
                                variant="outlined"
                                value={nome}
                                size="small"
                                color="warning"
                                fullWidth
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Descricão"
                                variant="outlined"
                                value={descricao}
                                size="small"
                                fullWidth
                                color="warning"
                                multiline
                                rows={4}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                type="number"
                                id="outlined-basic"
                                label="Preço (Reais)"
                                variant="outlined"
                                value={preco}
                                size="small"
                                color="success"
                                fullWidth
                                rows={4}
                                onChange={(e) => setPreco(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" size="small" onClick={save}>
                                ANUNCIAR
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </div>
    )
}
