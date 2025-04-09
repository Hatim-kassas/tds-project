import React from 'react'
import './SloganSection.css'
import { Link } from 'react-router-dom'

export default function SloganSection({
    title, 
    showButton = false, 
    buttonText, 
    buttonLink, 
  }) 
  {

  return (
    <section className="additional-info-slogan">
      <div className={`info-content-slogan ${showButton ? 'left-button' : ''}`}>
        <h3>{title}</h3>
        {showButton ? (
            <Link to={buttonLink} target='_blank' class="know-more-button">{buttonText}</Link>
          ) : (
            null
          )
        }
        
      </div>
    </section>
  )
}
