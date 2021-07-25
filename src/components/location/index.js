import React from 'react'

const Location = (props) => {

  return (
    <div>
      <section className="section section-location" style={{backgroundImage: 'url("assets/skydeck2.jpg")'}}>
        <div className="container">
          <p className="subtitle has-text-right">830 Massachusetts Ave,<br/>Indianapolis, IN 46204</p>
        </div>
      </section>

      <section className="section-directions">
        <div className="columns is-gapless">
          <div className="column">
            <figure class="image is-5by4">
              <iframe className="has-ratio" src="https://snazzymaps.com/embed/326760" width="100%" height="400px" style={{ border: 'none', overflow: 'hidden'}} scroll="no" scrolling="no" allowfullscreen="false" title="location"></iframe>
            </figure>
            <a class="button is-primary is-medium" href="https://www.google.com/maps/d/u/0/edit?mid=16NHT3mtm38k9nDk3RwA9XbkyXP6V2dUz&usp=sharing" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </div>
          <div className="column">
            <figure class="image is-5by4">
              <img className="has-ratio" src="assets/hotel.jpg" alt="bottleworkshotel"/>
            </figure>
            <a class="button is-white is-medium" href="https://reservations.travelclick.com/112191?groupID=3269574" target="_blank" rel="noopener noreferrer">Book a Room</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
 