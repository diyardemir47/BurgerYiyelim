import React from 'react'
import {Link} from 'react-router-dom';
import BannerBurger from '../assets/banneryeni.jpg';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${BannerBurger})`}}>

        <div className='order'>
            <Link to='/menu'> <button>Sipariş Ver</button></Link>
           
        </div>
    </div>
  )
}
