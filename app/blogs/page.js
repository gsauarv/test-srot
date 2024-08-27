import BlogLandingSection from "@/components/blogs/BlogLandingSection";
import { client } from "@/sanity/client";
import { revalidateTag } from "next/cache";

const getBlogs = async () => {
  const blogs = await client.fetch(`*[_type == "blogs"]`);
  revalidateTag("blogs", 60);
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
