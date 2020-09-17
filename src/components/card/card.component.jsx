import React from 'react'
import './card.style.css'

const Card = ({ monster }) => (
  <div className='card-container'>
    <img
      alt='Creepy Robbots'
      src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}
    />
    <h2>{monster.name}</h2>
    <h4>{monster.email}</h4>
  </div>
)

export default Card
