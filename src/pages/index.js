import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero.js";

function IndexPage() {
  return (
    <>
      <Layout>
        <SEO />
        <Hero />
      </Layout>
    </>
  );
}

export default IndexPage;
