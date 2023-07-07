import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu.js';
import BasicForm from './components/BasicForm.js'
import List from './components/List.js';

export default function App() {
	// const [openForm, setOpenForm] = React.useState(false);
	// const handleOnClick = (page) => {
	// 	console.log('open');
	// 	if(!openForm) { 
	// 		setOpenForm(true)
	// 	} else {
	// 		setOpenForm(false)
	// 	}
	// };
	//onClick={handleOnClick} 
  return (
    <Container maxWidth="sm">
	<AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
	<List />
    </Container>
  );
}
