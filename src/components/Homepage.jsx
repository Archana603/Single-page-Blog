

import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Homepage = () => {
  return (
   
    
<div>

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dijik's Blog
        </Typography>
        <Button color="inherit">Blog</Button>
        
        <Button color="inherit">Latest</Button>
        
        <Button color="inherit">Contact</Button>
        
        <Button color="inherit">Subscribe</Button>
      </Toolbar>
    </AppBar>
  </Box>

  <div className='un-nav'>
    <br /><br />
<Typography style={{color:"white",fontFamily:"cursive",fontSize:"25px"}}>A blog that people will actually want to read</Typography>
<br /><br />
<div>
<input type='text' placeholder='Search.'/>
<Button variant="contained">SEARCH</Button>
<br /><br /><br />
</div>
  </div>
  <div className='blog-container'>
   
<div className='blog-box'>
  <div className='blog-img'>
<img src="data:image/jpeg;base64,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" alt="blog" />
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>18 july 2021 / web design</Typography>
<a href='#' className='blog-title'>Inspired by travelling caravans of the bygone eras  serene escape from the daily rut.</a>
<Button variant="contained">Read More</Button>
  </div>
</div>

<div className='blog-box'>
  <div className='blog-img'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_bUb1W5_mCyE14VOfbRyzeldc1-9ns0OZg&usqp=CAU" alt="blog" />
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>23 Aug 2022 / Travel</Typography>
<a href='#' className='blog-title'>Inspired by travelling caravans of the bygone eras  serene escape from the daily rut.</a>
<Button variant="contained">Read More</Button>
  </div>
</div>

<div className='blog-box'>
  <div className='blog-img'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzweRVptNF6rroyS71Y8g0onFJJyS_lgt2g&usqp=CAU" alt="blog" />
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>03 May 2020/ Indian foods</Typography>
<a href='#' className='blog-title'>Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease. </a>
<Button variant="contained">Read More</Button>
  </div>
</div>


<div className='blog-box'>
  <div className='blog-img'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NXhEl3f_V-CYBnmDq4QqIT8vzUk-rNq4Lw&usqp=CAU" alt="blog" />
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>11 apr 2021/ Childrens Day</Typography>
<a href='#' className='blog-title'>Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease. </a>
<Button variant="contained">Read More</Button>
  </div>
</div>


<div className='blog-box'>
  <div className='blog-img'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz00noIqlskleCn0IJt19_J_fQmnMYEwMHKw&usqp=CAU" alt="blog" />
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>03 May 2020/ Indian fashion</Typography>
<a href='#' className='blog-title'>Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease. </a>
<Button variant="contained">Read More</Button>
  </div>
</div>



<div className='blog-box'>
  <div className='blog-img'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxhv_X5HUgio7GyJG4oIax4HcA3zn6Oct1Q&usqp=CAU" alt="pic"/>
  </div>
  <div className='blog-text'>
<Typography style={{color:"#f33c3c"}}>03 May 2020/ Indian foods</Typography>
<a href='#' className='blog-title'>Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease.nature love more. </a>
<Button variant="contained">Read More</Button>
  </div>
</div>

  </div>
  <footer>
	<div class="container">
		<p style={{color:"blue"}}>Copyright@ M-SoftTouch</p>
	</div>
</footer>
  </div>
  
  );
        
  }


export default Homepage;