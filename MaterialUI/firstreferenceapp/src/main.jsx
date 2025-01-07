import * as React from 'react'
import ReactDOM from 'react-dom'
import {StyledEngineProvider, createTheme, ThemeProvider} from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const theme = createTheme({
  //This is how we can override existing ootb styles
  //gbcolor is not working in this way.  need to check why.  commented out otherwise it will apply to all button tag.  since we are overriding MuiButton, root class which gets applied to all buttons.
// components: {
//   MuiButton: {
//     styleOverrides: {
//       root: { //the root css class specified in button API page.  sytle in root will get applied to all buttons.
//       color:"green",
//       bgcolor:"pink",
//       borderRadius:50,
//       height:"15rem",
//       width:"10rem"
//       }
//     }
//   }
// },

  typography: {
    //This is how can can create a global style class, inder an ootb style class (typography in this example)
    // it is not taking BGColor from below css. need to check    
    blueTextClass: {
      color:"green",
      bgcolor:"pink",
      borderRadius:50,
      height:"15rem",
      width:"10rem"
    }
  }

}) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider>
<ThemeProvider theme={theme}> 
    <App />
</ThemeProvider>
</StyledEngineProvider>
  </StrictMode>,
)
