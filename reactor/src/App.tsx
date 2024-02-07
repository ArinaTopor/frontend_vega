import React from 'react';
import './App.css';
import {Layout} from './components/Layout'
import {Box} from '@chakra-ui/react';

function App() {
    return (
        <Box>
            <Layout role='admin'/>
        </Box>
    )
}

export default App;
