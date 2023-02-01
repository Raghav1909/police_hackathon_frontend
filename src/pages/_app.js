import '@/styles/globals.css'
import {createMuiTheme, ThemeProvider} from "@mui/material";
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Urbanist'].join(','),
  }
});
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
