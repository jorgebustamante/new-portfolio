import React from 'react';
import './style.scss';
import Media from './media'
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

const Intro = () => (
  
 
      <div id="top" className="columns is-gapless">
        <div className="column">
          <div className="biz-card">
            <div id="linkedincard" className="box media">
              <h4 className="vertical-text media-left text-shadow">
                PAULIE RODRIGUEZ
              </h4>
              <div className="about-me media-content media-right">
                <figure className="image is-128x128">
                {/* <Img id='linkedinpic' className='is-rounded' fixed={data.file.childImageSharp.fixed} /> */}
                  <img
                    id="linkedinpic"
                    className="is-rounded"
                    src={Media.Profile}
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
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "profile.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 128, height: 128) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

export default Intro;
