import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Authorization from './pages/Auth/Authorization';
import Home from './pages/MainPage';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import './App.css';
import { RequareAuth } from './hoc/RequaireAuth';
import BossPage from './pages/BossPage';
import { Paths } from './paths';
// const theme = extendBaseTheme({
//     components: {
//         Button: {
//             background: '#314659',
//             _hover: {
//                 background: '#24323E',
//             },
//         },
//     },
// });

function App() {
    return (
        <ChakraProvider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Authorization />} />
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
                    ></Route>
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
}

export default App;
