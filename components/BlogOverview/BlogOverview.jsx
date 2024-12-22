'use client';
import React, { useState } from 'react';

import AddNewBlog from '../AddNewBlog/AddNewBlog';

const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);

  return (
    <div className=" min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-400 to-blue-600  ">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
      />

      <div className="">Blog List Section</div>
    </div>
  );
};

export default BlogOverview;
