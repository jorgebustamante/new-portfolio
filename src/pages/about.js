import React from "react";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useSpring, animated } from "react-spring";
import "../css/style.css";
import Layout from '../components/layout'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      young: file(relativePath: { eq: "old.jpg" }) {
        ...wideImage
      }
      vasquez: file(relativePath: { eq: "vasquez.jpg" }) {
        ...wideImage
      }
      bartend: file(relativePath: { eq: "bartend.jpg" }) {
        ...wideImage
      }
    }
  `);
  const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 100 },
  });
  return (
    <Layout>
    <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <animated.div className=" py-4" style={animationProps}>
        <section className="flex flex-col items-center bg-gray-100 mx-8 md:mx-16">
          <div className="md:w-3/4 w-full">
            <h2 className="font-bold mb-3 lg:text-6xl text-4xl text-gray-800 josefin">
              About Me:
            </h2>

            <div className="mb-6 text-gray-800 text-lg w-full">
              <div className="flex lg:flex-row flex-col py-4 justify-between">
                <div className="lg:w-1/2 relative">
                  <Img
                    fluid={data.vasquez.childImageSharp.fluid}
                    alt="paulie at vasquez rocks"
                    className="rounded-lg"
                  />
                  <p className="absolute font-bold text-xl text-white top-0 mx-4">
                    <span className="low-light-red josefin">
                      Vasquez Rocks Agua Dulce 2018, Ricoh GXR100
                    </span>
                  </p>
                </div>

                <div className="flex flex-col lg:w-1/2 lg:ml-12">
                  <p className="josefin text-4xl lg:text-5xl text-gray-900">Aztlan at Heart</p>

                  <p className="lg:leading-relaxed lg:text-2xl text-xl">
                    My home is dearly the pacific, growing up in California,
                    Oregon and Washington I spent my youth experiencing all the
                    west coast has to offer. I am self-made, supporting myself
                    through service jobs such as baristing, coffee roasting, and
                    bartending.
                  </p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col-reverse py-4 align-middle">
                <div className="flex-col lg:w-1/2 lg:mr-12">
                  <p className="josefin lg:text-5xl text-4xl text-gray-900">Vagabond Artist</p>

                  <p className=" lg:leading-relaxed lg:text-2xl text-xl">
                    In Seattle I worked contract roles in commercial photography
                    for years, where I was mentored by{" "}
                    <a
                      href="https://www.instagram.com/lofisofi/?hl=en"
                      className="text-blue-500"
                    >
                      Sofia Lee
                    </a>
                    . In my mentorship, Sofia taught me the nuances of studio
                    lighting, optic distortions, field interviewing, location
                    scouting, and project direction.
                  </p>
                </div>

                <div className="lg:w-1/2 relative">
                  <Img
                    fluid={data.young.childImageSharp.fluid}
                    alt="paulie when younger"
                    className="rounded-lg"
                  />
                  <p className="absolute font-bold text-xl text-white top-0 mx-4">
                    <span className="low-light-red josefin">
                      {" "}
                      Kinwav studio Seattle 2016, Sony A7II
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:flex-row flex-col flex py-4">
                <div className="w-full md:w-1/2 relative">
                  <Img
                    fluid={data.bartend.childImageSharp.fluid}
                    alt="paulie bartending"
                    className="rounded-lg"
                  />
                  <p className="absolute font-bold text-xl text-white top-0 mx-4">
                    <span className="low-light-red josefin">
                      Bar Ciudad Seattle 2019, iPhone SE
                    </span>
                  </p>
                </div>
                <div className="flex flex-col lg:w-1/2 lg:ml-12">
                  <p className="josefin lg:text-5xl text-4xl text-gray-900">Proud Laborer</p>
                  <p className="lg:leading-relaxed lg:text-2xl text-xl">
                    In 2018 I had gained interest in software development and
                    embarked on a significant journey of learning. Filled with
                    hardship and unending determination, dedicating all of my
                    time to supporting myself and growth within my field. I aim
                    at career entry for hybrid design/engineering roles, and
                    aspire to be a leader for latinx and native youth to
                    continue introducing more communities to tech who have the
                    least means of accessing it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </animated.div>
    </div>
    </Layout>
  );
};

export default AboutPage;
