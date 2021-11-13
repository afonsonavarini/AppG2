import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import "../App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Home() {

    const redirect = async () => {
        await history.push("/contatos")
      }
    const redirect2 = async () => {
        await history.push("/dados")
      }

    const redirect3 = async () => {
        await history.push("/recados")
      }
    let history = useHistory();
    
    const [open, setOpen] = React.useState(true);

    return (
        <div className="aba">
            <Grid container spacing={2} style={{justifyContent: 'center'}}>
            <Grid item xs={6} md={12}>
              <div className="titulo">
                <h1>Seja Bem-Vindo(a) ao Fox Cars!</h1>
              </div>
            
            </Grid>
            <Grid item xs={4} md={12}>
              <Grid container spacing={1} style={{justifyContent: 'center'}}>
              <Button color="warning" onClick={redirect}>
                Contato
              </Button>
              <Button color="warning" onClick={redirect2}>
                  Dados Cadastrados
              </Button>
              <Button color="warning" onClick={redirect3}>
                Recados
              </Button>
              </Grid>
              
            
            </Grid>
            <ImageList x={{ width: 800, height: 800 }} cols={3} rowHeight={600}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
            </Grid>
        </div>
    )
}
const itemData = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/613fJTpO8NL.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://i.pinimg.com/originals/db/2d/07/db2d07b2457a6f0a1795c0847ee87841.jpg',
    title: 'Burger',
  },
  {
    img: 'http://conteudo.imguol.com.br/c/entretenimento/4e/2020/11/19/imagem-representativa-hyundai-5-carros-que-vizinhos-tem-e-voce-nao-pode-comprar-no-brasil-1605816181060_v2_1000x1000.jpg',
    title: 'Camera',
  },
  {
    img: 'https://a-static.mlcdn.com.br/1500x1500/capa-para-cobrir-carro-forro-parcial-tamanho-g-carrhel/autopartsonline/2337/38726b5d7283a9af3863bef660983b60.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://d2snyq93qb0udd.cloudfront.net/prod/25196_social-ferrari-f8-tributo.jpg',
    title: 'Hats',
  },
  {
    img: 'https://www.treehugger.com/thmb/-wrx9EJSYW0YOC_-VYndQZU3o1o=/1000x1000/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2020__03__taycan-08d5d3ef02d547abbff61e14195f0350.jpg',
    title: 'Honey',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5a07bedae9bfdf638b589392/1510458438036-8567SIPXX6PI4GIHH4YW/campbell-boulanger-348386.jpg?format=1000w',
    title: 'Basketball',
  },
  {
    img: 'https://jaautospa.com/wp-content/uploads/2017/05/IMG_0451-1-1000x1000.jpg',
    title: 'Fern',
  },
  {
    img: 'https://images.kabum.com.br/produtos/fotos/115944/jogo-project-cars-3-ps4_1631556450_gg.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2015/12/20214133/why-vintage-cars-are-better-part-1-1476934558611-1000x1000.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.jbdublagem.com.br/wp-content/uploads/2018/01/jb-dublagem-automotivo-reposicao-2.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://www.jbdublagem.com.br/wp-content/uploads/2018/01/jb-dublagem-automotivo-reposicao-1.jpg',
    title: 'Bike',
  },
];