import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';

const DesignPage = () => {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='About'
      />
      <Header />
      <Footer />
    </>
  );
};
export default DesignPage;
