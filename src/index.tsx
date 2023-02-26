import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const theme = createTheme({
  palette: {
    primary: {
      main: '#efbf1a',
    },
    secondary: {
      main: '#6a5720',
    },
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
