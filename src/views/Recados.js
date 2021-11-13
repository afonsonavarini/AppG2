import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Recados() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const redirect = async () => {
    await history.push("/home")
  }

  let history = useHistory();

  return (
    <div className="aba">
    <Grid container spacing={2} style={{justifyContent: 'center'}}>
    <Grid item xs={6} md={12}>
      <div className="titulo">
        <h1>Recados</h1>
      </div>
      <div style={{height: 20}} />
      </Grid>
    </Grid>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Update na página de registros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Update Registros 1.0 »
            
            Adicionado opções de recados, dados e contato.
            e removido o checkbox "Lembre-me".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Cuidado com anúncios!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recentemente recebemos reports de alguns anúnicos maliciosos.
            Diversos usuários relataram anúncios falsos com preços absurdos e
            portanto reforçamos para ter cuidado os mesmos.

            Pedimos que por gentileza contatem nossa equipe o mais rápido possível
            se se depararem com algum anúncio deste tipo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Update na sessão de recados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Update Recados BETA »

            Adicionado página de recados no site aberto, 
            versionamento de páginas e funções e
            página de login atualizada.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{height: 20}} />
      <Button variant="contained" color="warning" onClick={redirect}>
        Voltar
      </Button>
    </div>
  );
}