import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState, useLayoutEffect } from 'react'
import { storageGet } from "../services/Storage"
import { registrar } from '../services/Firebase'
import { useHistory } from "react-router-dom";
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Registro() {
  let history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")

  useLayoutEffect(() => {
    let emailStorage = storageGet("email")
    let passwordStorage = storageGet("password")
    if (emailStorage) {
      setEmail(emailStorage)
      setPassword(passwordStorage)
    }

  }, [])

  const efetuarRegistro = async () => {

    registrar(email, password)
      .then(() => history.push("/login"))
      .catch(error => setMsg(error))
  }

  const redirect = async () => {
    await history.push("/login")
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const redirect2 = async () => {
    await history.push("/recados")
  }
  const redirect3 = async () => {
    await history.push("/dados")
  }

  return (
    <div>
      <Grid container style={{ minHeight: "98vh"}}>
        <Grid item xs={12} sm={6}>
          <img 
            src="https://img1.wallspic.com/originals/3/4/8/5/6/165843-2021_dodge_challenger_muscle_car-3840x2160.jpg"
            style={{width: "100%", height: "100%", objectFit: "cover"}}
            alt="brand"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{padding: 10}}
        >
          <div />
          <div style={{display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300,}}>
            <Grid container justify="center">
              <img 
                src="https://www.toornament.com/media/file/1770739639696482304/original?v=1539198245"
                width={250}
                alt="logo"
              />
            </Grid>
            <TextField
              type="email"
              id="outlined-basic"
              label="E-mail"
              variant="standard"
              placeholder="E-mail"
              value={email}
              margin="normal"
              color="warning"
              InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              placeholder="Password"
              variant="standard"
              margin="normal"
              color="warning"
              InputProps={{ startAdornment: <InputAdornment position="start"><VpnKeyIcon /></InputAdornment> }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <Button color="warning" onClick={handleOpen}>Dicas de Segurança</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Proteja sua senha!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Recomendamos colocar no mínimo 1 letra maiúscula, números e símbolos. Lembre-se de não compartilhar sua senha com ninguém.
                </Typography>
                </Box>
            </Modal>
            <div style={{height: 26}} />
            <Button color="warning" variant="contained" size="medium" onClick={efetuarRegistro}>
              Registrar
            </Button>
            <div className="middle" style={{height: 20}}>
            {msg}
            </div>
            <Button color="warning" onClick={redirect}>
              Já tem uma conta?
            </Button>
          </div>
          <div />
          <div style={{height: 320}} />
          <Grid container spacing={2}>
            <Grid item>
              <Button color="warning" onClick={redirect2}>
                Dados Cadastrados
              </Button>
            </Grid>
            <Grid item>
              <Button color="warning" onClick={redirect3}>
                Recados
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    /*
    <Grid container spacing={1}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          type="email"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={lembreme}
                onChange={handleLembreme} />}
            label="Lembre-me"
          />
        </FormGroup>
        <Button variant="contained" size="small" onClick={efetuarLogin}>
          Login
        </Button>

      </Grid>
      <Grid item xs={3}></Grid>





    </Grid>
*/
  );
}

export default Registro;
