import React from 'react'
import { Data } from '../helpers/Data';

import '../styles/Menu.css';
// Doğru import
import MenuItem from './MenuItem';



export const Menu = () => {
  return (
    <div className='menu'>
<h1 className='manuTitle'>Burgerlerimiz</h1>
<div className='menuList'>
    {Data.map((menuItem,key)=>{

        return (
            <MenuItem 
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
            />
        )
    })

    }
</div>
    </div>
  )
}
