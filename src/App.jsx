import './App.css'
import CompClubber from './components/CompClubber'
import Preloader from './Preloader/Preloader';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Preloader /> */}
        <CompClubber />
      </ThemeProvider>
    </div>
  )
}

export default App
