import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Honors from "./pages/Honors";
import { ThemeProvider } from "./components/theme-provider";

function App() {

  // Page Routes. Required later for production build
  let routes = <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="honors" element={<Honors />} />
    </Route>
  </>

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
