import React from 'react';
import Img from 'gatsby-image';
const Card = props => {
  return (
    <div className="Item">
      <div className="box has-text-centered scrollbox">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <div className="card-background">
                <Img
                  fluid={props.fluid}
                  imgStyle={{
                    maxWidth: '100%'
                  }}
                />
                <div className="card-text">
                  <h4 className="project-title">
                    <strong>{props.title}</strong>
                  </h4>
                  <p className="project-body">{props.description}</p>

                  <div className="project-links">
                    <a href={props.github}>Github</a>
                    <br />
                    {props.deploy ? <a href={props.deploy}>Deploy</a> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Card;
