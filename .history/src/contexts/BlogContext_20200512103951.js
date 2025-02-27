import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }];
  return (
    <BlogContext.Provider value={'Hi there!'}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
