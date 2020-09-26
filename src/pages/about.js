import React from "react";
import SEO from "../components/seo";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import "../css/style.css";
import Layout from "../components/layout";

const AboutPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     young: file(relativePath: { eq: "old.jpg" }) {
  //       ...wideImage
  //     }
  //     vasquez: file(relativePath: { eq: "vasquez.jpg" }) {
  //       ...wideImage
  //     }
  //     bartend: file(relativePath: { eq: "bartend.jpg" }) {
  //       ...wideImage
  //     }
  //   }
  // `);
  return (
    <Layout>
      <div className="flex flex-col font-sans min-h-screen text-blue-900 bg-white mt-1">
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="About me"
        />
        <div className="py-4">
          <section className="flex flex-col items-center bg-white">
            <div className="">
              <h1 className="mb-3 text-5xl text-blue-900 josefin font-bold border-b-2 border-blue-800">
                About Me:
              </h1>
              <p>Hey! Im under construction</p>

            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
