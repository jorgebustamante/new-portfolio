import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import { Parallax } from 'react-scroll-parallax';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './projectCard';

const ProjectsWide = () => {
  const data = useStaticQuery(graphql`
    query {
      githubfinder: file(absolutePath: { regex: "/githubfinder.PNG/" }) {
        ...projectImage
      }
      scs: file(absolutePath: { regex: "/SCS.JPG/" }) {
        ...projectImage
      }
      tradesies: file(absolutePath: { regex: "/tradesies.png/" }) {
        ...projectImage
      }
      kodachrome: file(absolutePath: { regex: "/kodachrome.PNG/" }) {
        ...projectImage
      }
      bamazon: file(absolutePath: { regex: "/bamazon1.PNG/" }) {
        ...projectImage
      }
      todo: file(absolutePath: { regex: "/todo.PNG/" }) {
        ...projectImage
      }
    }
  `);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    centerMode: true,
    centerPadding: '10px',
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: true,
          speed: 500,
          centerMode: true,
          centerPadding: '10px',
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: true,
          speed: 500,
          centerMode: true,
          centerPadding: '10px',
          adaptiveHeight: true
        }
      }
    ]
  };
  return (
    <Parallax className="custom-class" x={[10, -10]}>
      <div className="columns">
        <div
          id="Projects"
          className="column is-mobile is-10 is-offset-1 is-offset-1-mobile is-10-mobile"
        >
          <div className="scrolling-wrapper">
            <Slider {...settings}>
              <Card
                fluid={data.kodachrome.childImageSharp.fluid}
                title="Kodachrome Gallery"
                description="An image gallery built with React + Gatsby.js
              featuring archived kodachrome slides, inspired by Swiss design style."
                github="https://github.com/jorgebustamante/swiss-ui"
                deploy="https://jorgebustamante.github.io/swiss-ui/"
              />
              <Card
                fluid={data.githubfinder.childImageSharp.fluid}
                title="React Github Finder"
                description="A web app featuring React hooks and the Github API to search for users
                 on github and view relevant profile information in a concise manner."
                github="https://github.com/jorgebustamante/react-github-finder"
                deploy="https://rodriguez-react-github-finder.netlify.com/"
              />
              <Card
                fluid={data.scs.childImageSharp.fluid}
                title="Seattle Coffee Search"
                description="Neighborhood oriented Cafe locator utilizing Yelp
              and Google Maps API."
                github="https://github.com/macdhollister/Seattle-Coffee-Search"
                deploy="https://macdhollister.github.io/Seattle-Coffee-Search/"
              />
              <Card
                fluid={data.tradesies.childImageSharp.fluid}
                title="Tradesies"
                description=" Community oriented Web app for Trading and
              bartering goods."
                github="https://github.com/Jostrange/Project2Giraffe"
                deploy="https://tradesies-app.herokuapp.com/"
              />

              <Card
                fluid={data.bamazon.childImageSharp.fluid}
                title="Backend Merchant"
                description="A backend node.js merchant application. Logically
              replicating the purchase and inventory function of
              online shopping."
                github="https://github.com/jorgebustamante/bamazon/"
              />
              <Card
                fluid={data.todo.childImageSharp.fluid}
                title="Sequelize To-Do list"
                description="To-do list logic web app using Sequelize for
              queries and Handlebars.js for templating."
                github="https://github.com/jorgebustamante/sequelize-todo-list"
              />
            </Slider>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ProjectsWide;
