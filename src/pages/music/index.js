import React from "react";
import SEO from "../../components/seo";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import PreviewCompatibleImage from "../../components/previewCompatibleImage.js";
import "../../css/style.css";
import Layout from "../../components/layout";

const MusicPage = () => {
//   const data = useStaticQuery(graphql`
//     query ArtQuery {
//       allMdx(
//         sort: { order: DESC, fields: [frontmatter___title] }
//         filter: { frontmatter: { templateKey: { eq: "art-case" } } }
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 400)
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               templateKey
//               date
//               description
//               featuredImage {
//                 childImageSharp {
//                   fluid(maxWidth: 600, quality: 100) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   const cases = data.allMdx.edges;
  return (
    <Layout>
      <SEO />
      <main className="pt-4 " id="Art">
        <div className="">
          <div className=''>
          <h1 className="text-4xl xl:text-5xl text-ink font-semibold josefin pb-2">
            My Music Ramblings:
          </h1>
          <p className='josefin text-lg md:text-xl md:w-2/3 text-ink'>Here you&apos;ll soon find my music writings and appraisals.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default MusicPage;
