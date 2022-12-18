import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';



import './App.css';


// declaring our app function, setting it equal to a function then pointing it to an open code block where react will come in
// In React, we use 'return' then add html. The html will be interpreted into the DOM
//
const App = () => {
  return (
    //box component that we imported will be used here, I'm setting its width to 400 px
    // I need to look up what the route component does again becaue I need to nest them
    <Box width = "400px">
      Navbar
      <Routes>
        <Route path="/" element = { Home />) } />
        <Route path ="/excercise/:id" />
      </Routes>
    </Box>
  )
}

export default App