import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../components/previewCompatibleImage.js";

const Cases = () => {
  const data = useStaticQuery(graphql`
    query CasesQuery {
      allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "case-study" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date
              description
              tags
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const cases = data.allMdx.edges;

  return (
    <main className="py-4" id="Cases">
      <div className="">
        <h1 className="text-4xl xl:text-5xl text-blue-900 josefin font-bold">My Work:</h1>

        <div className="flex flex-col">
          {cases.map((Item) => (
            <div
              className="w-full py-8 border-t-2 border-blue-800"
              key={Item.node.frontmatter.title}
            >
              <div className="flex flex-col lg:flex-row overflow-hidden">
                <div className="lg:w-1/2 w-full">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: Item.node.frontmatter.featuredImage,
                      alt: `featured image thumbnail for post ${Item.node.frontmatter.title}`,
                    }}
                  />
                </div>

                <div className="lg:w-1/2 w-full py-4 lg:py-0 lg:pl-4 flex flex-col justify-around">
                  <div>
                  <h1 className="text-blue-900 font-semibold text-3xl xl:text-4xl yeseva">
                    {Item.node.frontmatter.title}{" "}
                  </h1>
                  <p className="text-blue-800 text-lg md:text-xl leading-relaxed josefin">
                    {Item.node.frontmatter.description}
                  </p>
                  </div>
                  <div className="my-4 flex flex-col">
                    <Link
                      className="text-blue-500 font-bold hover:underline josefin text-lg font-bold"
                      to={Item.node.fields.slug}
                    >
                      View Work ➔
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between josefin text-base text-blue-800 pt-2">
                <p id="date">{Item.node.frontmatter.date}</p>
                <div className="flex flex-row ">
                  {Item.node.frontmatter.tags.map((tag) => (
                    <p key={tag} className="mr-2 md:mr-8">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Cases;
