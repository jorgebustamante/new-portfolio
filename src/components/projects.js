import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import { Parallax } from 'react-scroll-parallax';
import Media from './media';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

const settings = {
       slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        centerMode: true,
        centerPadding: '10px',
        adaptiveHeight: true
  // responsive: [
    // {
    //   breakpoint: 2000,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     centerMode: true,
    //     centerPadding: '10px',
    //     adaptiveHeight: true
    //     // fade: true
    //   }
    // },
    // {
    //   breakpoint: 1200,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     centerMode: true,
    //     centerPadding: '10px',
    //     adaptiveHeight: true
    //     // fade: true
    //   }
    // },
    // {
    //   breakpoint: 900,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     centerMode: true,
    //     centerPadding: '10px',
    //     adaptiveHeight: true
    //     // fade: true
    //   }
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     centerMode: true,
    //     centerPadding: '10px',
    //     adaptiveHeight: true
    //     // fade: true
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     arrows: true,
    //     speed: 500,
    //     centerMode: true,
    //     centerPadding: '10px',
    //     adaptiveHeight: true
    //     // fade: true
    //   }
    // }
  // ]
};
const Projects = () => (
  <Parallax className="custom-class" x={[10, -10]}>
    <div className="columns">
      <div
        id="Projects"
        className="column is-mobile is-10 is-offset-1 is-offset-1-mobile is-10-mobile"
      >
        <div className="scrolling-wrapper">
          <Slider {...settings}>
            <div className="Item">
              <div id="proj1.5" className="box has-text-centered scrollbox p1">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.githubfinder}
                          alt="ReactApp"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>React Github Finder</strong>
                          </h4>
                          <p className="project-body">
                            A web app featuring React hooks and the Github API
                            to search for users on github and view relevant
                            profile information in a concise manner.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/jorgebustamante/react-github-finder">
                              Github
                            </a>
                            <br />
                            <a href="https://rodriguez-react-github-finder.netlify.com/">
                              Deploy
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
            <div className="Item">
              <div id="proj1" className="box scrollbox p2">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.scs}
                          alt="coffee"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>Seattle Coffee Search</strong>
                          </h4>
                          <p className="project-body">
                            Neighborhood oriented Cafe locator utilizing Yelp
                            and Google Maps API.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/macdhollister/Seattle-Coffee-Search">
                              Github
                            </a>
                            <br />
                            <a href="https://macdhollister.github.io/Seattle-Coffee-Search/">
                              Deployment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
            <div className="Item">
              <div id="proj2" className="scrollbox box p3">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.tradesies}
                          alt="coffee"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>Tradesies</strong>
                          </h4>
                          <p className="project-body">
                            Community oriented Web app for Trading and bartering
                            goods.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/Jostrange/Project2Giraffe">
                              Github
                            </a>
                            <br />
                            <a href="https://tradesies-app.herokuapp.com/">
                              Deployment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
            <div className="Item">
              <div id="proj3" className="scrollbox box p4">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.brownie}
                          alt="coffee"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>Brownie Points</strong>
                          </h4>
                          <p className="project-body">
                            Web app that allows parents to assign chores to
                            their children and reward them, built with React.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/truclyle/project-3">
                              Github
                            </a>
                            <br />
                            <a href="https://brownie-points-bp.herokuapp.com/">
                              Deployment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
            <div className="Item">
              <div id="proj4" className="box scrollbox p5">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.bamazon}
                          alt="coffee"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>Bamazon</strong>
                          </h4>
                          <p className="project-body">
                            A backend node.js merchant application. Logically
                            replicating the purchase and inventory function of
                            online shopping.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/jorgebustamante/bamazon/">
                              Github
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
            <div className="Item">
              <div id="proj5" className="box last scrollbox p6">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="card-background">
                        <img
                          className="card-img"
                          src={Media.todo}
                          alt="coffee"
                        />
                        <div className="card-text">
                          <h4 className="project-title">
                            <strong>Sequelize To-Do list</strong>
                          </h4>
                          <p className="project-body">
                            To-do list logic web app using Sequelize for queries
                            and Handlebars.js for templating.
                          </p>

                          <div className="project-links">
                            <a href="https://github.com/jorgebustamante/sequelize-todo-list">
                              Github
                            </a>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav className="level is-mobile" />
                  </div>
                </article>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </Parallax>
);

export default Projects;
