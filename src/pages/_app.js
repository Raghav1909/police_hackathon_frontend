import '@/styles/globals.css'
import {createMuiTheme, ThemeProvider} from "@mui/material";
import SideBar from "../../components/SideBar";
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Urbanist'].join(','),
  }
});
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <div style={{
      display:"flex"
    }}>
      <SideBar/>
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
}
