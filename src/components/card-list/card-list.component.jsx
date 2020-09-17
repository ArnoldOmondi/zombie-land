import React from 'react'
import Card from '../card/card.component'
import './cardlist.styles.css'
const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)

export default CardList
