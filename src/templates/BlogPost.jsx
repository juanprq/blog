import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPost = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
    <div className="blog-post">
      <h1>{post.frontmatter.title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  </Layout>
);

export default BlogPost;
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
