import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import NoiseImg from '../images/smolNoise.png';

const Background = () => {
  // const data = useStaticQuery(graphql`
  //   query backgroundQuery {
  //     background: file(absolutePath: { regex: "/BlueGrid_2000x.png/" }) {
  //       childImageSharp {
  //         fixed(width: 1915) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);
  const Style = {
    opacity: '0.7',
    height: '100%',
    width: '100%',
    top: '0',
    overflow: 'hidden',
    scrollBehavior: 'none',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    zIndex: '-1'
  };
  const Noise = {
    backgroundImage: `url(${NoiseImg})`,
    backgroundRepeat: 'repeat',
    position: 'fixed',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    zIndex: '99',
    opacity: '0.05',
    transition: 'ease 0.2s',
    pointerEvents: 'none',

  };

  return (
    <div>
      <div style={Noise} />
      <div id='BG' style={Style}>
        {/* <Img fixed={data.background.childImageSharp.fixed} /> */}
      </div>
    </div>
  );
};

export default Background;
