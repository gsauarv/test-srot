import BlogLandingSection from "@/components/blogs/BlogLandingSection";
import { client } from "@/sanity/client";

const getBlogs = async () => {
  const blogs = await client.fetch(`*[_type == "blogs"]`, {
    next: {
      revalidate: 60,
      tags: ["blogs"],
    },
  });
  return blogs;
};

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <BlogLandingSection blogs={blogs} />
    </>
  );
};

export default BlogsPage;
