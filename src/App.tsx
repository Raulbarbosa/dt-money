import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Globalstyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}