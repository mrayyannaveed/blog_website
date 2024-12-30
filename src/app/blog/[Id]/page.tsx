import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

const BlogContent = async (props: any) => {
  // Decode the slug from the URL
  const decodedSlug = decodeURIComponent(props.params.Id);

  console.log("Decoded slug:", decodedSlug); // For debugging

  // Fetch the content using the decoded slug
  const res = await client.fetch(
    `*[_type == "blog" && slug.current == "${decodedSlug}"]{content}`
  );

  // Render the content or a fallback message
  if (!res || res.length === 0) {
    return <div>No Content Found</div>;
  }

  return <PortableText value={res[0].content}/>;
};

export default BlogContent;

