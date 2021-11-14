import React from 'react'
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

export default function Footer() {
    
    return (

        <div className="footer">
        <Div>{"2021 © Todos os Direitos Reservados - Afonso Navarini (afonsonavarini@hotmail.com)"}</Div>
        </div>
        )
    }
