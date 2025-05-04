import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@pages/Layout'
import { Home } from '@pages/Home'
import { ThemeProvider } from '@components/theme-provider'
import { appRoutes } from '@config/routes'

function App() {
    const routes = (
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {appRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })}
            </Route>
        </>
    )

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>{routes}</Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
