import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Kabsa A
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Study Corner
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Hello and Welcome! My Study Corner is a Kanban Board inspired Notes App.
              Turn your to-do list into a productivity instrument. 👋
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
      </div>
      <div align='center'>
      <TextField
          id="filled-multiline-static"
          label="Notes - To Do"
          multiline
          rows={20}
          defaultValue="Class Notes"
          variant="filled"
          className="textfield"
        />
        <TextField
          id="filled-multiline-static"
          label="Notes - In Progress"
          multiline
          rows={20}
          defaultValue="Class Notes"
          variant="filled"
          className="textfields"
        />
        <TextField
          id="filled-multiline-static"
          label="Notes - Done"
          multiline
          rows={20}
          defaultValue="Class Notes"
          variant="filled"
          className="textfieldc"
        />
      </div>
      <div>



      </div>
    </Box>
       
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          My Study Corner 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          I'm Kabsa and this was built for MLH Late Night Hacks!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}