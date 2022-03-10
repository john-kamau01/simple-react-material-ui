import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Toolbar, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />    
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>    
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant="h2" align='center' color='textPrimary' gutterBottom>
                            Photo Album    
                        </Typography>  
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Consectetur adipiscing elit ut aliquam purus sit. Suspendisse ultrices gravida dictum fusce ut placerat. Eu augue ut lectus arcu. In est ante in nibh mauris cursus mattis molestie. Felis bibendum ut tristique et egestas quis ipsum.     
                        </Typography>

                        <div className={classes.buttons}>
                            <Grid container justifyContent='center' spacing={2}>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See My Photos    
                                    </Button>    
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Upload Photo    
                                    </Button>    
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="sm">
                    <Grid container spacing={4}>
                    {cards.map((card)=>(
                          <Grid item key={card} xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                              <CardMedia 
                                  className={classes.cardMedia}
                                  image="https://source.unsplash.com/random"
                                  title="Image title"
                              />   
                              <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5">
                                      Heading
                                  </Typography>
                                  <Typography>
                                      This is a description for this card. You can edit it. 
                                  </Typography>   
                              </CardContent>
                              <CardActions>
                                  <Button size="small" color="primary">View</Button>
                                  <Button size="small" color="primary">Edit</Button>
                              </CardActions>
                          </Card>    
                      </Grid>            
                    ))}
                          
                    </Grid>
                </Container>
            </main>
            <footer className='footer'>
                <Typography variant="h6" align="center" color="textPrimary" gutterBottom>Footer</Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>Copyright &copy; 2022</Typography>
            </footer>
        </>
    )
}

export default App;