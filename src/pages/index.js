import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero.js";
import Cases from "../components/cases";

function IndexPage() {
  return (
    <>
      <Layout>
        <SEO />
        <Hero />
        <Cases />
      </Layout>
    </>
  );
}

export default IndexPage;
