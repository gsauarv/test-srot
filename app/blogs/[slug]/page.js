import BlogDetails from "@/components/blogs/BlogDetails";
import { client } from "@/sanity/client";
import { revalidateTag } from "next/cache";

const getSingleBlogDetail = async (slug) => {
  const blogs = await client.fetch(
    `*[_type == "blogs"&&slug.current == "${slug}"]`,
    {
      next: {
        revalidate: 60,
        tags: [slug],
      },
    }
  );
  revalidateTag(slug, 60);
  return blogs;
};
const BlogDetailPage = async ({ params }) => {
  const blogDetails = await getSingleBlogDetail(params?.slug);

  return <BlogDetails blogDetails={blogDetails} />;
};

export default BlogDetailPage;
