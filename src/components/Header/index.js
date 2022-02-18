import React from 'react';
import './index.css'
import globe from '../../images/globe.png'

export default function Header() {
  return (
    <header className='header--container'>
      <img src={globe} alt='globe' className='header--icon'/>
      <h1 className='header--title'>my travel journal</h1>
    </header>
  )
}