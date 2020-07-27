import React from "react";
import PropTypes from 'prop-types';

import Layout from "../components/layout";
import SEO from "../components/seo";
import avatar from "../images/avatar.png";

function NotFoundPage({ children }) {
  return (
    <Layout>
      <SEO title="404?! Not found" />
         <main className='flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full'>
        {children}
      </main>
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={avatar}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 josefin">
          <span className='yeseva italic text-5xl'>QueBerga ;V!?  </span>How did you get to this page? I think if you&apos;re seeing this you typed something wrong in the URL bar, but if you clicked a link and got brought here please contact me about it!
        </h2>
      </div>
    </Layout>
  );
}
NotFoundPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default NotFoundPage;
