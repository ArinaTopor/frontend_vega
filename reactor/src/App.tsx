import React from 'react';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Home from './pages/MainPage';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
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
                    <Route path="/authorization" element={<Authorization />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </HashRouter>
        </ChakraProvider>
    );
}

export default App;
