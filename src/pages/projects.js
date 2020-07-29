import React from "react";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../css/style.css";
import Layout from "../components/layout";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      kodachrome: file(relativePath: { eq: "kodachrome.PNG" }) {
        ...wideImage
      }
      hals: file(relativePath: { eq: "hals.png" }) {
        ...wideImage
      }
      cholo: file(relativePath: { eq: "cholo.png" }) {
        ...wideImage
      }
    }
  `);
  const ProjectsArr = [
    {
      Title: "Hal's Office",
      Description:
        "A business website built with Gatsby, Contentful CMS and Tailwind.",
      Deploy: "http://halsofficecoffee.com/",
      Image: data.hals.childImageSharp.fluid,
      Tags: "Design, Development",
      Date: "2020",
    },
    {
      Title: "Cholo Name Generator",
      Description:
        "A cholo name generator in vanilla JS, names sourced from Homies LLC.",
      Deploy: "https://paulie-rodriguez.github.io/cholo-name-generator/",
      Repo: "https://github.com/paulie-rodriguez/cholo-name-generator",
      Image: data.cholo.childImageSharp.fluid,
      Tags: "Design, Development",
      Date: "2019",
    },
    {
      Title: "Kodachrome Gallery",
      Description:
        "An image gallery built with React + Gatsby, featuring archived Kodachrome slides, inspired by swiss design style",
      Deploy: "https://kodachrome-gallery.netlify.app/",
      Repo: "https://paulie-rodriguez.github.io/swiss-ui",
      Image: data.kodachrome.childImageSharp.fluid,
      Tags: "Design, Development",
      Date: "2019",
    },
  ];
  return (
    <Layout>
      <SEO/>
      <main className="pt-4" id="Projects">
        <div>
          <div className='border-b-2 border-blue-800'>
          <h1 className="text-4xl xl:text-5xl text-blue-900 josefin font-semibold">
            My Projects:
          </h1>
          <h2 className='josefin text-lg md:w-1/2 text-blue-900'>Here you&apos;ll find a variety of my work ranging from open source contributions, small side work, or web dev projects for fun.</h2>
          </div>
          <div className="flex flex-col">
            {ProjectsArr.map((Item) => (
              <div
                className="w-full py-8 border-b-2 border-blue-800"
                key={Item.Title}
              >
                <div className="flex flex-col lg:flex-row overflow-hidden">
                  <Img
                    className="lg:w-2/3 w-full rounded-lg"
                    fluid={Item.Image}
                    alt="screencap"
                    placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }}
                  />
                  <div className="lg:w-1/3 w-full py-4 lg:pl-4 flex flex-col justify-around">
                    <h1 className="text-blue-900 font-semibold text-3xl xl:text-4xl yeseva">
                      {Item.Title}{" "}
                    </h1>
                    <div className="text-blue-800 text-base xl:text-lg leading-relaxed josefin">
                      {Item.Description}
                    </div>
                    <div className="my-4 flex flex-col">
                      <a
                        className="text-blue-500 font-bold hover:underline"
                        href={`${Item.Deploy}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website ➔
                      </a>
                      {Item.Repo ? (
                        <a
                          className="text-blue-500 font-bold hover:underline"
                          href={`${Item.Repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repo ➔
                        </a>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between josefin text-base font-medium text-blue-800 pt-2">
                  <p id="tags" className="">
                    {Item.Tags}
                  </p>
                  <p id="date">{Item.Date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Projects;
