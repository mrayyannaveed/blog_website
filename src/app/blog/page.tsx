import { client } from "@/sanity/lib/client";
import BlogComp from "../components/blogComp"

const Blog = async () => {

  const blogData = await client.fetch(`*[_type == "blog"]`);
  // console.log(blogData);
  return (
<section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6]">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      {blogData.map((data: any) => {
        return(
          <BlogComp cat={data.category} date={data.date} head={data.title} desc={data.desc} slug={data.slug.current} content={data.content}/>
        )
      })
      }
    </div>
  </div>
</section>
  )
}

export default Blog