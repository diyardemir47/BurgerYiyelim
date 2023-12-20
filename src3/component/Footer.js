import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
<div className='socialmedia'>
<FacebookIcon/>
<InstagramIcon/>
<LinkedInIcon/>


</div>
<p>TÜM HAKLARI SAKLIDIR | BURGER YİYELİM</p>
    </div>
  )
}
