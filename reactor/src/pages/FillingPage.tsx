import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Filling from '../components/Filling'

const FillingPage = () =>{
	return (
		<Flex 
		height="100vh"
		display="flex"
		alignItems="center"
		justify='center'
		background="var(--auth-background)">
			<Filling/>
		</Flex>
	)
}

export default FillingPage