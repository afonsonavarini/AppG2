import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import React, {useState, useLayoutEffect} from "react";
import {storageSave, storageRemove, storageGet} from "./services/Storage";

function App() {

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
    }
    else {
      storageRemove("email")
      storageRemove("password") 
    }
  }

  return (
    <div>
      <br />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <TextField type="email"
        id="standard-basic"
        label="User"
        variant="standard" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6}>
      <TextField type="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6}>
      <Button variant="text">LOGIN</Button>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6}>
      <FormGroup>
        <FormControlLabel checked={lembreme} control={<Checkbox defaultChecked />} label="Lembrar" onChange={handleLembreme}/>
      </FormGroup>
      </Grid>
      
    </Grid>
    </div>
  );
}

export default App;
