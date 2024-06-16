import BlogList from "@/components/Blog/BlogList";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="px-24">
      <h3 className="mt-8 ml-5 font-bold text-xl text-[var(--primary)]">
        All Latest blogs
      </h3>
      <BlogList />
    </div>
  );
};

export default BlogsPage;
