import React from "react";
import PropTypes from 'prop-types';

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage({ children }) {
  return (
    <Layout>
      <SEO title="404: Not found" />
         <main className='flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full'>
        {children}
      </main>
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}
NotFoundPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default NotFoundPage;
