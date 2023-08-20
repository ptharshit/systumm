import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import {useMemo } from "react";
import { CssBaseline , ThemeProvider } from "@mui/material";
import {createTheme} from '@mui/material/styles'
import {Toaster} from "react-hot-toast";
// import CssBaseLine from '@mui/material/CssBaseline'
// import { createTheme } from '@mui/system';
import { Themesettings, themeSettings } from './theme';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
// to create react app : npx create-react-app folder
function App() {
  const theme = useMemo(()=> createTheme(themeSettings(),[]));
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
