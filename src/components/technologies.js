import React from 'react';
import './style.scss';
import { Parallax } from 'react-scroll-parallax';
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithub,
  DiGoogleCloudPlatform,
  DiHtml5,
  DiIllustrator,
  DiJava,
  DiJavascript,
  DiJqueryLogo,
  DiNodejs,
  DiPhotoshop,
  DiMysql,
  DiMongodb,
  DiReact
} from 'react-icons/di';

const Technologies = () => (
  <Parallax className="custom-class" y={[50, -50]}>
    <div className="columns is-mobile is-gapless">
      <div id="Technologies" className="column is-10 is-offset-1">
        <div className="card">
          <div className="card-content">
            <h4 className="headers title is-4">Technologies I use</h4>
            <div className="content has-text-centered tech-grid">
              <div className="tech">
                <i className="devicon-bootstrap-plain colored">
                  <DiBootstrap />{' '}
                </i>
                <p className="tech-title">Bootstrap</p>
              </div>
              <div className="tech">
                <i className="devicon-css3-plain-wordmark colored">
                  <DiCss3 />{' '}
                </i>
                <p className="tech-title">CSS3</p>
              </div>

              <div className="tech">
                <i className="devicon-git-plain colored">
                  {' '}
                  <DiGit />{' '}
                </i>
                <p className="tech-title">Git</p>
              </div>
              <div className="tech">
                <i className="devicon-github-plain colored">
                  {' '}
                  <DiGithub />{' '}
                </i>
                <p className="tech-title">GitHub</p>
              </div>
              <div className="tech">
                <i className="devicon-google-plain colored">
                  {' '}
                  <DiGoogleCloudPlatform />{' '}
                </i>
                <p className="tech-title">Google APIs</p>
              </div>
              <div className="tech">
                <i className="devicon-html5-plain-wordmark colored">
                  {' '}
                  <DiHtml5 />{' '}
                </i>
                <p className="tech-title">HTML5</p>
              </div>
              <div className="tech">
                <i className="devicon-illustrator-plain colored">
                  {' '}
                  <DiIllustrator />{' '}
                </i>
                <p className="tech-title">Illustrator</p>
              </div>
              <div className="tech">
                <i className="devicon-java-plain colored">
                  {' '}
                  <DiJava />{' '}
                </i>
                <p className="tech-title">Java</p>
              </div>
              <div className="tech">
                <i className="devicon-javascript-plain colored">
                  {' '}
                  <DiJavascript />{' '}
                </i>
                <p className="tech-title">JavaScript</p>
              </div>
              <div className="tech">
                <i className="devicon-jquery-plain-wordmark colored">
                  {' '}
                  <DiJqueryLogo />{' '}
                </i>
                <p className="tech-title">Jquery</p>
              </div>
              <div className="tech">
                <i className="devicon-mongodb-plain colored">
                  {' '}
                  <DiMongodb />{' '}
                </i>
                <p className="tech-title">MongoDB</p>
              </div>
              <div className="tech">
                <i className="devicon-nodejs-plain-wordmark colored">
                  {' '}
                  <DiNodejs />{' '}
                </i>
                <p className="tech-title">Node.js</p>
              </div>
              <div className="tech">
                <i className="devicon-photoshop-plain colored">
                  {' '}
                  <DiPhotoshop />{' '}
                </i>
                <p className="tech-title">Photoshop</p>
              </div>
              <div className="tech">
                <i className="devicon-react-original colored">
                  {' '}
                  <DiReact />{' '}
                </i>
                <p className="tech-title">React.js</p>
              </div>

              <div className="tech">
                <i className="devicon-mysql-plain colored">
                  {' '}
                  <DiMysql />
                </i>
                <p className="tech-title">MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

export default Technologies;
