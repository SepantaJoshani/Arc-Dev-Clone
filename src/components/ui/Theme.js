import { createTheme } from "@material-ui/core/styles";


const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey='#868686'

export const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      red:'#b92b27'
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: { main: `${arcOrange}` },
    
  },
  typography:{
    tab:{
      fontFamily:'Raleway',
      textTransform:'none',
      fontWeight:700,
      fontSize:'1rem',
    },
    estimate:{
      fontFamily:'pacifico',
    fontSize:'1rem',
    textTransform:'none',
    color:'white',
  
    },
    h2:{
      fontFamily:'Raleway',
      fontWeight:'700',
      fontSize:'2.5rem',
      color:arcBlue,
      lineHeight:'1.5'

    },
    h3:{
      fontFamily:'Pacifico',
      fontSize:'2.5rem',
      color: arcBlue
    },
    h4:{
      fontFamily:'Raleway',
      fontSize:'1.75rem',
      color: arcBlue,
      fontWeight:700
    },
    subtitle1:{
      fontSize:'1.25rem',
      fontWeight:300,
      color: arcGrey
    }
  }
});
