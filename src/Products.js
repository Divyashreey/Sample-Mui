import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';

export default function Products() {
  return (
    
      <div 
      className="Card" 
      style={{ 
      paddingTop: '300px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '50px', 
      }} 
      > 
      <Grid container spacing={3}> 
      {/* First Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginBottom:'80px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn C 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions>
      <a href="/c"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn JAVA 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/java"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions>
      </Card> 
      </Grid> 
      
      {/* Second Row */} 
      
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9A AAA+VBMVEX/////1lH/zD42dao2a5g2b5//0ko2cKE2dalFaIb/yjr/1E3/0Uj/zkJAZYQ2c6V wh57R2N4yaJX//vv/67H89ulxjaNSe5/r7/P2+Puxx9orV3k7YYG4wsxhfpeNn7D/4YytuMOPq scXZZ//24XvzWD336L80Fr/zk65yNZUdI/zxDWfssIpbKH+78XAzNXW4OnzwCqBlqr/9+Imcav /4pf/9txQcIzJ1eJ6nsBPgq09dKBYh66rvM+ds8lqkLQUWo28z96Hqcb+1nfR4e324a/2vQtWi bfxwkaUtNFwm8H568r82IT/23vxxiikwdkAWpb7113+3XJz//J9AAAKYElEQVR4nO2dC1fiuha AKz4gOASKyKQ0pdYXiq2tZRQYR533Oer1zh3//4+5SR/QN0WEAs231jmLllKa7+xk76TFw3EMB iMAMggDG/oSZX1BK4Nxfnd3N/xM2N7e1ura7efb2y/Du7vzc+ZwEsb94YNG2faxVSd8HR6eC1l f4DLzc/hQ1IoOPn0W9frtcJD1NS4v97eaVnXlFbfD/qjA86yvclm516qUYkT4bbn+iMC7rK9zO WlptjwtIfooX5m/CNAXy171y/Dpczj6vHxl41+YwZFl794QhJ+HWmTqcPvvl6yvdQn5Q/uudm+ 9Fp60BH1bdSPja11CLH1Vp64ztITOu1UfZnupS4g19GkP7ma1GJs6iL6PWV7pUoKqJaLvyd2sJ kYf0xcEFa2iz9kSjlj0TQWyhj7tm731PTj2bTN9idj6ircDRF63AomXRd8kkDNjq36/ux8ml81
      MXxhHX7VIV6tiVlyYvlhcfdWIBQOmbyIhfazzTgPSSoHlqoRJL9MXBFVH3HpghUs6hFYk9xqLv hlAX9nYNwMG0xcLat0fTmAYl3n3Lk9H9PaybkkGDB4eSiVt00KrakGKWlzitfUdlwsO5c6Py6w bs2h+fi4RbeSfks0o747qlvjCb6Sv7HLxK+v2LJbWJyvqxvpK1cRZR6hwcaLP9fc7V/4ebXuzR p8n/n7nqP+2SptBfROib6K+8lkv61YtCuOfzZC+YPRNWnEJ6Su/ZN2sBYGGn+ah73dOwm+wuRn WF+68ySsuYX1Xp1k3bCEIj58i9M2aOgj/Zt2yhWCU0kXfVIWLRS4mH4NPUfreIfrK11k3bQF4+ +4MhUvvNazvJOu2LQDhaTNN9CVm3geOa9hTXp++Tg56L/o0u74Wx51G6MtD5Wyk1Rc/9NUFbv8 4Ql+hkXXj5s83r77NlPr8ifee457PCmF95RxUfq1ofekLl/otCb6XcpS+/2TduPnztJkq+mILl 3odkeC7KkTpO866cfOnFK0vZeFS3/pocNx+pxCp70fWjZs/Wrroiwq+er3+8RBRe+VofWfrv+g 3QZ91m2N7OxB7dapu62Go0ofCRwMf0xfQpxUf71qt8xjsn6U+vxQqTF+EPk37Y0z6yeR+46xQY frCqaN01EKT5PWOOzvEHtMXjj7t0ZLXu7w+iePf3YoN0xfSR39putf4b+XDzq7NDuGDS8UH0xf UR3+OtX/yYYOwu+sRGKkwv/q+RE7aqkPSc5//7m4wfcn8idRXJDXJzatt7+36fuxn3bq5E7lko B3Satix93Z9OZjzGlH6jkjXbWxszKovBzc70FFY3+ZnEnwHuzPry8F6n/AQ1qc9kpHvw8zRd3a TdePmj+9Om6PvCJGKb3dmfXm4VRTMHe+oLwdDn/8pg/fVt/5lC+d7wOp99V1l3bLF0JqPvpw8Y eV7yOUd9f3OQ+Lggrn33fQdZN2uRTH4Zw76rnKROCz+vL++q+uc9F2Odt/31neVg8WWMcKj9q7 6rjo5eLjKg9B6OkqrL3LF3ifw4jhf9gjo2/fqkfPzv//F6qtcRHDl56Jxk6ee6yKgEVyMvo1f+ ynIT9KIJUZfDpag3oUYfZd7kWR9tUtHzNjXuT6IIBcrU1MRoy8q2ZbLnayvdumYpu4rMH1BmL6 ZYPpmYqK+Cp1fFJi+aCbpq3Qae1zvhemLZoK+SscuoE8LTF8UE/TtOL+36nUKTF8EE/T9dR492 ztl+qJI1ld5dSe/DaYvkufEZ1zc6Nu/pvpy8Ouhaen9TUwdzk3cHv1ZQnn9HyKdmr3GTlLhsmE p23+hwXeR9bUuIzeviXVf5eC598v6UUeFBV8UI3/Rk7YKmXVQeazrxvD8OvnJ+kLnOo83NlJxc 1DZTdZXPrlkS82x7F++EoGx+spnp7m7IzkdvcuXiw+R+gpXF41c/pHX6djrXf69qFR2fHm3XL4 47bE7kinZv2mcnIyir/N63GP5gsFg5AakSFlfwgqjNnEt62tYYWqY6ZuBGoRM39uh+ib9aRJGL EzftAiGPv5/FzN906K2RWW0wfRNiwgx0/d2RBDQl+G1rCBM30wwfTPB9AURkMHrOu//w4bI8B0 hWG8KgmDpQ87f8RvpEyiB01pn1XkU/XXB71tVkK7WIMZYBDLvNkjglVrbc4zUVlX6nqSqGMCma jbtCLT1kaNViuQ1hSQTiOS0uKnwvq/jFRlDEYsQqvpcG7YIBMm0GolFDHFfcfwZbYy9+mRyAHE jkGMBAFQ2tvYTfU2OV/uiSE8iNscRa5iQnJCclfy7OxjtRpJMDqa7MQQYKisegEgGGANV53leb 2Po+kNNCD36BJlYo6GlmDUIQNs0Tdl6g2x15a4omrJqAuKj7fpDNQxwk5xWNzGEXXe0RE1AJEv k24hzSD6x2quFyCRtlpyBDJFYArq7P1KfICARQNMQRmMfID5MngyNAt8m5zKdT3QxEGWrLwtSG 8K+3X8F8l+opttdXBhQf2ZoZFwleEB7nwvqk0CxvIT0QVsfZ2VeedTliD4yhDmbPPVkv7zDnqO Ie2hrpXlnHG8S+XDbNy6uGjwZyMb6OAk7zYuLPi5cuLTH8UOPsu0QMV3ecxToW/v9+jiwZvqML gQifaF3U+vz1H0qdPQZpEvL4/06cGIxoI/KXyd9JGMAkbZT74KEzhunj0i39ZluuDmn7QNYo0k 
      loE/F66WPU7Cjrw/eEH0jfTSsvFU32d+nOWnd9ZGi2JIjgbfoG3j0Nb0VHQlq60Prro9En5U8r aQ43p1SHy1dXH0m54GWRyqXC33A1efZP6U+koH8+lSnjsmBvlH0eVJnytQRG31Un5oDfaon+jx e3pA6QvpyMPYJdD2F+nhb6vDqq3lnY2Tsg/SNNddHZr0A04qDFi6+6Juu7msGChd3O6DPXDN9P LFk1X0G8dId7582+lTgK5s5mkoiZh1rOOe1J210JaY/3j+tPgR9kzbUh8D6zHrrs/ourc84geg D6vi4KfWRwQ72x0vJpns3eA2XDDxRRqs+0bZEF5nGaynUq3fBavRGnD7kXdbiSd+1Y3Ed9UHsL DHrIgD43H7DoGufTVsTaorEnquviUF/1Ga/vvGCFX3p+tPb0H0IcB31AYxxTUJSW6Rrp25gURU Q1HQkt0UMPfqMPumYErK3/Pqk/nj1XYZEmoEQ36Q3O5yd66iva3btO0UQ92XP2ickeyAWRQxqZ nusjxt06V05uyr0P12q9zF07QgyPcy6hdQfHSKIWPToI1/bXXV9JHXoitwlfkxF8iyTCIra7AP QVlXJsBZCR2Z5RW4DO6Ak8u74I4aiquNyT1dqJLBhVx6fVVBV1eOLbCkrfq/DzrwCvW8dagmiN 7OtV1Sf9w1eTxM1hq4oEr/i9yKTCM5546Aj4dwvZvVg+mYitT72KFAUKfXxpHQzJh+WO1LqU6A
      7G2F4SaePzBu86y8Ml1T6JDqBW+nydl5M1CcMFJnM0qCSdFBu4WGSPqQ2m12Aodhe/ecY5wIyR ZygrynSeWtXX+OJw4wgOaHz6u2aYrCUy2AwGAwGg7EI/g9ZQ8oOSk2kjgAAAABJRU5ErkJggg= =' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn PYTHON 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/python"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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 EssAAAAAElFTkSuQmCC' 
      alt="C "
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn REACT 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/react"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      {/* Third Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px',marginBottom:'80px',marginRight:'30px' }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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 UVORK5CYII=' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn PHP 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/php"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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 9O16NZk4AAAAASUVORK5CYII=' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn BOOTSTRAP 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/bootstrap"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px' ,marginRight:'30px' }}>
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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 ThlAAAAAElFTkSuQmCC' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn ANGULAR 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/angular"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px' ,marginRight:'30px' }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/png;base64,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 2ivm6ONYKAAAAAElFTkSuQmCC' 
      alt="C " 
      
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Learn TYPESCRIPT 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/typescript"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      Get Start 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      </Grid> 
      </div> 
      ); 
      }
