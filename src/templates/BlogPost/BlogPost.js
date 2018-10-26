import React from "react";
import Helmet from "react-helmet";
import posed from "react-pose";

import { Link, graphql } from "gatsby";

// Use `posed.div` elements anywhere on the pages.
const Transition = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <div>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Transition>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        {prev && (
          <Link to={prev.frontmatter.path}>
            Previous: {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.path}>Next: {next.frontmatter.title}</Link>
        )}
      </Transition>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;