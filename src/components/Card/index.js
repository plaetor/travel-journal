import React from 'react';
import './index.css';
import pin from '../../images/location-pin.png'

export default function Card(props){
  return (
    <section className='card--section'>
      <img src={`../../images/${props.imageUrl}`} alt='destination' className='card--image'/>{console.log(props.imageUrl)}
      <article className='card--info'>
        <div className='card--location'>
          <img src={pin} alt='location icon' className='card--location_icon'/>
          <h4>{props.location} <a href={props.mapUrl} className='card--location_link'>view on google maps</a></h4>
        </div>
        <h2>{props.title}</h2>
        <p className='card--dates'>{props.startDate + '-' + props.endDate}</p>
        <p>{props.description}</p>
      </article>
    </section>
  )
}