import { Routes, Route, HashRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import './App.css';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Layout } from './components/Layout'

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'medium',
                p: '1.5',
                borderRadius: '2px',
            },
            variants: {
                brand: {
                    bg: '#314659',
                    color: '#fff',
                    _hover: {
                        bg: '#24323E',
                    },
                },
                additionally: {
                    bg: '#D9D9D9',
                    p: '1.5',
                    color: '#314659',
                    border: '1.8px solid #B1B1B1',
                    _hover: {
                        bg: '#B1B1B1',
                    },
                },
            },
        },
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='' element={<Home />} />
                        <Route
                            path={Paths.workerMain}
                            element={
                                <RequareAuth>
                                    <Home />
                                </RequareAuth>
                            }
                        />
                        <Route
                            path={Paths.adminMain}
                            element={
                                <RequareAuth>
                                    <BossPage />
                                </RequareAuth>      
                            }
                        />
                        <Route
                            path={Paths.nomenclature}
                            element={
                                    <BossPage />
                            }
                        />
                        <Route
                            path={Paths.products}
                            element={
                                    <BossPage />
                            }
                        />
                        <Route
                            path={Paths.tasksBoard}
                            element={
                                    <BossPage />
                            }
                        />
                        <Route
                            path={Paths.options}
                            element={
                                    <BossPage />
                            }
                        />
                    </Route>
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
}

export default App;
