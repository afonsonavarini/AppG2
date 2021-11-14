import React, { useState, useLayoutEffect } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { saveCarro } from '../services/Firebase';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deleteCarro, getCarro, saveCompra} from '../services/Firebase';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



export default function Loja() {

    const [carro, setCarro] = useState([])

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClick2 = () => {
        setOpen2(true);
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen2(false);
      };

    useLayoutEffect(() => {
        pegarCarro()
    }, [])


    const pegarCarro = async () => {
        let dados = await getCarro()
        setCarro(dados)
    }

    const deletar = async (id) => {
        await deleteCarro(id)
        await pegarCarro()
    } 

    const add = async (id) => {
        await deleteCarro(id)
        await pegarCarro()
    } 

    const save = async (nome, descricao, preco) => {

        let objeto = {
            nome: nome,
            descricao: descricao,
            preco: preco
        }
        try {
            await saveCompra(objeto)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
                <Grid item xs={6} md={12}>
                    <div className="titulo">
                        <h1>Encontre o automóvel ideal para você!</h1>
                    </div>
                    <div style={{height: 20}}/>
                </Grid>
        </Grid>
            <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Adicionado ao Carrinho!
                </Alert>
            </Snackbar>
            <Snackbar open={open2} autoHideDuration={3000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
                Produto Removido!
                </Alert>
            </Snackbar>
            </Stack>
            {carro.map((row) => (
                 <Grid item xs={1}>
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                        <Typography sx={{ fontSize: 15 }} color="green" gutterBottom>
                            R${row.preco} 
                        </Typography>
                        <Typography variant="h5" component="div">
                        </Typography>
                            <Typography sx={{ mb: 1, fontSize: 25 }} color="text.primary">
                                {row.nome}
                            </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 16 }} variant="body2" color="text.secondary">
                                {row.descricao}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => save(row.nome, row.descricao, row.preco) && deletar(row.id) && handleClick()} >COMPRAR</Button>
                            <Button color="error" size="small" onClick={() => deletar(row.id) && handleClick2()}>REMOVER</Button>
                        </CardActions>
                     </Card>
                     </Grid>
                
                ))}
             </Grid>
            
        </div>
    )
}
