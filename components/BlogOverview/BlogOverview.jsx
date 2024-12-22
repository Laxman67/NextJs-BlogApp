'use client';
import React, { useState } from 'react';

import AddNewBlog from '../AddNewBlog/AddNewBlog';

const initailBlogFormData = {
  title: '',
  description: '',
};

const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initailBlogFormData);

  const handleSaveBlogData = async () => {
    try {
      const apiResponse = await fetch('api/add-blog', {
        method: 'POST',
        body: JSON.stringify(blogFormData),
      });
      const result = apiResponse.json();
      console.log(result);
    } catch (error) {
      console.log('error Occured ', error);
      setLoading(false);
      setBlogFormData(initailBlogFormData);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-400 to-blue-600  ">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />

      <div className="">Blog List Section</div>
    </div>
  );
};

export default BlogOverview;
