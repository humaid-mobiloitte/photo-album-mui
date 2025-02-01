import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar,Container} from '@mui/material'
// jis jis cheez ki zaroorat pd skti hai, wo sb import kr lo @material-ui/core se
import {PhotoCamera} from '@mui/icons-material'
//ye icon hai...iska import alag se hoga
import styles from './styles'

const cards=[1,2,3,4,5,6,7,8,9]

function App() {
  return (
    <>
      <CssBaseline/>
      {/* CssBaseline ko component k top pr likh do taki default css styling mil ske */}
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera sx={styles.icons}/>
          <Typography variant='h6'> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Container maxWidth='sm' sx={styles.container}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo similique libero. Ipsum deleniti eum enim sit voluptas animi repellendus itaque perferendis nulla atque, maxime dolor assumenda ab odit architecto.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary' sx={styles.buttons}>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' sx={styles.buttons}>
                    See my videos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container maxWidth="md" sx={styles.cardGrid}>
            <Grid container spacing={4}>
              {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={4}>
                  {/* xs=extra space....12 for full width of mobile */}
                  <Card sx={styles.card}>
                    <CardMedia
                      sx={styles.cardMedia}
                      image='https://www.codepwr.com/wp/wp-content/uploads/2024/01/React-Props-vs-State-980x490.jpg'
                      title='Image Title'
                    />
                    <CardContent sx={styles.cardContent}>
                      <Typography gutterBottom variant='h5'>
                        Lorem ipsum.
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, praesentium.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>View</Button>
                      <Button size='small' color='primary'>Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
      </main>
      <footer style={styles.footer}>
        {/* The sx prop is only supported by MUI components (like <Typography>, <Button>, <Container>, etc.), but <footer> is a regular HTML element. The sx prop does not work on standard HTML elements...so this won't work:-
        <footer sx={styles.footer}> */}
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corrupti obcaecati amet laudantium qui rem.
        </Typography>
      </footer>
    </>
  )
}

export default App
