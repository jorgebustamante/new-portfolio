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
    // marginTop: 0,
    // from: { opacity: 0, marginTop: 100 },
    config: { mass: 10, tension: 500, friction: 200 },
    from: { opacity: 0,transform: "translate(0,10%)" },
    to: {opacity:1 , transform: "translate(0%,0)" },
  });
  return (
    <Layout>
    <div className="flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100 mt-1">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About Paulie"
      />
      <animated.div className="py-4" style={animationProps}>
        <section className="flex flex-col items-center bg-gray-100 mx-8 md:mx-0">
          <div className="md:w-3/4 w-full">
            <h1 className="mb-3 text-5xl text-gray-800 josefin">
              About Me:
            </h1>

            <div className="mb-6 text-gray-800 text-lg w-full">
              <div className="flex lg:flex-row flex-col py-4 justify-between border-b-2 border-gray-800">
                <div className="lg:w-1/2 relative">
                  <Img
                    fluid={data.vasquez.childImageSharp.fluid}
                    alt="paulie at vasquez rocks"
                    className="rounded-lg"
                  />
                  <p className="absolute font-bold text-xl text-white top-0 mx-4">
                    <span className="low-light-red josefin text-shadow">
                      Vasquez Rocks Agua Dulce 2018, Ricoh GXR100
                    </span>
                  </p>
                </div>

                <div className="flex flex-col lg:w-1/2 lg:ml-12">
                  <p className="yeseva text-4xl lg:text-5xl text-blue-900 pb-4">Aztlan at Heart</p>

                  <p className=" xl:text-2xl text-xl josefin leading-7">
                    My home is dearly the pacific, growing up in California,
                    Oregon and Washington I spent my youth experiencing all the
                    west coast has to offer. I am self-made, supporting myself
                    through service jobs such as baristing, coffee roasting, and
                    bartending.
                  </p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col-reverse py-4 align-middle border-b-2 border-gray-800">
                <div className="flex-col lg:w-1/2 lg:mr-12">
                  <p className="yeseva lg:text-5xl text-4xl text-blue-900 pb-4">Vagabond Artist</p>

                  <p className="josefin xl:text-2xl text-xl leading-7">
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
                    <span className="low-light-red josefin text-shadow">
                      {" "}
                      Kinwav studio Seattle 2016, Sony A7II
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:flex-row flex-col flex py-4 border-b-2 border-gray-800">
                <div className="w-full md:w-1/2 relative">
                  <Img
                    fluid={data.bartend.childImageSharp.fluid}
                    alt="paulie bartending"
                    className="rounded-lg"
                  />
                  <p className="absolute font-bold text-xl text-white top-0 mx-4">
                    <span className="low-light-red josefin text-shadow">
                      Bar Ciudad Seattle 2019, iPhone SE
                    </span>
                  </p>
                </div>
                <div className="flex flex-col lg:w-1/2 lg:ml-12">
                  <p className="yeseva lg:text-5xl text-4xl text-blue-900 pb-4">Proud Laborer</p>
                  <p className="josefin xl:text-2xl text-xl leading-7">
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
