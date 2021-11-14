import React, { useState, useLayoutEffect } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { deleteCompra, getCompra, getCarro, saveCarro } from '../services/Firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function CarrosLista() {

    const [carro, setCarro] = useState([])

    useLayoutEffect(() => {
        pegarCarro()
    }, [])


    const pegarCarro = async () => {
        let dados = await getCompra()
        setCarro(dados)
    }

    const deletar = async (id) => {
        await deleteCompra(id)
        await pegarCarro()
    }

    const save = async (nome, descricao, preco) => {

        let objeto = {
            nome: nome,
            descricao: descricao,
            preco: preco
        }
        try {
            await saveCarro(objeto)
        } catch (error) {
            console.log(error)
        }
    }

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

    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
                <Grid item xs={6} md={12}>
                    <div className="titulo">
                        <h1>Seu carrinho</h1>
                    </div>
                    <div style={{height: 20}}/>
                    <div style={{height: 20}}/>
                </Grid>
        </Grid>
        <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Compra efetuada com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar open={open2} autoHideDuration={3000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
                Produto removido do carrinho!
                </Alert>
            </Snackbar>
            </Stack>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                            <TableHead >
                                <TableRow>
                                    <TableCell align="left">Nome</TableCell>
                                    <TableCell align="left">Descrição</TableCell>
                                    <TableCell align="left">Preço</TableCell>
                                    <TableCell align="left">Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {carro.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.nome}</TableCell>
                                        <TableCell align="left">{row.descricao}</TableCell>
                                        <TableCell align="left">R${row.preco}</TableCell>
                                        <TableCell align="left">
                                            <Button color="error" onClick={() => save(row.nome, row.descricao, row.preco) && deletar(row.id) && handleClick2()}>REMOVER</Button>
                                            <Button onClick={() => deletar(row.id) && handleClick()}>COMPRAR</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
