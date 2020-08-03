import React from "react";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../css/style.css";
import Layout from "../components/layout";

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
  return (
    <Layout>
      <div className="flex flex-col font-sans min-h-screen text-blue-900 bg-white mt-1">
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="About Paulie"
        />
        <div className="py-4">
          <section className="flex flex-col items-center bg-white">
            <div className="">
              <h1 className="mb-3 text-5xl text-blue-900 josefin font-bold border-b-2 border-blue-800">
                About Me:
              </h1>

              <div className="mb-6 text-blue-900 text-base w-full">
                <div className="flex lg:flex-row flex-col py-4 justify-between border-b-2 border-blue-800">
                  <div className="lg:w-1/2 relative">
                    <Img
                      fluid={data.vasquez.childImageSharp.fluid}
                      alt="paulie at vasquez rocks"
                      className="rounded-sm"
                      placeholderStyle={{
                        filter: `blur(20px)`,
                        WebkitFilter: `blur(20px)`,
                      }}
                    />
                    <p className="absolute font-semibold text-xl text-white top-0 mx-4">
                      <span className="low-light-red josefin text-shadow">
                        Vasquez Rocks Agua Dulce 2018, Ricoh GXR100
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col lg:w-1/2 lg:ml-12">
                    <p className="yeseva text-4xl lg:text-5xl text-blue-900 pb-4">
                      Aztlan at Heart
                    </p>

                    <p className=" xl:text-2xl text-xl josefin leading-7">
                      My home is dearly the pacific, growing up in California,
                      Oregon and Washington I spent my youth experiencing all
                      the west coast has to offer. I am self-made, supporting
                      myself through service jobs such as baristing, coffee
                      roasting, and bartending. <br />
                      Currently my skillset resides in UX Design and Frontend
                      Software Engineering, and I aim for leadership roles in UX
                      Engineering within my career.
                    </p>
                  </div>
                </div>

                <div className="flex lg:flex-row flex-col-reverse py-4 align-middle border-b-2 border-blue-800">
                  <div className="flex-col lg:w-1/2 lg:mr-12">
                    <p className="yeseva lg:text-5xl text-4xl text-blue-900 pb-4">
                      Vagabond Artist
                    </p>

                    <p className="josefin xl:text-2xl text-xl leading-7">
                      In Seattle I worked contract roles in commercial
                      photography for years, where I was mentored by{" "}
                      <a
                        href="https://www.instagram.com/lofisofi/?hl=en"
                        className="text-blue-500"
                      >
                        Sofia Lee
                      </a>
                      . In my mentorship, Sofia taught me the nuances of studio
                      lighting, optic distortions, field interviewing, location
                      scouting, and project direction. <br />
                      My experience working in the photography industry
                      conditioned me well for working in design, learning the
                      fundamentals of branding and creative directions. My work
                      in the industry includes contract work with publications
                      such as Teen Vogue, Vice, and Seattle Weekly.
                    </p>
                  </div>

                  <div className="lg:w-1/2 relative">
                    <Img
                      fluid={data.young.childImageSharp.fluid}
                      alt="paulie when younger"
                      className="rounded-sm"
                      placeholderStyle={{
                        filter: `blur(20px)`,
                        WebkitFilter: `blur(20px)`,
                      }}
                    />
                    <p className="absolute font-semibold text-xl text-white top-0 mx-4">
                      <span className="low-light-red josefin text-shadow">
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
                      className="rounded-sm"
                      placeholderStyle={{
                        filter: `blur(20px)`,
                        WebkitFilter: `blur(20px)`,
                      }}
                    />
                    <p className="absolute font-semibold text-xl text-white top-0 mx-4">
                      <span className="low-light-red josefin text-shadow">
                        Bar Ciudad Seattle 2019, iPhone SE
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col lg:w-1/2 lg:ml-12">
                    <p className="yeseva lg:text-5xl text-4xl text-blue-900 pb-4">
                      Proud Laborer
                    </p>
                    <p className="josefin xl:text-2xl text-xl leading-7">
                      In 2018 I had gained interest in software development and
                      embarked on a journey of learning, working various odd
                      jobs to suit my academic schedule. Filled with hardship
                      and determination, I began dedicating all of my time to
                      supporting myself and growth within the field. I aspire to
                      be a leader for latinx and native youth to continue
                      introducing more communities to tech who have the least
                      means of accessing it, and to empower historically
                      impoverished communities to pathways towards developing
                      greater generational wealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
