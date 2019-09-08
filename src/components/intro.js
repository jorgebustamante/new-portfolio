import React from 'react';
import './style.scss';
import Media from './media'
const Intro = () => (
 
      <div id="top" className="columns is-gapless">
        <div className="column">
          <div className="biz-card">
            <div id="linkedincard" className="box media">
              <h4 className="vertical-text media-left text-shadow">
                PAULIE RODRIGUEZ
              </h4>
              <div className="about-me media-content media-right">
                <figure className="image is-96x96">
                  <img
                    id="linkedinpic"
                    className="is-rounded"
                    src={Media.linkedin}
                    alt="linkedin profile pic"
                  />
                </figure>
                <div className="content">
                  <p className="intro">
                    Full-Stack Software Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
);

export default Intro;
