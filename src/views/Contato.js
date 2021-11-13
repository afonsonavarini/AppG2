import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { deleteContato, getContato, saveContato} from '../services/Firebase';
import { useHistory } from "react-router-dom";

export default function Contato() {
    let history = useHistory();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState()
    const [mensagem, setMensagem] = useState()


    const save = async () => {

        let objeto = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        }
        try {
            await saveContato(objeto)
            history.push("/home")
        } catch (error) {
            console.log(error)
        }
    }

    const redirect = async () => {
        await history.push("/home")
      }


    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
            <Grid item xs={6} md={12}>
            <div className="titulo">
                <h1>Coloque seu contato aqui!</h1>
            </div>
            <div style={{height: 20}} />
            </Grid>
            </Grid>
            <Grid container spacing={1} style={{justifyContent: 'center'}}>

                <Grid item xs={6}>
                    <Grid container spacing={1} style={{justifyContent: 'center'}}>
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Nome"
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
                                label="E-mail"
                                variant="outlined"
                                value={email}
                                size="small"
                                fullWidth
                                color="warning"
                                rows={4}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Assunto"
                                variant="outlined"
                                value={assunto}
                                size="small"
                                fullWidth
                                color="warning"
                                rows={4}
                                onChange={(e) => setAssunto(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                type="text"
                                id="outlined-basic"
                                label="Mensagem"
                                variant="outlined"
                                value={mensagem}
                                size="small"
                                fullWidth
                                multiline
                                color="warning"
                                rows={4}
                                onChange={(e) => setMensagem(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={8} mb={8}>
                            <Button variant="contained" size="small" onClick={save}>
                                Salvar Contato
                            </Button>
                            <Button color="warning" onClick={redirect}>
                                Voltar
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </div>
    )
}
