import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// const Background = () => <div id="bg-image" />;
const Background = () => {
  const data = useStaticQuery(graphql`
    query backgroundQuery {
      background: file(absolutePath: { regex: "/BlueGrid_2000x.png/" }) {
        childImageSharp {
          fixed(width:2000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const Style = {
    // background: url('../images/BlueGrid_2000x.png') center center;
    opacity: '0.7',
    height: '100%',
    width: '100%',
    top:'0',
    // -webkit-background-size: cover,
    // -moz-background-size: cover,
    // -o-background-size: cover,
    // backgroundSize: 'cover',
    overflow: 'hidden',
    scrollBehavior: 'none',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    zIndex: '-1',
  };
  
  
  return (
      <div style={Style}>
    <Img
      fixed={data.background.childImageSharp.fixed}
    //   imgStyle={{
    //     background: 'center center',
    //     opacity: '0.7',
    //     height: '100%',
    //     width: '100%',
    //     top: '0',
    //     //   -webkit-background-size: 'cover',
    //     //   -moz-background-size: cover;
    //     //   -o-background-size: cover;
    //     //   background-size: cover;
    //     overflow: 'hidden',
    //     scrollBehavior: 'none',
    //     backgroundSize: 'cover',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     position: 'fixed',
    //     zIndex: '-1'
    //   }}
    />
    </div>
  );
};

export default Background;
