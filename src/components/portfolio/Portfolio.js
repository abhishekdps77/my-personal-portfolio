import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/prtofolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG1} alt="" />
        </div>
          <h3>Cuisine Bharat</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abhishekdps77/Cuisine-Bharat" className='btn' target="_blank">Github</a>
          <a href="https://abhishekdps77.github.io/Cuisine-Bharat/" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG6} alt="" />
        </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG5} alt="" />
        </div>
          <h3>News Monkey</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abhishekdps77/News-Monkey-ReactJS" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG4} alt="" />
        </div>
          <h3>Covid Tracker</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abhishekdps77/CovidWatch" className='btn' target="_blank">Github</a>
          <a href="https://abhishekdps77.github.io/CovidWatch/" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG3} alt="" />
        </div>
          <h3>IMDb Clone</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abhishekdps77/IMDb" className='btn' target="_blank">Github</a>
          <a href="https://abhishekdps77.github.io/IMDb/" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG2} alt="" />
        </div>
          <h3>Weather Lens</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/abhishekdps77/Weather-Lens-App" className='btn' target="_blank">Github</a>
          <a href="https://abhishekdps77.github.io/Weather-Lens-App/" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio