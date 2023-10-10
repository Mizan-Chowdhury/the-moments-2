import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import Navbar from "../Navbar";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10 px-4">
        {blogsData.map((blogs) => (
          <BlogsCard key={blogs.id} blogs={blogs}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
