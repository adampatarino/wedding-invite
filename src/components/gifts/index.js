import React from 'react'

const Gifts = (props) => {

  return (
    <div className="">
      <section className="section-honeyfund" style={{ backgroundImage: 'url("assets/Vancouver.jpg")' }}>
        <div className="container"> 
          <p className="subtitle">We're Honeymooning in Vancouver, BC</p>
          <a className="button is-medium" href="https://paypal.me/pools/c/8BuvtNBCrb" target="_blank">Chip In</a>
        </div>
      </section>

      <section className="section section-lp">
        
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="subtitle lp-title">Help us start our record collection<br/>Bring us your favorite LP</p>
            </div>
            <div className="column">
              <img className="lp" src="/assets/vices.jpg" />
            </div>
          </div>          
        </div>
      </section>
      
    </div>
  )
}

export default Gifts
 