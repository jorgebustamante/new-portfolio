import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/hero.js';
import Projects from '../components/projects';

function IndexPage() {
 
  return (
    <>
    <Layout>
    <SEO/>
    <Hero />
    <Projects />
    </Layout>
    </>
  );
}

export default IndexPage;
