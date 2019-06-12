import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview'
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hi</p>
      <Link to="/about/">About</Link>

      <h2>My Blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post}/>
      ))}
    </Layout>
  );

}
