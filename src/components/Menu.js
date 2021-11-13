import React from 'react'
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { logoff } from '../services/Firebase'
import Button from '@mui/material/Button';  
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddShoppinCart from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

export default function Menu() {
    let history = useHistory();
    const efetuarLogoff = () => {
        logoff()
            .then(() => history.push("/"))
    }


    const [value, setValue] = React.useState(0);

    return (
        <Box position="center">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => history.push("/home")}   />
        <BottomNavigationAction label="Anunciar" icon={<AddIcon />} onClick={() => history.push("/carros")}   />
        <BottomNavigationAction label="Carrinho" icon={<AddShoppinCart />} onClick={() => history.push("/carroslista")} />
        <BottomNavigationAction label="Comprar" icon={<MonetizationOn />}  onClick={() => history.push("/loja")}/>
        <BottomNavigationAction label="Logoff" icon={<LogoutIcon />}  onClick={efetuarLogoff}/>
        
      </BottomNavigation>
    </Box>
        
        
        /*
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Button
                    onClick={() => history.push("/home")}
                    variant="outlined">Home</Button>
            </Grid>

            <Grid item xs={12}>
                <Button
                    onClick={() => history.push("/carros")}
                    variant="outlined">Cadastro de Crimes</Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    onClick={() => history.push("/carroslista")}
                    variant="outlined">Visualizar Crimes</Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    onClick={() => history.push("/loja")}
                    variant="outlined">Loja</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined">Amigos</Button>
            </Grid>
            <Grid item xs={12}>
                <Button color="error" variant="contained" onClick={efetuarLogoff}>Logoff</Button>
            </Grid>
        </Grid>
        
      */

    )
}
