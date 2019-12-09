import React from 'react';
import './style.scss';
import Emoji from './emoji';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Intro = () => {
  const data = useStaticQuery(graphql`
    query introQuery {
      profile: file(absolutePath: { regex: "/profile.PNG/" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div id="top" className="columns is-gapless">
      <div className="column">
        <div className="biz-card">
          <div id="linkedincard" className="box media">
            <h4 className="vertical-text media-left text-shadow">
              <span>PAULIE RODRIGUEZ</span>
            </h4>
            <div className="about-me media-content media-right">
              <figure className="image is-128x128">
                <Img
                  fixed={data.profile.childImageSharp.fixed}
                  className="is-rounded"
                  imgStyle={{
                    borderRadius: '50%'
                  }}
                />
              </figure>
              <div className="content">
                <p className="intro">
                  Full-Stack Software Developer <Emoji emoji="👋" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
