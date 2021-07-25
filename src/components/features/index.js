import React from 'react'

const Features = (props) => {

  return (
    
    <section className="section section-features">
      <div className="columns pt-3">
        <div className="column mb-4">
          <article className="media">
            <figure className="media-left">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z" /></svg>
            </figure>
            <div className="media-content">
              <h3 className="title is-4">Food</h3>
              <p>We won't be serving a full dinner,<br/>but will have some clutch bites: </p> 
              <p className="mt-3">Cheese & Charcuterie from <a href="https://www.goosethemarket.com">Smoking Goose</a><br />Fruit & Pastries from <a href="https://www.gallerypastryshop.com">Gallery Pastry</a></p>
            </div>
          </article>
        </div>

        <div className="column mb-4">
          <article className="media">
            <figure className="media-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.845 9.395c-.535-1.242-1.049-5.551-1.049-5.957 0-1.085.944-.494.058-3.002-.103-.291-.979-.436-1.854-.436-.875 0-1.751.145-1.854.435-.863 2.446.058 1.978.058 3.002 0 .405-.514 4.715-1.049 5.957s-2.155 1.668-2.155 4.294v8.895c0 1.332 1.155 1.417 5 1.417s5-.085 5-1.417v-8.895c0-2.626-1.621-3.051-2.155-4.293zm-3.845 4.689l.005 7.916c-.508.065-1.797.138-2.005-.183v-7.864c0-2.76 1.367-1.888 2.504-5.243-.284 1.752-.504 2.651-.504 5.374z" /></svg>
            </figure>
            <div className="media-content">
              <h3 className="title is-4">Drinks</h3>
              <p>We'll have an open bar serving:</p> 
              <p className="mt-3">Craft & Local Beer<br/>Italian Wines<br/>Non-alcoholic options</p>
            </div>
          </article>
        </div>

        <div className="column mb-4">
          <article className="media">
            <figure className="media-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.979 15.045c-1.468.978-2.168 2.263-2.231 3.955h-1.748c.069-2.346 1.1-4.186 3.153-5.497l.826 1.542zm15.36-14.045c-1.852 0-3.198.966-4.138 2.619l3.545 6.618c3.4.222 5.254-2.15 5.254-4.575 0-2.598-2.098-4.662-4.661-4.662zm-14.867 10.728l1.557 2.906 10.539-4.229-2.716-5.07-9.38 6.393zm4.765 3.773c.633.619.764 1.648.764 2.558v4.941h1.999v-5.097c0-1.776.662-3.024 1.735-4.207l-4.498 1.805z" /></svg>
            </figure>
            <div className="media-content">
              <h3 className="title is-4">Music</h3>
              <p><a href="http://premiumblendindy.com">Premium Blend</a> will be playing live to celebrate with us, Check them out:</p>
              <div class="buttons has-addons mt-4">
                <a class="button" href="https://music.apple.com/us/album/vices/1469471033" title="Premium Blend on Apple Music" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" /></svg>
                  <span className="ml-2">Apple Music</span>
                </a>
                <a class="button" href="https://open.spotify.com/artist/5RGWScCh3wVDiSrDOzX5oF?si=gpfWaTX4RL-ZjJUvmFJxjg&dl_branch=1" title="Premium Blend on Spotify" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" /></svg>
                  <span className="ml-2">Spotify</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Features
 