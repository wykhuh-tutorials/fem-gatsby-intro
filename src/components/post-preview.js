import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
  `}
  >
    <h3><Link to={post.slug}>{post.title}</Link></h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>Read more</Link>
  </article>
)

export default PostPreview;
