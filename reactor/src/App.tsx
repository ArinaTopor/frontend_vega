import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import './App.css';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
import { Layout } from './components/Layout';

function App() {
    return (
        <ChakraProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Authorization />} />
                    <Route element={<Layout />}>
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
