import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useLayoutEffect } from 'react'
import { storageSave, storageRemove, storageGet } from "../services/Storage"
import { login } from '../services/Firebase'
import { useHistory } from "react-router-dom";
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Login() {
  let history = useHistory();
  const [lembreme, setLembreme] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useLayoutEffect(() => {
    let emailStorage = storageGet("email")
    let passwordStorage = storageGet("password")
    if (emailStorage) {
      setEmail(emailStorage)
      setPassword(passwordStorage)
      setLembreme(true)
    }

  }, [])

  const handleLembreme = (e) => {
    setLembreme(e.target.checked)

    if (e.target.checked === true) {
      storageSave("email", email)
      storageSave("password", password)
    } else {
      storageRemove("email")
      storageRemove("password")
    }
  }


  const efetuarLogin = async () => {

    login(email, password)
      .then(() => history.push("/home"))
      .catch(error => console.log(error))
  }

  const redirect = async () => {
    await history.push("/registro")
  }
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
            src="https://i.pinimg.com/originals/3b/3c/2b/3b3c2b3e2472fa8e4b1c8921155ac66f.jpg"
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
            <div />
              <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="warning"
                  checked={lembreme}
                  onChange={handleLembreme} />}
              label="Lembre-me"
            />
            <div style={{height: 20}} />
          </FormGroup>
            <Button color="warning" variant="contained" size="medium" onClick={efetuarLogin}>
              Login
            </Button>
            <div style={{height: 20}} />
            <Button color="warning" onClick={redirect}>
              Não tem uma conta?
            </Button>
          </div>
          <div />
          <div style={{height: 320}} />
          <Grid container spacing={2}>
            <Grid item>
              <Button color="warning" onClick={redirect3}>
                Dados Cadastrados
              </Button>
            </Grid>
            <Grid item>
              <Button color="warning" onClick={redirect2}>
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

export default Login;
